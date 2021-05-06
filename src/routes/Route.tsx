import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '@base/pages/_layouts/auth';
import DefaultLayout from '@base/pages/_layouts/default';

import { store } from '@base/store';

interface IProps {
  component: React.FC;
  isPrivate: boolean;
  exact: boolean;
  path: string;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/characters" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;
  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
