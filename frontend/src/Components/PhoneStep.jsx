import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const PhoneStep = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = React.useState('');
  const [error, setError] = React.useState('');

  const handleNext = () => {
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    localStorage.setItem('profilePhone', phone);
    navigate('/profile/email');
  };

  const handleBack = () => {
    navigate('/profile/gender');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E2625A] p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-center font-bold">
            What's your phone number?
          </Typography>

          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value.replace(/\D/g, ''));
              setError('');
            }}
            error={!!error}
            helperText={error}
            inputProps={{ maxLength: 10 }}
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

export default PhoneStep;