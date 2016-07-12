/** Define the home route */
FlowRouter.route('/', {
  name: 'home',
  action () {
    BlazeLayout.render('fullLayout', { main: 'heroUnit' });
  }
});

/** Define the signup route */
FlowRouter.route('/signup', {
  name: 'signup',
  action () {
    BlazeLayout.render('fullLayout', { main: 'signup' });
  }
});

/** Define the login route */
FlowRouter.route('/login', {
  name: 'login',
  action () {
    BlazeLayout.render('fullLayout', { main: 'login' });
  }
});
