import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, Paper } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/login', { email, password }, { withCredentials: true });
      if (res.data.success) {
        localStorage.setItem('token', res.data.token); // if you return token in response
        alert('Login successful');
        window.location.href = '/';
      } else {
        alert(res.data.message || 'Login failed');
      }
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        my: 5,
        p: 4,
        borderRadius: 2,
        border: '1px solid #ddd',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1 }}
        >
          Login
        </Button>
      </form>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don&apos;t have an account?{' '}
        <Link component={RouterLink} to="/signup" underline="hover" color="primary">
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
}

export default Login;