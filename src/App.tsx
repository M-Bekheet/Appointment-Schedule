import Scheduler from './components/Scheduler';
import Layout from './UI/Layout';
import Theme from './UI/Theme';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Theme>
      <SnackbarProvider preventDuplicate>
        <Layout>
          <Scheduler />
        </Layout>
      </SnackbarProvider>
    </Theme>
  );
}

export default App;
