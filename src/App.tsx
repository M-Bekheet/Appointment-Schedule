import Scheduler from './components/Scheduler';
import Layout from './UI/Layout';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider preventDuplicate>
      <Layout>
        <Scheduler />
      </Layout>
    </SnackbarProvider>
  );
}

export default App;
