import { observer } from "mobx-react-lite";
import BlogStore from "../../store/BlogStore"
import { useState } from "react";
const Login = () => {
  const [currState, setCurrState] = useState("Login")
  
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    BlogStore.login()
  }
  return (
    <>
      <div className="mt-[40px] w-[500px] mx-auto py-[20px]">
        <h2 className="text-[40px] font-[600] text-[#5995ad] mb-[20px] text-center">
          {currState === "Login" ? "Login Account" : "Sign Up"}
        </h2>
        <form className="" onSubmit={handleSubmitLogin}>
          {currState === "Sign Up" 
            ?
            <div className="flex flex-col gap-[5px] mb-[10px]">
              <label htmlFor="name" className="text-[20px] font-[500]">User Name</label>
              <input type="text" id="name" className="w-full py-[5px] px-[10px] border border-gray-600 outline-none" placeholder="Example: ABC" required/>
            </div>
            :
            <></>
          }
          <div className="flex flex-col gap-[5px] mb-[10px]">
            <label htmlFor="email" className="text-[20px] font-[500]">Email</label>
            <input type="email" id="email" className="w-full py-[5px] px-[10px] border border-gray-600 outline-none" placeholder="Example: levana@gmail.com" required/>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="password" className="text-[20px] font-[500]">Password</label>
            <input type="password" id="password" className="w-full py-[5px] px-[10px] border border-gray-600 outline-none" placeholder="Password" required/>
          </div>

          <button className="w-full py-[5px] px-[10px] bg-[#79B9D2] text-white mt-[20px] rounded-none border-none">Login</button>

          <div className="mt-[20px]">
            {
              currState === "Sign Up"
              ? 
                <div className="flex items-center gap-[5px]">
                  Already have an account? 
                  <span 
                    onClick={() => setCurrState("Login")}
                    className="cursor-pointer text-[#89cfeb]">
                    Login
                  </span>
                </div>
              :
                <div className="flex items-center gap-[5px]">
                  Dont have an account? 
                  <span 
                    onClick={() => setCurrState("Sign Up")}
                    className="cursor-pointer text-[#89cfeb]">
                    Sign Up
                  </span>
                </div>
            }
            
          </div>
        </form>
      </div>
    </>
  )
}

export default observer(Login)