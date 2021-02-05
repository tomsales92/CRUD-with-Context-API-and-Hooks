import { Switch, Route } from 'react-router-dom';

import Solicitation from '../pages/Solicitation';
import Edit from '../pages/Solicitation/edit';
import Add from '../pages/Solicitation/add';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Solicitation} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/add" component={Add} />
    </Switch>
  );
}
export default Routes;
