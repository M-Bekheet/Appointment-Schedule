import { useSnackbar } from 'notistack';
import { useState } from 'react';

type Appointment = {
  date: string;
  time: string;
};

const useAppointment = (date: string) => {
  const [appointment, setAppointment] = useState<Appointment>({
    date: '',
    time: '',
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleAppointment = (time: string) => {
    if (date.length === 0 || time.length === 0) return;

    setAppointment({
      time,
      date,
    });
  };

  const handleBooking = () => {
    const { date, time } = appointment;

    if (date.length === 0 || time.length === 0) {
      return enqueueSnackbar(`Please Pick valid time`, {
        variant: 'error',
      });
    }

    enqueueSnackbar(
      `Thank you. Your appointment has been successfully reserved.
      Date: ${date}
      Time: ${time}`,
      {
        variant: 'success',
        // style: { whiteSpace: 'pre-line' },
      }
    );
  };

  return {
    handleAppointment,
    handleBooking,
    appointment,
  };
};

export default useAppointment;
