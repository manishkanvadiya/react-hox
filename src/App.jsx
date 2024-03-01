import { useState } from 'react';
import './App.css';
import User from './User';
import withLoader from './withLoader';

// passing the user inside hoc
const UserWithLoader = withLoader(User);
function App() {
  return (
    <>
      <UserWithLoader />
    </>
  );
}

export default App;
