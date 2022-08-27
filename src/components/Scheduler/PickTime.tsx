import { Button, Grid } from '@mui/material';
import clsx from 'clsx';
import moment from 'moment';

import { useState } from 'react';
import styles from './styles.module.css';

type Props = {
  timesMap: {
    [key: number]: boolean;
  };
  handleAppointment: (time: string) => void;
};

const PickTime = ({ timesMap = {}, handleAppointment }: Props) => {
  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <Grid container pt={0} rowSpacing={1} columnSpacing={1.6}>
      {Object.keys(timesMap).map((time: any, i) => (
        <Grid item xs={4} mb={2} key={`time-to-pick-${i}`}>
          <Button
            variant="outlined"
            className={clsx(
              styles.timeBtn,
              timesMap[time] ? '' : styles.btnDisabled,
              activeBtn === i ? styles.btnActive : ''
            )}
            disabled={!timesMap[time]}
            onClick={(e) => {
              setActiveBtn(i);
              handleAppointment(moment(time, 'hh').format('h:00 a'));
            }}
          >
            {moment(time, 'hh').format('h:00 a')}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
export default PickTime;
