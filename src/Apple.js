// As only return statement is to be done, we can directly write it without return keyword and curly braces or parathesis.
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
import { Popover } from '@mui/material'; 
import { blue } from "@mui/material/colors";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Formik } from "formik";
import * as Yup from "yup";

export const Apple = () => {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    const [open, setOpen ] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();
    // we can provide predefined input values to input tag by placing values in curly braces.

    useEffect(() => {
        // console.log("The new value of Name: ", name);

        // return () => {
        //     console.log("The old value of Name: ", name);
        // }
    }, []);

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Please verify that you have entered atleast 3 charaters."),
        email: Yup.string().email("Please enter a valid email address."),
    });

    const initialValues = {
        name: "",
        email: ""
    }
    
    const onFormSubmit = (values) => {
        console.log("On the form submitted", values);
        alert("Form Submitted.");
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
                }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onFormSubmit}
                >
                    {({value, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: 5,
                            }}>
                                <TextField
                                    variant="outlined"
                                    type="text" 
                                    label="Name"
                                    id="name" 
                                    name="name"
                                    placeholder="Name" 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.name && <span style={{
                                        padding: 5,
                                        color: "red",
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    {errors.name}
                                </span>}
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: 5,
                            }}>
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    label="Email"
                                    id="email"
                                    name="email"
                                    placeholder="email" 
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />    
                                {console.log("Email validation :",errors)}
                                {touched.email && errors.email && <span style={{
                                        padding: 5,
                                        color: "red",
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    {errors.email}
                                </span>}
                            </div>    
                            <Button variant="contained" type="submit" className="">
                                Submit
                            </Button>
                        </form>
                    )}
                </Formik>
            </div>

            {/* <Popover 
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
                    <LogoutOutlinedIcon onClick={onFormSubmit}/>
                    <Button variant="contained" onClick={onFormSubmit}>
                    </Button>
                </div>
            </Popover> */}
        </div>
    );
};