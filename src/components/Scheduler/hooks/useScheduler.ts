import { useState, useEffect } from 'react';
import mockData from 'src/utils/schedules-mock.json';

import { ISchedule } from 'src/types/schedule';

type Availability = {
  from: number;
  to: number;
  available: boolean;
}[];

type TimesMap = {
  [key: number]: boolean;
};

const useScheduler = () => {
  const [date, setDate] = useState('');
  const [schedule, setSchedule] = useState<ISchedule>([]);

  const [timesMap, setTimesMap] = useState<TimesMap>({});

  // mimic server request through a promise and show a loading spinner while fetching data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMockData();
  }, []);

  const getMockData = () => {
    setLoading(true);
    setTimeout(() => {
      if (mockData?.status === 200 && mockData?.schedule?.length > 0) {
        setSchedule(mockData.schedule);
      }
      setLoading(false);
    }, 2000);
  };

  const setDayAvailability = (day: string) => {
    setDate(day);
    const dayInSchedule = schedule.find(
      (item) => item.availability.date === day
    );

    if (!dayInSchedule) return;
    let unsortedAvailability: Availability = [];
    // assign unavailable time
    dayInSchedule.unavailable.map(({ from_unix, to_unix }) => {
      const from = new Date(from_unix * 1000).getHours();
      const to = new Date(to_unix * 1000).getHours();

      unsortedAvailability.push({ from, to, available: false });
      return { from, to };
    });

    // assign available time
    dayInSchedule.available.map(({ from_unix, to_unix }) => {
      const from = new Date(from_unix * 1000).getHours();
      const to = new Date(to_unix * 1000).getHours();

      unsortedAvailability.push({ from, to, available: true });

      return { from, to };
    });

    // arrange availability
    let sortedAvailability = unsortedAvailability.sort(
      (a, b) => a.from - b.from
    );

    // !Wrong Data manipulation: I found a conflict between in availability such as in 27th Aug:
    // available from (10 am to 3 pm & 4 pm to 8 pm )
    // unavailable from (10 am to 12pm pm & 6 pm to 7 pm )
    // So the next lines are a workaround for it to skip the duplicates. In normal time, I would have a discussion with the backend developer for certain conditions.

    const times: TimesMap = {};
    sortedAvailability.forEach(({ from, to, available }, i) =>
      [...new Array(to - from)].forEach((_, index) => {
        times[from + index] = available;
      })
    );

    setTimesMap(times);
  };

  return {
    loading,
    date,
    schedule,
    timesMap,
    setDayAvailability,
  };
};

export default useScheduler;
