import {
  Box,
  Button,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import clsx from 'clsx';
import useScheduler from './hooks/useScheduler';
import PickDay from './PickDay';
import PickTime from './PickTime';

import useAppointment from './hooks/useAppointment';
import styles from './styles.module.css';

const Scheduler = () => {
  const { schedule, setDayAvailability, timesMap, loading, date } =
    useScheduler();
  const { handleAppointment, handleBooking, appointment } =
    useAppointment(date);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className={styles.wrapper}
    >
      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box className={styles.content}>
          <Typography variant="h4" gutterBottom className={styles.title}>
            Schedule Appointment
          </Typography>
          <Box boxShadow={2} px={2} mt={4} mb={2}>
            <CardHeader
              titleTypographyProps={{
                className: clsx(styles.subTitle, styles.fees),
              }}
              title="Fees"
              className={styles.cardTitle}
              action={<Typography variant="body2">25$</Typography>}
            />
            <Divider />
            <CardContent sx={{ p: 0 }}>
              <Typography className={styles.subTitle}>Schedule</Typography>
              <PickDay
                schedule={schedule}
                setDayAvailability={setDayAvailability}
              />
              {Object.keys(timesMap)?.length > 0 && (
                <>
                  <Typography className={styles.subTitle}>
                    Choose time
                  </Typography>
                  <PickTime
                    timesMap={timesMap}
                    handleAppointment={handleAppointment}
                  />
                </>
              )}
            </CardContent>
          </Box>
          <Button
            variant="contained"
            fullWidth
            size="large"
            className={styles.bookingBtn}
            onClick={handleBooking}
            disabled={appointment?.time?.length === 0}
          >
            Book Appointment
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default Scheduler;
