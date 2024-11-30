import { useEffect, useState } from "react";
import { Button } from "../Components.jsx/Button";
import { ButtonWarning } from "../Components.jsx/ButtonWarning";
import { Heading } from "../Components.jsx/Heading";
import { InputBox } from "../Components.jsx/InputBox";
import { SubHeading } from "../Components.jsx/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
    return (
        <div className="min-h-screen bg-gray-400 flex items-center justify-center px-4">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                
                <div className="text-center mb-6">
                    <Heading label="Sign-Up" />
                   
                    <SubHeading label="Enter your information to create an account" />
              
                </div>

                
                <form className="space-y-5">
                    <InputBox
                        onChange={(e) => setFirstName(e.target.value)}
                        title="First Name"
                        placeholder="Harry"
                        className="w-full"
                    />
                    <InputBox
                        onChange={(e) => setLastName(e.target.value)}
                        title="Last Name"
                        placeholder="Aron"
                        className="w-full"
                    />
                    <InputBox
                        onChange={(e) => setUserName(e.target.value)}
                        title="Email"
                        placeholder="xyz@gmail.com"
                        className="w-full"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        title="Password"
                        placeholder="Minimum 8 characters"
                        className="w-full"
                        type="password"
                    />
                </form>

               
                <div className="mt-6 flex justify-center">
                    <Button
                        onClick={async () => {
                            try {
                                const response = await axios.post(
                                    "http://localhost:3002/api/v1/user/signup",
                                    { firstName, lastName, username, password }
                                );
                                localStorage.setItem("token", response.data.token);
                                navigate("/dashboard");
                            } catch (error) {
                                console.error("Signup failed", error);
                            }
                        }}
                        label="Sign Up"
                        className="w-full py-2"
                    />
                </div>

                <div className="mt-4 text-center">
                    <ButtonWarning
                        label="Already have an account?"
                        to="/signin"
                        text="Sign In"
                        className="mt-2"
                    />
                </div>
            </div>
        </div>
    );
};
