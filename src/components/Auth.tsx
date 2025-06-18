import { useState, type ChangeEvent } from "react";
import { SignUpInput } from "@satyaprakash01/medium-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate=useNavigate();
    const [postInput,setPostInput]=useState<SignUpInput>({
    email:"",
    name:"",
    password:""
  })

  async function sendRequest(){
       try {
        const response=await  axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,postInput)
        const jwt=response.data.jwt;   
        localStorage.setItem("token",jwt);
        navigate("/blogs")
    } catch (error) {
         console.log(error);

       }
  }
    return (
        
    <>
      
      <div className="h-screen  px-4 sm:px-6 flex flex-col justify-center items-center ">
       
        <div className="w-full max-w-md ">
          <div className="mb-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold">Create an account</div>
              <div className="text-xl font-semibold text-slate-500 pt-2">
                {type=="signin"?"Don't have an account?":"Already have an account?"}
                <Link to={type=="signin"?"/signup":"/signin"} className="underline">
                  {" "}
                  {type=="signin"?"Sign up":"Sign in"}
                </Link>
              </div>
            </div>
          </div>

          <div>
            
            {type=="signin"?"":(<LabeledInput label="Username" placeholder="Enter your Username" inputtype="text" 
            onChange={(e)=>{
                setPostInput({
                    ...postInput,
                    name:e.target.value
                })
            }}/>)}
            <LabeledInput label="Email" placeholder="satyaprakash@gmail.com" inputtype="email" 
            onChange={(e)=>{
                setPostInput({
                    ...postInput,
                    email:e.target.value
                })
            }}/>
            <LabeledInput label="Password" placeholder="**************" inputtype="password" 
            onChange={(e)=>{
                setPostInput({
                    ...postInput,
                    password:e.target.value
                })
            }}/>
          </div>

          <div>
            <button onClick={sendRequest}  type="button" className="bg-zinc-800 cursor-pointer w-full h-12 rounded-md mt-6 text-white text-2xl">
              {type=="signup"?"Sign up":"Sign in"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface LabeledInputType {
  label: string;
  placeholder: string;
  inputtype:string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?:string
}

function LabeledInput({ label, placeholder, onChange,type }: LabeledInputType) {
  return (
    <div className="pt-4">
      <div className="text-xl font-semibold">{label}</div>
      <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
  )
}