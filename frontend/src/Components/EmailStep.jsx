import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const EmailStep = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    localStorage.setItem('profileEmail', email);
    navigate('/profile/photo');
  };

  const handleBack = () => {
    navigate('/profile/phone');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-center font-bold">
            What's your email?
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            error={!!error}
            helperText={error}
          />

          <div className="flex flex-col gap-2">
            <Button  sx={{
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
            
            <Button
              fullWidth
              variant="outlined"
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailStep;