

import { toast } from "react-hot-toast"
import { setLoading } from "../../slices/authSlice";
import {apiConnector} from '../apiconnector';
import { endpoints } from "../api";
const {
   CREATE_ENTRY_API,
   DELETE_ENTRY_API,
  SIGNUP_API,
    LOGIN_API,
    SENDOTP_API,
    RESETPASSTOKEN_API,RESETPASSWORD_API
  } = endpoints

  export  function sendOtp(email, navigate) {
    return async (dispatch) =>
    {
      const toastid=toast.loading("Loading....");
      dispatch(setLoading(true))
    

    try {
      console.log("otp ke ander",email);
      console.log("sendotp api is ",SENDOTP_API);
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)


      console.log("otp sucess meassage  is get printed ",response.data)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully");
      navigate("/verifyemail");
    } 
    
    catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    } 
    dispatch(setLoading(false));
    toast.dismiss(toastid)
  }
  }
   

  export function userSignup({
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    otp,
    navigate,
  }) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(true));
  
      try {
        console.log(
          "Data received in the userSignup function:",
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
          otp
        );
  
        const response = await apiConnector("POST", SIGNUP_API, {
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
          otp,
        });
  
        console.log("SIGNUP API RESPONSE:", response);
        console.log("Response data:", response.data);
  
        console.log("response.data is", response.data);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        toast.success("Signup successful");
  
        navigate('/login');
      } catch (error) {
        console.log("SIGNUP API ERROR:", error);
        toast.error("Sign up API failed");
        navigate("/signup")
        navigate("/signup")
      }
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    };
  }
  


  export async function createEntry(name, price, description, datetime) {
    try {
        console.log("VALUES BEING SENT AFTER SUBMITTING IN try BLOCK OF BACKEND", name, price, description, datetime);
        console.log("createEntry API:", CREATE_ENTRY_API);
        
        const response = await apiConnector("POST", CREATE_ENTRY_API, {
            name,
            price,
            description,
            datetime
        });

        console.log("createEntry API RESPONSE:", response);
        
        console.log("response.data is", response.data);
        
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        
        return response; // Return the response if successful
    } catch (error) {
        console.log("CreateEntry API ERROR:", error);
        toast.error("create entry failed");
        throw error; // Rethrow the error for external handling if needed
    }
}

export async function deleteEntry(id) {
  try {
    console.log("yeha id pauch gyi connector ke paas jaane se pehle");
    console.log("delete entry api is",DELETE_ENTRY_API);
    console.log("delete entry api is",`${DELETE_ENTRY_API}/${id}`);

      const response = await apiConnector("DELETE", `${DELETE_ENTRY_API}/${id}`);
      console.log("Delete API RESPONSE:", response);
      console.log("Response data:", response.data);

      console.log("response.data is", response.data);
      
      if (!response.data.success) {
          throw new Error(response.data.message);
      }
      
      return response; // Return the response if successful
  } catch (error) {
      console.log("Delete entry API ERROR:", error);
      toast.error("Delete entry failed");
      throw error; // Rethrow the error for external handling if needed
  }
}




  export async function userLogin(data) {
    try {
  
          console.log("login data begore going to backend ",data);
        const response = await apiConnector("POST", LOGIN_API,data)
        console.log("LOGIN API RESPONSE:", response);
        console.log("Response data:", response.data);
;
        console.log(response.data.success);
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        
        return response; // Return the response if successful
    } catch (error) {
        console.log("LOGIN API ERROR:", error);
        toast.error("LOGIN  failed");
        throw error; // Rethrow the error for external handling if needed
    }
  }


  export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      })

      console.log("RESETPASSTOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    console.log("token extracted from location is ",token);
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.sucess) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      navigate("/login")
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

// export function logout(navigate) {
//   return (dispatch) => {
//     dispatch(setToken(null))
//     dispatch(setUser(null))
//     // dispatch(resetCart())
//     localStorage.removeItem("token")
//     localStorage.removeItem("user")
//     toast.success("Logged Out")
//     navigate("/")
//   }
// }