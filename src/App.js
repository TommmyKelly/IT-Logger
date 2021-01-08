import { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBnt from './components/layout/AddBnt';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    //initalise materailise
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBnt />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
