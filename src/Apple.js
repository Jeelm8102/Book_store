// As only return statement is to be done, we can directly write it without return keyword and curly braces or parathesis.
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material'; 
import { blue } from "@mui/material/colors";

export const Apple = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();
    // we can provide predefined input values to input tag by placing values in curly braces.

    const onHomePageButtonClick = () => {
        console.log("Button clicked!");
        console.log("Name: ", name);
        console.log("Email: ", email);
        Navigate("/");
        // alert("The button has been clicked!");
    };

    return (
        <div
            style={{
                padding: 5,
            }}
        >
            <div style={{
                display: "flex",
                justifycontent: "flex-end",
                alignitems: "center",
                columngap: "5px",
            }}>
                <Avatar sx={{ bgcolor: "blue" }}>JM</Avatar>
                <span>Jeel Maheshwari</span>
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
                {/* <button onClick={onHomePageButtonClick}>Navigate to Home page</button> */}
            </div>
        </div>
    );
};