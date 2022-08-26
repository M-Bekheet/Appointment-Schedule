import mockData from 'src/utils/schedules-mock.json';

const useScheduler = () => {
  const date: Date[] = [];

  const { schedule } = mockData;

  return {
    date,
    schedule,
  };
};

export default useScheduler;
