import { Switch, Route } from 'react-router-dom';
import { RouteProps } from 'types/common';
import { routes } from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const renderRoute = (params: RouteProps, index: number) => <Route key={index} {...params} />;

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>{routes.map(renderRoute)}</Switch>
    </QueryClientProvider>
  );
};

export default App;
