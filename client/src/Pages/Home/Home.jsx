import "../../Styling/Home.css";
import React, { useState } from 'react';
import SignInForm from '../Login/SignInForm';
import Rolecheck from "../Login/Rolecheck";

const Home = () => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);

  return (

    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={()=>{ setShowSignInPopup(true); setShowSignUpPopup(false)}}>Sign In</button>
      <button onClick={()=>{ setShowSignUpPopup(true); setShowSignInPopup(false)}}>Sign Up</button>

      {showSignInPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowSignInPopup(false)}>
              &times;
            </span>
            <SignInForm />
          </div>
        </div>
      )}

      {showSignUpPopup && (
            <div className="popup">
                <div className="popup-content">
                    <span className="close" onClick={() => setShowSignUpPopup(false)}>
                    &times;
                    </span>
                    <Rolecheck />
                </div>
            </div>
        )}

      

        <img src="https://cdn.pixabay.com/photo/2023/06/11/13/14/boathouse-8055954_1280.jpg" alt="" />

    </div>
  );
};

export default Home;
