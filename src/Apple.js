// As only return statement is to be done, we can directly write it without return keyword and curly braces or parathesis.
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
import { Popover } from '@mui/material'; 
import { blue } from "@mui/material/colors";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Apple = () => {
    const [name, setName] = useState("Jeel Maheshwari");
    const [email, setEmail] = useState("jeelmaheshwari@gmail.com");
    const [open, setOpen ] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();
    // we can provide predefined input values to input tag by placing values in curly braces.

    const onHomePageButtonClick = () => {
        console.log("Button clicked!");
        console.log("Name: ", name);
        console.log("Email: ", email);
        Navigate("/");
    };

    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <div
            style={{
                padding: 5,
            }}
        >
            <div style={{
                display:"flex",
                justifyContent:"flex-end",
                columnGap: 5,
                pointer: "cursor",
            }}
            >
                <div 
                    onClick={handleClick} 
                    style={{
                        display:"flex",
                        justifyContent:"flex-end",
                        alignItems:"center",
                        columnGap: 5,
                    }}
                >
                    <Avatar sx={{ bgcolor: "blue" }}>JM</Avatar>
                </div>
            </div>
            <div
                style={{
                    padding: 5,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 8,
                }}>
                
                <TextField
                    variant="outlined"
                    type="text" value={name}
                    label="Name" placeholder="Name" 
                    onChange={(e) => setName(e.target.value)} />
                <TextField
                    variant="outlined"
                    type="email" value={email}
                    label="Email" placeholder="email" 
                    onChange={(e) => setName(e.target.value)} />

                <Button variant="contained" onClick={onHomePageButtonClick}>
                    Submit
                </Button>
            </div>

            <Popover 
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <div style={{
                    padding:5,
                }}>
                    <h5>Jeel Maheshwari</h5>
                    <LogoutOutlinedIcon onClick={onHomePageButtonClick}/>
                    {/* <Button variant="contained" onClick={onHomePageButtonClick}>
                    </Button> */}
                </div>
            </Popover>
        </div>
    );
};