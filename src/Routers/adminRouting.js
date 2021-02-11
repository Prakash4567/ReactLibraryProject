import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../AdminHome/header';
import Profile from '../AdminHome/Profile';
import Pending from '../AdminHome/PendingBooks';
import Returns from '../AdminHome/ReturnBooks';
import Invoke from '../AdminHome/InvokeMembership';
import Update from '../AdminHome/UpdateBooks';
import add from '../AdminHome/AddBooks';
import update from '../AdminHome/UpdatingBooks';
import Delete from '../AdminHome/DeleteBooks';
import Body from '../AdminHome/body';
function AdminRouting() {
    return (
        <Router>
            <Switch>
                <Route exact path="/Admin/AdminHome" component={home} />
                <Route exact path="/AdminHome/Pendingbooks" component={Pending} />
                <Route exact path="/AdminHome/ReturnBooks" component={Returns} />
                <Route exact path="/AdminHome/InvokeMemberships" component={Invoke} />
                <Route exact path="/AdminHome/profile" component={Profile} />
                <Route exact path="/AdminHome/Updatebooks" component={Update} />
                <Route exact path="/Admin/UpdateBooks/AddBooks" component={add} />
                <Route exact path="/Admin/UpdateBooks/Updateingbooks" component={update} />
                <Route exact path="/Admin/UpdateBooks/DeleteBooks" component={Delete} />
            </Switch>
        </Router>
    )
}
const home = () => (
    <div>
      <Header name="User Name" />
      <Body />
    </div>
);

export default AdminRouting