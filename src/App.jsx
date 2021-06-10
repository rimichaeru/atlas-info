import styles from './App.module.scss';
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
