
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';




const auth = getAuth(app);


function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        // console.log('user')

      })
      .catch('error', error => {

      })

  }

  const handleSingOut = () => {
    signOut(auth,)
      .then(() => {
        setUser({});

      })
      .catch(error => {
        setUser({});
      })

  }

  return (
    <div className="App">

      {
        user.uid ? <button className='sing-out' onClick={handleSingOut}>Sing Out</button> :
          <>
            <button className='sing-in' onClick={handleGoogleSingIn}>Google Sing In</button>
            <button className='sing-in' onClick={handleGithubSingIn}>GitHub sing In</button>

          </>

      }

      <h2>YOUR NAME: {user.displayName}</h2>
      <p>YOUE EMAIL: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );

}


export default App;
