import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Typography, Button, Paper, CircularProgress, Alert } from "@mui/material";


function Dashboard() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            window.location.href = "/";
        }
    }, [token]);

    const getData = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get("http://localhost:5000/protected", {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            setData(res.data);
        } catch (err) {
            setError(err.response?.data?.error || "Failed to fetch protected data.");
            if (err.response?.status === 401 || err.response?.status === 403) {
                // Token might be invalid or expired
                setTimeout(() => logout(), 2000);
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        sessionStorage.removeItem("token");
        window.location.href = "/";
    };

    if (!token) return null;

    return (
        <Box 
            sx={{
                minHeight: '100vh',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="md">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
                    <Typography variant="h3" fontWeight="bold" color="white" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
                        Dashboard
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="error" 
                        onClick={logout}
                        sx={{ borderRadius: 8, px: 3, fontWeight: 'bold' }}
                    >
                        Logout
                    </Button>
                </Box>

                <Paper
                    elevation={24}
                    sx={{
                        p: 4,
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >
                    <Box textAlign="center" mb={4}>
                        <Typography variant="h6" color="white" gutterBottom sx={{ opacity: 0.9 }}>
                            Welcome to your secure session. You are successfully authenticated.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={getData}
                            disabled={loading}
                            sx={{
                                mt: 3,
                                px: 4,
                                py: 1.5,
                                borderRadius: 8,
                                background: 'linear-gradient(45deg, #FF512F 0%, #F09819 100%)',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                boxShadow: '0 4px 15px rgba(240, 152, 25, 0.4)'
                            }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Fetch Protected Data"}
                        </Button>
                    </Box>

                    {error && (
                        <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                            {error}
                        </Alert>
                    )}

                    {data && (
                        <Box mt={3} p={3} sx={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 2 }}>
                            <Typography variant="overline" color="gray" sx={{ display: 'block', mb: 1 }}>
                                Server Response:
                            </Typography>
                            <Typography component="pre" variant="body1" color="lightgreen" sx={{ fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap' }}>
                                {typeof data === 'object' ? JSON.stringify(data, null, 2) : data}
                            </Typography>
                        </Box>
                    )}
                </Paper>
            </Container>
        </Box>
    );
}

export default Dashboard;