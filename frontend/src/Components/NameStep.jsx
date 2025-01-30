import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const NameStep = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');

  const handleNext = () => {
    if (name.length < 3) {
      setError('Name must be at least 3 characters long');
      return;
    }
    localStorage.setItem('profileName', name);
    navigate('/profile/dob');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-center font-bold">
            What's your name?
          </Typography>
          
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            error={!!error}
            helperText={error}
            autoFocus
          />

          <Button
          sx={{
            backgroundColor:"#D12E25",
            marginTop:"2vh",
            borderColor: "#D12E25",
            "&:hover": {
              borderColor: "#D12E25",
              backgroundColor: "#DA4840 ",
            },
          }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleNext}
            
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};


export default NameStep;