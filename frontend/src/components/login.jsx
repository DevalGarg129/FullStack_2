import React, { useState } from "react";
import axios from "axios";
import { Container, Box, Typography, TextField, Button, Paper, Alert } from "@mui/material";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/login", {
                username,
                password
            });

            if (res.data && res.data.token) {
                sessionStorage.setItem("token", res.data.token);
                window.location.href = "/dashboard";
            } else {
                setError("Invalid response from server.");
            }
        } catch (err) {
            setError(err.response?.data?.error || "Login failed. Please check credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box 
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2
            }}
        >
            <Container maxWidth="xs">
                <Paper 
                    elevation={24} 
                    sx={{
                        p: 5,
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >
                    <Box component="form" onSubmit={login} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Typography variant="h4" fontWeight={700} align="center" color="white" gutterBottom>
                            Welcome Back
                        </Typography>
                        
                        {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}

                        <TextField
                            label="Username"
                            variant="filled"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                borderRadius: 1,
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'transparent'
                                }
                            }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="filled"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                borderRadius: 1,
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'transparent'
                                }
                            }}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            size="large"
                            disabled={loading}
                            sx={{ 
                                mt: 2, 
                                py: 1.5,
                                borderRadius: 8,
                                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                boxShadow: '0 4px 15px rgba(0, 114, 255, 0.4)'
                            }}
                        >
                            {loading ? "Authenticating..." : "Login"}
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default Login;