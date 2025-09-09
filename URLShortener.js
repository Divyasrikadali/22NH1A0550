import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Alert } from '@mui/material';

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = () => {
    if (!url) {
      setError("Please enter a URL!");
      return;
    }
    setError("");
    const random = Math.random().toString(36).substring(7);
    setShortUrl('http://short.ly/${random}');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        URL Shortener Page
      </Typography>

      {}
      <TextField
        label="Enter URL"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {}
      <Button variant="contained" onClick={handleShorten}>
        Shorten URL
      </Button>

      {}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

      {}
      {shortUrl && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Shortened URL: <a href={url} target="_blank" rel="noreferrer">{shortUrl}</a>
        </Alert>
      )}
    </Box>
  );
}

export default UrlShortener;