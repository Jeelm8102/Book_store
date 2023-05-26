// As only return statement is to be done, we can directly write it without return keyword and curly braces or parathesis.
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import { useState } from "react";

export const Apple = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");   
    const Navigate = useNavigate();

    const onHomePageButtonClick = () =>{
        console.log("Button clicked!");
        console.log("Name: ", name);
        console.log("Email: ", email);
        Navigate("/");
        // alert("The button has been clicked!");
    };

    return (
        <div>
            <div>Apple Page </div>

            <input 
                type="text" 
                placeholder="Name" 
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <input type="email" placeholder="email" />
            <Button variant="contained" onClick={onHomePageButtonClick}>Navigate to Home page</Button>
            {/* <button onClick={onHomePageButtonClick}>Navigate to Home page</button> */}
        </div>
    );
};