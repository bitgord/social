/** Define the home route */
FlowRouter.route('/', {
  name: 'home',
  action () {
    BlazeLayout.render('fullLayout', { main: 'heroUnit' });
  }
});

/**
 * Check if a user is logged in to restrict access to signup and login
 */
let loggedInCheck = [
  () => { if (Meteor.userId()) { FlowRouter.go('dashboard'); } }
];

/** Define the signup route */
FlowRouter.route('/signup', {
  name: 'signup',
  action () {
    BlazeLayout.render('fullLayout', { main: 'signup' });
  },
  triggersEnter: loggedInCheck
});

/** Define the login route */
FlowRouter.route('/login', {
  name: 'login',
  action () {
    BlazeLayout.render('fullLayout', { main: 'login' });
  },
  triggersEnter: loggedInCheck
});

/**
 * Define the userRoutes group, in order to restrict access for users who 
 * are not logged in
 */
let userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'userRoutes',
  triggersEnter: [
    () => { if (!Meteor.userId()) { FlowRouter.go('home'); } }
  ]
});

/** Define the dashboard route */
userRoutes.route('/dashboard', {
  name: 'dashboard',
  action () {
    BlazeLayout.render('mainLayout', {
      navigation: 'userNav',
      content: 'dashboard'
    });
  }  
});
