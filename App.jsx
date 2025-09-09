import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UrlShortener from './Components/URLShortener';
import Statistics from './Components/Statistics';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <Router>
      {}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/stats">Statistics</Button>
        </Toolbar>
      </AppBar>

      {}
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/stats" element={<Statistics />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;