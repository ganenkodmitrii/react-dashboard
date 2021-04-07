import LoginPage from './features/auth/LoginPage/LoginPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import FormRepeater from './features/home/FormRepeater/FormRepeater';
import TeamsPage from './features/teams/TeamsPage';
import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/form" component={FormRepeater} />
        <Route path="/teams" component={TeamsPage} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
