"use client"

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page ()  {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

 console.log(user);
  return (
    <div>
      <h1>week-10</h1>
      <p>{user? "Hi there!" : "please sign in "}</p>
      <p> {user?.email}</p>
      {user && user.displayName}
      <p>
      {user ? (
        <div>
          <button onClick={firebaseSignOut}>Log out</button>
          <a href="week-8/shopping-List">Go to Shopping List</a>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
        </p>
    </div>
  
  );
}