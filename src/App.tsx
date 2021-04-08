import { Switch, Route } from 'react-router-dom';
import { RouteProps } from 'types/common';
import { routes } from './routes';

const App: React.FC = () => {
  const renderRoute = (params: RouteProps, index: number) => <Route key={index} {...params} />;

  return <Switch>{routes.map(renderRoute)}</Switch>;
};

export default App;
