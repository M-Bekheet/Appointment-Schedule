import { Container, CssBaseline, Grid } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Grid>
      <CssBaseline />
      <Container maxWidth={false}>{children}</Container>
    </Grid>
  );
}

export default Layout;
