import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp,userSignup } from "../services/operation/formapi";
import { useNavigate } from "react-router-dom";

function Verifyemail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
   
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
   
    const {
     
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    } = signupData;
console.log("we are insinde the verify email page to fetch out the detail;s from form data",signupData);

    dispatch(
      userSignup({

          firstname,
          lastname,
          email,
          password,
          confirmPassword,
          otp,
          navigate
          
        })
  
    );
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center ">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8  ">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-black">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-yellow-400 rounded-[0.5rem] text-black aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-300 "
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="w-full bg-blue-400 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-black"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="text-black font-bold flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center font-semibold text-blue-800 gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email,navigate))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Verifyemail;
