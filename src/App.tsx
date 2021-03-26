import LoginPage from './features/auth/LoginPage/LoginPage';
// import Button from './components/Button/Button';
import Dashboard from './components/Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      {/* <Button /> */}
    </div>

  );
}

export default App;
