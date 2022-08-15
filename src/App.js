import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [user, updateUser]=useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>{
            user && user._id ? <Homepage updateUser={updateUser}/> : <Login updateUser={updateUser}/>
          }</Route>
          <Route path='/login'><Login updateUser={updateUser}/></Route>
          <Route path='/register'><Register/></Route>
        </Switch>
      </Router>  
      
      
    </div>
  );
}

export default App;
