import { Button } from "../Components.jsx/Button"
import { ButtonWarning } from "../Components.jsx/ButtonWarning"
import { Heading } from "../Components.jsx/Heading"
import { InputBox } from "../Components.jsx/InputBox"
import { SubHeading } from "../Components.jsx/SubHeading"
import { useNavigate } from "react-router-dom";

export const Signin = ()=>{
    const navigate=useNavigate();
return <div className="min-h-screen bg-gray-400 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
     <Heading label={"Sign-In"}></Heading>
     <SubHeading label={"Enter your credentials to login"} ></SubHeading>
     <div className="space-y-4 mt-6 text-left">
     <InputBox title={" Email "} placeholder={"xyz123@gmail.com"}></InputBox>
     <InputBox title={" Password "} placeholder={"Minimum 8 letters..."}></InputBox>
     </div>
     <div className="m-4">
     <Button label={"SignIn"} onClick={()=>{
        navigate("/dashboard")
     }}></Button>
     </div>
     <ButtonWarning label={"Dont have an Account? "} to={"/signup"} text={"Sign Up"}></ButtonWarning>
     </div>
</div>
}

//change