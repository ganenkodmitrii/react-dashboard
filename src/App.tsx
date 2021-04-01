import LoginPage from './features/auth/LoginPage/LoginPage';
// import Button from './components/Button/Button';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import FormRepeater from './features/home/FormRepeater/FormRepeater';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/form" component={FormRepeater} />
      </Switch>
      {/* <Button /> */}
    </div>
  );
}

export default App;
