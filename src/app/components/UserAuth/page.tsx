import React from 'react';
import { getAuth } from 'firebase/auth';

const MyComponent = () => {
  const checkCurrentUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      console.log('Current user:', user);
    } else {
      console.log('No user is currently signed in');
    }
  };

  return (
    <div>
      <button onClick={checkCurrentUser}>Check Current User</button>
      {/* Other component code */}
    </div>
  );
};

export default MyComponent;
