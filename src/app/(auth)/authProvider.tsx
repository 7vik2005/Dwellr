// TODO: Implement auth provider with AWS Amplify
// This is a simplified pass-through version since AWS auth is disabled for now
"use client";

import React from "react";

const Auth = ({ children }: { children: React.ReactNode }) => {
  // When AWS Amplify is configured, this component will wrap children
  // with the Authenticator component for sign-in/sign-up flows.
  // For now, all routes are accessible without authentication.
  return <>{children}</>;
};

export default Auth;
