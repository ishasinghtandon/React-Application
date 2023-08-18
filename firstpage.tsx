import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FirstPage: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Check if required fields are filled
    if (name && phoneNumber && email) {
      // Save user details to local storage
      localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
      
      // Route user to the second page
      history.push('/second');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Continue
      </Button>
    </div>
  );
};

export default FirstPage;
