import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import UserDetail from './userDetail/index';
import RepoListingPage from './RepoListingPage/index'
import IssueListingPage from './IssueListingPage/index';
import IssueDescribePage from './issueDescribePage/index';
import PageNotFound from './PageNotFound/index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={UserDetail} />
            <Route exact path="/users/:gitUserName/repos" component={RepoListingPage} />
            <Route exact path="/repos/:gitUserName/:gitRepoName/issues/" component={IssueListingPage} />
            <Route exact path="/repos/:gitUserName/:gitRepoName/issues/:issueNumber" component={IssueDescribePage} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;