import {
  Box,
  Button,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Divider,
} from '@mui/material';
import clsx from 'clsx';
import useScheduler from './hooks/useScheduler';
import PickTime from './PickTime';
import PickDay from './PickDay';

import styles from './styles.module.css';

const Scheduler = () => {
  const { date } = useScheduler();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className={styles.wrapper}
    >
      <Box>
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
            <PickDay />

            <Typography className={styles.subTitle}>Choose time</Typography>

            <PickTime />
          </CardContent>
        </Box>
        <Button
          variant="contained"
          fullWidth
          size="large"
          className={styles.bookingBtn}
        >
          Book Appointment
        </Button>
      </Box>
    </Grid>
  );
};

export default Scheduler;
