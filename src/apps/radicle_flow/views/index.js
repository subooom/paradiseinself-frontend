
/**
 * Importing all the components that are needed.
 */

import ProjectsTrackerDetails from './ProjectTrackerDetails.vue';

import Verify from '../../../components/auth/Verify.vue';
// import LocalStorage from '../../../models/storage';

/**
 * Exporting a routes object composed of every route in this directory.
 */

export default [
  {
    path: '/',
    name: 'details',
    component: ProjectsTrackerDetails,
    // beforeEnter(to, from, next) {
    //   if (LocalStorage.get('user') && LocalStorage.get('user').isLoggedIn) {
    //     next();
    //   } else {
    //     next({
    //       name: 'verify', // back to safety route //
    //     });
    //   }
    // },
  },
  {
    path: '/verify',
    name: 'verify',
    component: Verify,
  },
];
