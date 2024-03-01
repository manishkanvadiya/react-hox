import React from 'react';

const User = () => {
  const user = {
    name: 'person1',
    email: 'person1@example.com',
  };
  return (
    <>
      <h3>Name : {user.name}</h3>
      <h3>Email : {user.email}</h3>
    </>
  );
};

export default User;
