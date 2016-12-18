import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Root from '~/containers/root/Root';
import OverviewPage from '~/containers/overview-page';
import TournamentPage from '~/containers/tournament-page';


export default (
    <Router>
        <Route path="/" component={Root}>
            <IndexRoute component={OverviewPage} />
            <Route path="/tournament/:id" component={TournamentPage} />
        </Route>
    </Router>
);
