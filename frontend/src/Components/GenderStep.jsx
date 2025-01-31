import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import logo from "../assets/logo.png"

const GenderStep = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!gender) {
      setError('Please select your gender');
      return;
    }
    localStorage.setItem('profileGender', gender);
    navigate('/profile/phone');
  };

  const handleBack = () => {
    navigate('/profile/dob');
  };

  return (
    <div className="min-h-screen flex flex-col gap-y-16 items-center justify-center bg-pink-100 p-4">
      <img src={logo} alt="" className="w-[100px]" />
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-center font-bold">
            What's your gender?
          </Typography>

          <div className="flex mt-4 flex-col gap-2">
            {['Male', 'Female', 'Other'].map((option) => (
              <Button 
                key={option}
                fullWidth
                variant={gender === option ? 'contained' : 'outlined'}
                onClick={() => {
                  setGender(option);
                  setError('');
                }}
                className="py-3"
              >
                {option}
              </Button>
            ))}
          </div>

          {error && (
            <Typography color="error" className="text-center">
              {error}
            </Typography>
          )}

          <div className="flex flex-col gap-2">
            <Button sx={{
                backgroundColor:"#D12E25",
                
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

export default GenderStep;