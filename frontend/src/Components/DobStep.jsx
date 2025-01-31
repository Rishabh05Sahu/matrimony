import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import logo from "../assets/logo.png"

const DobStep = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!dob) {
      setError('Please select your date of birth');
      return;
    }
    localStorage.setItem('profileDob', dob);
    navigate('/profile/gender');
  };

  const handleBack = () => {
    navigate('/profile/name');
  };

  return (
    <div className="min-h-screen flex flex-col gap-y-16 items-center justify-center bg-pink-100 p-4">
      <img src={logo} alt="" className="w-[100px]" />
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-center font-bold pb-8">
            When's your birthday?
          </Typography>

          <TextField
            fullWidth
            type="date"
            variant="outlined"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              setError('');
            }}
            error={!!error}
            helperText={error}
            InputLabelProps={{ shrink: true }}
          />

          <div className="flex flex-col gap-2">
            <Button sx={{
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

export default DobStep;