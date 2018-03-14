import React from 'react';
import {Route, Switch} from 'react-router-dom';
//
import LoginComponent from '../../_web/views/pages/user/login';
import LogoutComponent from '../../_web/views/pages/user/logout';
import ProfileComponent from '../../_web/views/pages/user/profile';
import ResetPasswordComponent from '../../_web/views/pages/user/resetPassword';
import SignupAdminComponent from '../../_web/views/pages/user/signupAdmin';
import SignupUserComponent from '../../_web/views/pages/user/signupUser';
import PAGES from '../../shared/constants/pages';
import AdminContainer from '../../shared/containers/application/AdminContainer';
import DashboardContainer from '../../shared/containers/application/DashboardContainer';
import DetaineeContainer from '../../shared/containers/application/DetaineeContainer';
import HomeContainer from '../../shared/containers/application/HomeContainer';
import ScreenContainer from '../../shared/containers/application/ScreenContainer';
import SiteContainer from '../../shared/containers/application/SiteContainer';
import LoginContainer from '../../shared/containers/user/LoginContainer';
import LogoutContainer from '../../shared/containers/user/LogoutContainer';
import ProfileContainer from '../../shared/containers/user/ProfileContainer';
import ResetPasswordContainer from '../../shared/containers/user/ResetPasswordContainer';
import SignupAdminContainer from '../../shared/containers/user/SignupAdminContainer';
import SignupUserContainer from '../../shared/containers/user/SignupUserContainer';
import AdminComponent from '../views/pages/application/admin';
import DashboardComponent from '../views/pages/application/dashboard';
import DetaineeComponent from '../views/pages/application/detainee';
import HomeComponent from '../views/pages/application/home';
import ScreenComponent from '../views/pages/application/screen';
import SiteComponent from '../views/pages/application/site';


const Routes = () => (
  <Switch>
    {/* APPLICATION */}
    <Route
      exact
      path={PAGES.APPLICATION.HOME.route}
      render={props => (
        <HomeContainer {...props} Layout={HomeComponent}/>
      )}
    />
    <Route
      exact
      path={PAGES.APPLICATION.DASHBOARD.route}
      render={props => (
        <DashboardContainer {...props} Layout={DashboardComponent}/>
      )}
    />
    {/* ADMIN */}
    <Route
      exact
      path={PAGES.APPLICATION.SITE.route}
      render={props => (
        <SiteContainer {...props} Layout={SiteComponent}/>
      )}
    />
    <Route
      exact
      path={PAGES.APPLICATION.SCREEN.route}
      render={props => (
        <ScreenContainer {...props} Layout={ScreenComponent}/>
      )}
    />
    <Route
      exact
      path={PAGES.APPLICATION.DETAINEE.route}
      render={props => (
        <DetaineeContainer {...props} Layout={DetaineeComponent}/>
      )}
    />
    <Route
      exact
      path={PAGES.APPLICATION.ADMIN.route}
      render={props => (
        <AdminContainer {...props} Layout={AdminComponent}/>
      )}
    />
    <Route
      path={PAGES.USER.LOGIN.route}
      render={props => (
        <LoginContainer {...props} Layout={LoginComponent}/>
      )}
    />
    <Route
      path={PAGES.USER.LOGOUT.route}
      render={props => (
        <LogoutContainer {...props} Layout={LogoutComponent}/>
      )}
    />
    <Route
      path={PAGES.USER.SIGNUP_USER.route}
      render={props => (
        <SignupUserContainer {...props} Layout={SignupUserComponent}/>
      )}
    />
    <Route
      path={PAGES.USER.SIGNUP_ADMIN.route}
      render={props => (
        <SignupAdminContainer {...props} Layout={SignupAdminComponent}/>
      )}
    />
    <Route
      path={PAGES.USER.RESET_PASSWORD.route}
      render={props => (
        <ResetPasswordContainer {...props} Layout={ResetPasswordComponent}/>
      )}
    />
    <Route
      path={PAGES.USER.PROFILE.route}
      render={props => (
        <ProfileContainer {...props} Layout={ProfileComponent}/>
      )}
    />
  </Switch>
);

export default Routes;
