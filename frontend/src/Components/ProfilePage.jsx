import React, { useState } from 'react';
import { Camera, Edit2, Save } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import profile from "../assets/men.jpg";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    dateOfBirth: '1995-06-15',
    gender: 'Male',
    location: 'New York',
    about: 'I am a software engineer who loves to travel and explore new places. Looking for someone who shares similar interests.',
    occupation: 'Software Engineer',
    education: "Master's in Computer Science",
    height: "5'10\"",
    religion: 'Hindu',
    motherTongue: 'Hindi',
    maritalStatus: 'Never Married'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div> 
      <Box sx={{ minHeight: '100vh', bgcolor: '#FCE7F4', p: 3 }}>
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Card elevation={3}>
            <CardHeader
              title={
                <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
                  My Profile
                </Typography>
              }
              action={
                !isEditing ? (
                  <Button 
                    sx={{
                      backgroundColor: "#D12E25",
                      marginTop: "2vh",
                      borderColor: "#D12E25",
                      "&:hover": {
                        borderColor: "#D12E25",
                        backgroundColor: "#DA4840",
                      },
                    }}
                    variant="contained" 
                    startIcon={<Edit2 />}
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Button 
                    variant="contained" 
                    color="success"
                    startIcon={<Save />}
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                )
              }
            />
            
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={profileImage}
                    alt="Profile"
                    sx={{
                      width: 160,
                      height: 160,
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  {isEditing && (
                    <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                      <label htmlFor="profile-picture">
                        <Button
                          component="span"
                          variant="contained"
                          sx={{ minWidth: 0, p: 1, borderRadius: '50%' }}
                        >
                          <Camera />
                        </Button>
                        <input
                          type="file"
                          id="profile-picture"
                          hidden
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                    </Box>
                  )}
                </Box>
              </Box>

              <Grid container spacing={3}>
                {/* Rest of the form fields remain the same */}
                <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={profileData.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    label="Gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Occupation"
                  name="occupation"
                  value={profileData.occupation}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Education"
                  name="education"
                  value={profileData.education}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Height"
                  name="height"
                  value={profileData.height}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Religion"
                  name="religion"
                  value={profileData.religion}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="About Me"
                  name="about"
                  value={profileData.about}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant="outlined"
                />
              </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default ProfilePage;