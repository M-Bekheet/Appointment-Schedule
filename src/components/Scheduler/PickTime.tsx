import { Grid, Button } from '@mui/material';

const PickTime = () => {
  return (
    <Grid container pt={0} spacing={2} sx={{ flexWrap: 'wrap' }}>
      <Grid item xs={4} pb={1}>
        <Button variant="outlined">10:00</Button>
      </Grid>
      <Grid item xs={4} pb={1}>
        <Button variant="outlined">11:00</Button>
      </Grid>
      <Grid item xs={4} pb={1}>
        <Button variant="outlined">12:00</Button>
      </Grid>
    </Grid>
  );
};
export default PickTime;
