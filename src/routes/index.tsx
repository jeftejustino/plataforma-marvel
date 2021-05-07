import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '@base/pages/SignIn';
import Characters from '@base/pages/Characters';
import Movies from '@base/pages/Movies';
import Hqs from '@base/pages/Hqs';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate={false} component={SignIn} />
      <Route path="/characters" exact isPrivate={true} component={Characters} />
      <Route path="/movies" exact isPrivate={true} component={Movies} />
      <Route path="/hqs" exact isPrivate={true} component={Hqs} />
    </Switch>
  );
};

export default Routes;
