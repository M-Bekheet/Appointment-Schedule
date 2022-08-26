import { Button, Grid } from '@mui/material';
import { ISchedule } from 'src/types/schedule';
import formatDate from 'src/utils/formatDate';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

const date = new Date();
const afterMonth = date.setMonth(date.getMonth() + 1);
const today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate());
let tomorrowInUnix = tomorrow.getTime();

type Props = {
  setDayAvailability: (day: string) => void;
  schedule: ISchedule;
};

const PickDay = ({ setDayAvailability, schedule }: Props) => {
  const handleDayClick = (date: string) => {
    setDayAvailability(date);
  };
  return (
    <Grid className={styles.carousel}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={35}
        slidesPerView={4}
      >
        {schedule?.map((item, i) =>
          tomorrowInUnix <
            Math.floor(
              new Date(formatDate(item.availability.date)).getTime()
            ) &&
          Math.floor(new Date(formatDate(item.availability.date)).getTime()) <
            afterMonth ? (
            <SwiperSlide key={`pickDay-swiper-slide-${i}`}>
              <Grid item pb={1} key={`pick-schedule-date`}>
                <Button
                  variant="outlined"
                  onClick={(e) => handleDayClick(item.availability.date)}
                  className={styles.pickDayBtn}
                >
                  {item.availability.day.split('').slice(0, 3).join('')}
                  <br />
                  {item.availability.date.split('-')[0]}
                </Button>
              </Grid>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </Grid>
  );
};
export default PickDay;
