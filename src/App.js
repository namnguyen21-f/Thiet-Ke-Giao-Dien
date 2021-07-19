import Home from './pages/Home/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { Fragment } from 'react';
import './App.css';


//title: title of link, path: destination
const navData = [
  {
    title: "Trang chủ",
    path: "/"
  },
  {
    title: "Bình chọn",
    path: "/binhchon"
  },
  {
    title: "Following",
    path: "/following"
  },
  {
    title: "LiveStream",
    path: "/livestream"
  },
]

//Wrap navigation for page that need navBar
const NavigationWrapper = (props) =>{
  return (
    <Fragment>
      <div className="navSection">
        <NavigationBar navData={navData}></NavigationBar>
      </div>
      <div className="MainSection">
        {props.children}
      </div>
    </Fragment>
  )
} 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavigationWrapper>
              <Home></Home>
            </NavigationWrapper>
          </Route>
          <Route path="/binhchon">
            <NavigationWrapper>
              
            </NavigationWrapper>
          </Route>
          <Route path="/following">
            <NavigationWrapper>
              
            </NavigationWrapper>
          </Route>
          <Route path="/livestream">
            <NavigationWrapper>
              
            </NavigationWrapper>
          </Route>
        </Switch>
        
        
      </div>
    </Router>
    
  );
}

export default App;
