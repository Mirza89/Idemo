import React from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Rooms from './Rooms/Rooms';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render(){
    return (
      <div>
        <Nav />
        <br/>
        <Rooms/>
      </div>
    );
  }

}

export default App;
