import axios from "axios";
import { Button } from "../Components.jsx/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const navigate=useNavigate();
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            
            <div className="w-[22rem] bg-gray-800 text-white rounded-3xl shadow-lg p-6">
               
                <div className="flex justify-between items-center mb-6">
                    <button onClick={()=>{
                        navigate('/dashboard')
                    }} className="text-green-400 font-bold">Back</button>
                </div>

                
                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gray-700 text-5xl ">{name[0]}</div>
                    <h2 className="mt-2 font-medium text-lg">{name || "Recipient"}</h2>
                    <p className="mt-1 text-2xl font-semibold">₹{amount || "0"}</p>
                    <p className="text-sm text-gray-400">INR</p>
                </div>

               
                <div className="grid grid-cols-3 gap-4 text-gray-200 text-lg font-semibold mb-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "<"].map((key, idx) => (
                        <button
                            key={idx}
                            className="py-3 rounded-lg bg-gray-700 hover:bg-gray-600"
                            onClick={() => {
                                if (key === "<") {
                                    setAmount(amount.slice(0, -1)); 
                                } else {
                                    setAmount((prev) => prev + key.toString());
                                }
                            }}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                
                <div className="flex justify-between">
                    <Button
                        label="Request"
                        onClick={() => console.log("Requesting Money")}
                        className="bg-gray-700 text-gray-300 hover:bg-gray-600 w-[48%]"
                    />
                    <Button
                        label="Pay"
                        onClick={async () => {
                            try {
                                await axios.post(
                                    "http://localhost:3002/api/v1/account/transfer",
                                    { to: id, amount },
                                    {
                                        headers: {
                                            Authorization: "Bearer " + localStorage.getItem("token"),
                                        },
                                    }
                                );
                                console.log(`Sent ₹${amount} to ${name}`);
                                navigate("/transfered");
                            } catch (error) {
                                console.error("Error sending money", error);
                            }
                        }}
                        className="bg-blue-500 text-white hover:bg-blue-600 w-[48%]"
                    />
                </div>
            </div>
        </div>
    );
};
