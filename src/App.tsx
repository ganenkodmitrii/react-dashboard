import LoginPage from './features/auth/LoginPage/LoginPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import FormPage from './features/home/pages/FormPage';
import { Switch, Route } from 'react-router-dom';

// import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
      {/* <Button /> */}
    </div>
  );
}

export default App;
