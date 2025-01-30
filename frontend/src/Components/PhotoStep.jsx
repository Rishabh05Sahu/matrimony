import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import  upload  from '../assets/upload_area.svg';

const PhotoStep = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('profilePhoto', preview);
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/profile/email');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-center font-bold">
            Add a profile picture
          </Typography>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={preview || `${upload}`}
                alt="Profile Preview"
                className="w-32 h-32 rounded-full border-2 border-orange-300 object-cover"
              />
              <label htmlFor="photo-upload">
                <Button  sx={{
                backgroundColor:"#D12E25",
                borderColor: "#D12E25",
                "&:hover": {
                  borderColor: "#D12E25",
                  backgroundColor: "#DA4840 ",
                },
              }}
                  variant="contained"
                  component="span"
                  className="absolute bottom-0 right-0"
                  size="small"
                >
                  <PhotoCamera />
                </Button>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>
          </div>

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
              onClick={handleSubmit}
            >
              Complete Profile
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
export default PhotoStep;