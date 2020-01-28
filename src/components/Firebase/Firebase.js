import * as firebase  from 'firebase';
import  config from './config'

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
