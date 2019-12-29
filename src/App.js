import React from 'react';
import LoginPage from "./routes/LoginPage/LoginPage";
import SearchPage from "./routes/SearchPage/SearchPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import LandingPage from "./routes/LandingPage/LandingPage";
//import SigninForm from './components/LoginForm/SigninForm'
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import PrivateRoute from "./components/Utils/PrivateRoute";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={LandingPage}
                    />
                    <PublicOnlyRoute
                        exact
                        path={'/login'}
                        component={LoginPage}
                    />
                    <PublicOnlyRoute
                        exact
                        path={'/register'}
                        component={RegistrationPage}
                    />
                    <PrivateRoute
                        exact
                        path={'/search'}
                        component={SearchPage}
                    />
                    <Route
                        component={NotFoundPage}
                    />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
