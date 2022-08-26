import { Grid, Button } from '@mui/material';
import moment from 'moment';

import styles from './styles.module.css';

type Props = {
  timesMap: {
    [key: number]: boolean;
  };
  handleAppointment: (time: string) => void;
};

const PickTime = ({ timesMap = {}, handleAppointment }: Props) => {
  return (
    <Grid container pt={0} sx={{ flexWrap: 'wrap' }}>
      {Object.keys(timesMap).map((time: any, i) => (
        <Grid item xs={4} mb={2} key={`time-to-pick-${i}`}>
          <Button
            variant="outlined"
            sx={{
              color: 'common.black',
              boxShadow: timesMap[time] ? 2 : 0,
              border: 'none',
            }}
            className={styles.btn}
            disabled={!timesMap[time]}
            onClick={(e) =>
              handleAppointment(moment(time, 'hh').format('h:00 a'))
            }
          >
            {moment(time, 'hh').format('h:00 a')}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
export default PickTime;
