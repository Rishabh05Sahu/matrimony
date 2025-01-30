import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
  Pagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
} from '@mui/material';
import { Search, Heart, MessageCircle, Filter } from 'lucide-react';
import matches from "../DummyData/Matches.js"

const Matches = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    ageRange: '',
    location: '',
    religion: '',
  });

 

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#FFEEEC', minHeight: '100vh' }}>
      {/* Search and Filter Section */}
      <Card sx={{ mb: 3, p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search matches..."
              InputProps={{
                startAdornment: <Search size={20} style={{ marginRight: 8 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Age Range</InputLabel>
                <Select
                  name="ageRange"
                  value={filters.ageRange}
                  label="Age Range"
                  onChange={handleFilterChange}
                >
                  <MenuItem value="20-25">20-25 years</MenuItem>
                  <MenuItem value="26-30">26-30 years</MenuItem>
                  <MenuItem value="31-35">31-35 years</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Location</InputLabel>
                <Select
                  name="location"
                  value={filters.location}
                  label="Location"
                  onChange={handleFilterChange}
                >
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                  <MenuItem value="Chicago">Chicago</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Matches Grid */}
      <Grid container spacing={3}>
        {matches.map((match) => (
          <Grid item xs={12} sm={6} md={4} key={match.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={match.image}
                alt={match.name}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" component="div" >
                    {match.name}, {match.age}
                  </Typography>
                  <Chip 
                    label={match.compatibility}
                    color="primary"
                    size="small"
                    sx={{
                      backgroundColor:"#D12E25",
                      marginTop:"2vh",
                      borderColor: "#D12E25",
                      "&:hover": {
                        borderColor: "#D12E25",
                        backgroundColor: "#DA4840 ",
                      },
                    }}
                  />
                </Box>
                <Typography color="text.secondary" gutterBottom>
                  {match.location} • {match.religion}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {match.occupation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {match.education}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {match.about}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<Heart size={20} />}
                    color="primary"
                    sx={{
                     
                      color:"#D12E25",
                      marginTop:"2vh",
                      borderColor: "#D12E25",
                      "&:hover": {
                        borderColor: "#D12E25",
                       
                      },
                    }}
                  >
                    Like
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<MessageCircle size={20} />}
                    color="primary"
                    sx={{
                      backgroundColor:"#D12E25",
                      marginTop:"2vh",
                      borderColor: "#D12E25",
                      "&:hover": {
                        borderColor: "#D12E25",
                        backgroundColor: "#DA4840 ",
                      },
                    }}
                  >
                    Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4}}>
        <Pagination
          count={10}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
      
        />
      </Box>
    </Box>
  );
};

export default Matches;