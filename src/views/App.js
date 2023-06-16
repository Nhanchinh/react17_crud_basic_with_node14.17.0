import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/Mycomponent';
import ChildComponent from './example/ChildComponent';
import ListTodo from './todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import Home from './example/Home';
import ListUser from './User/ListUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />


          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />



          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <Mycomponent />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
          </Switch>
          {/* <Mycomponent /> */}
          {/* <ListTodo></ListTodo> */}

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
