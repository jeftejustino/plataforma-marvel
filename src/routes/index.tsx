import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '@base/pages/SignIn';
import Characters from '@base/pages/Characters';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate={false} component={SignIn} />
      <Route path="/characters" exact isPrivate={true} component={Characters} />

      {/* <Route path="/alunos/adicionar" isPrivate component={StudentsForm} />
      <Route
        path="/alunos/editar/:student_id"
        isPrivate
        component={StudentsForm}
      />
      <Route path="/alunos" isPrivate component={StudentsList} />

      <Route path="/planos/adicionar" isPrivate component={PlansForm} />
      <Route path="/planos/editar/:plan_id" isPrivate component={PlansForm} />
      <Route path="/planos" isPrivate component={PlansList} />

      <Route
        path="/matriculas/adicionar"
        isPrivate
        component={RegistrationsForm}
      />
      <Route
        path="/matriculas/editar/:registration_id"
        isPrivate
        component={RegistrationsForm}
      />
      <Route path="/matriculas" isPrivate component={RegistrationsList} />

      <Route path="/pedidos-de-auxilio" isPrivate component={HelpOrders} /> */}
    </Switch>
  );
};

export default Routes;
