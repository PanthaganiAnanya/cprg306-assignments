"use client"

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page ()  {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

 console.log(user);
  return (
    <div>
      <h1>week-8</h1>
      <p>{user? "Hi there!" : "sign in "}</p>
      <p> {user?.email}</p>
      {user && user.displayName}
      <p>
      {user ? (
        <div>
          <button onClick={firebaseSignOut}>sign out</button>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
      
        </p>
    </div>
  
  );
}