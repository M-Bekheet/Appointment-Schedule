import { Button, Grid } from '@mui/material';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

const DAYS = [
  {
    DayText: 'Mon',
    DayNumber: 11,
  },
  {
    DayText: 'Tue',
    DayNumber: 12,
  },
  {
    DayText: 'Wed',
    DayNumber: 12,
  },
  {
    DayText: 'Thur',
    DayNumber: 13,
  },
  {
    DayText: 'Thur',
    DayNumber: 13,
  },
  {
    DayText: 'Thur',
    DayNumber: 13,
  },
  {
    DayText: 'Thur',
    DayNumber: 13,
  },
];

const PickDay = () => {
  return (
    <Grid className={styles.carousel}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
      >
        {DAYS.map((day, i) => (
          <SwiperSlide key={`pickDay-swiper-slide-${i}`}>
            <Grid item xs={12} pb={1} key={`pick-schedule-date-${i}`}>
              <Button variant="outlined" key={`pick-schedule-date-${i}`}>
                {day.DayText}
                <br />
                {day.DayNumber}
              </Button>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};
export default PickDay;
