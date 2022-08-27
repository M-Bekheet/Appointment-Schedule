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
        <Box className={styles.holder}>
          <Typography variant="h4" gutterBottom className={styles.title}>
            Schedule Appointment
          </Typography>
          <Box className={styles.content}>
            <CardHeader
              titleTypographyProps={{
                className: clsx(styles.subTitle, styles.fees),
              }}
              title="Fees"
              className={styles.cardTitle}
              action={
                <Typography variant="body1" className={styles.feesNumber}>
                  85$
                </Typography>
              }
            />
            <Divider color="#E1E1E1" />
            <CardContent>
              <Typography className={styles.subTitle}>Schedule</Typography>
              <PickDay
                schedule={schedule}
                setDayAvailability={setDayAvailability}
              />
              {Object.keys(timesMap)?.length > 0 ? (
                <>
                  <Typography className={styles.subTitle}>
                    Choose time
                  </Typography>
                  <PickTime
                    timesMap={timesMap}
                    handleAppointment={handleAppointment}
                  />
                </>
              ) : (
                <Box>
                  <Typography
                    variant="body2"
                    my={2}
                    textAlign="center"
                    color="grey.500"
                  >
                    Choose a day to show the available time
                  </Typography>
                </Box>
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
