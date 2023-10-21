import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB-PahiJmw8bigqB6hpQ8STEnsOXP5JmqU",
  authDomain: "food-order-app-c4239.firebaseapp.com",
  databaseURL: "https://food-order-app-c4239-default-rtdb.firebaseio.com",
  projectId: "food-order-app-c4239",
  storageBucket: "food-order-app-c4239.appspot.com",
  messagingSenderId: "969369431437",
  appId: "1:969369431437:web:e44b8925efdcab43e1a1c4",
};
const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
console.log(app)
const firestore=getFirestore(app);
const storage=getStorage(app);
export {app,firestore,storage};