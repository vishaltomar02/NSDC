import React from 'react';
import { Route , Switch } from 'react-router-dom';
import AppTemplatePage from './AppTemplatePage';

function App(props) {
  console.log(props);
  return (
    <Switch>
      <Route path='/' component={AppTemplatePage}/>
    </Switch>
  );
}

export default App;
