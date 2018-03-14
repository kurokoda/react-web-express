const PAGES = {
  APPLICATION: {
    HOME     : {
      key  : 'HOME',
      label: 'home',
      route: '/',
    },
    DASHBOARD: {
      key  : 'DASHBOARD',
      label: 'dashboard',
      route: '/dashboard',
    },
    SITE     : {
      key  : 'SITE',
      label: 'site',
      route: '/site',
    },
    SCREEN   : {
      key  : 'SCREEN',
      label: 'screen',
      route: '/screen',
    },
    ADMIN    : {
      key  : 'ADMIN',
      label: 'admin',
      route: '/admin',
    },
    DETAINEE : {
      key  : 'DETAINEE',
      label: 'detainee',
      route: '/detainee',
    },
  },
  USER       : {
    LOGIN         : {
      key  : 'LOGIN',
      label: 'login',
      route: '/login',
    },
    LOGOUT        : {
      key  : 'LOGOUT',
      label: 'logout',
      route: '/login',
    },
    RESET_PASSWORD: {
      key  : 'RESET_PASSWORD',
      label: 'reset password',
      route: '/reset-password',
    },
    SIGNUP_USER   : {
      key  : 'SIGNUP_USER',
      label: 'Register',
      route: '/signupUser/user',
    },
    SIGNUP_ADMIN  : {
      key  : 'SIGNUP_ADMIN',
      label: 'Administrator Registration',
      route: '/signupUser/admin',
    },
    PROFILE       : {
      key  : 'PROFILE',
      label: 'profile',
      route: '/profile',
    },
  },
};

export default PAGES;
