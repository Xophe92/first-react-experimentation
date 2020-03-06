import React from 'react';
import './App.css';

import FilmList from './components/FilmList'


class App extends React.Component {
  
  
  
  render(){
    return (
      <>
      Ci-dessous une liste de films !
      <FilmList />
      </>
    );
  }



}

export default App;
