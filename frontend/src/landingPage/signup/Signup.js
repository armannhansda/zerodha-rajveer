import React, { useState } from "react";
import { TextField, Button, Box, Typography, Link, Paper } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5001/signup",
        { username, email, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
        alert("Signup successful");
        window.location.href = "/";
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (err) {
      alert("Error during signup: " + err.message);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 5,
        p: 4,
        borderRadius: 2,
        border: "1px solid #ddd",
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1 }}
        >
          Sign Up
        </Button>
      </form>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Link
          component={RouterLink}
          to="/login"
          underline="hover"
          color="primary"
        >
          Login here
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUp;