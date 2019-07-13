import React from 'react';
import FrontPage from './Component/FrontPage';
import SecondPage from './Component/SecondPage';

class App extends React.Component{


  render(){
    return (
      <div>
        <FrontPage />
        <SecondPage/>
      </div>
    );
  }
}

export default App;
