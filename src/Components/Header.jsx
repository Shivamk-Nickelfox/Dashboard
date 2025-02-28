import React from "react";
import { AppBar, Toolbar, IconButton, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: 5, backgroundColor: 'white', boxShadow: 3, width: 'calc(100% - 165px)', display: 'flex', alignItems: 'center'}}>
           
                {/* Search Box in Center */}
                <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <TextField
                        variant="outlined"
                        placeholder="GlobalSearch"
                        size="small"
                        sx={{
                            width: "500px",
                            borderRadius: "6px",
                            backgroundColor: "#F0EEFF",
                            "& .MuiOutlinedInput-root": {
                                minHeight: "40px",
                                "& fieldset": { borderColor: "transparent" },
                                "&:hover fieldset": { borderColor: "transparent" },
                                "&.Mui-focused fieldset": { borderColor: "transparent" },
                            },
                            input: { color: "#000", fontWeight: "bold" },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "black" }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Right Side - Icons (Moved to Corner) */}
                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto", gap: 2 }}>
                    
                    {/* Notification Container */}
                    <Box sx={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        backgroundColor: "#F0EEFF", borderRadius: "6px",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)", zIndex: 10
                    }}>
                        <IconButton color="inherit" sx={{ p: 0 }}>
                            <NotificationsIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>

                    {/* Account Icon */}
                    <IconButton color="inherit">
                        <AccountCircle sx={{ color: "black" }} />
                    </IconButton>
                </Box>

            
        </AppBar>
    );
};

export default Header;
