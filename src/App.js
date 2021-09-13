
import './App.css';
import Home from './Home';
import Cultural from './Cultural';
import Social from './Social';
import Tech from './Tech';
import{Route,Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Talks from './Talks'
function App() {
  return (
    <div className="App">
    <Navbar/>
     <Switch>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/tech' component={Tech}></Route>
       <Route exact path='/cultural' component={Cultural}></Route>
       <Route exact path='/social' component={Social}></Route>
       <Route exact path='/talks' component={Talks}></Route>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
