import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SearchJobs from './components/jobs/SearchJobs';
import Application from './components/application/Application';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route exact path='/jobs'>
              <SearchJobs />
            </Route>
            <Route exact path='/application'>
              <Application />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
