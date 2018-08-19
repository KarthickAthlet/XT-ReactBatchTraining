import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import UserDetail from './userDetail/index';
import IssueListingPage from './issueListingPage/index';
import IssueDescribePage from './issueDescribePage/index';
import PageNotFound from './PageNotFound/index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={UserDetail} />
            <Route exact path="/IssueListingPage" component={IssueListingPage} />
            <Route exact path="/IssueDescribePage" component={IssueDescribePage} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;