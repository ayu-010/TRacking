const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  CREATE_ENTRY_API:BASE_URL+"/createEntry",
  DELETE_ENTRY_API:BASE_URL+"/deleteEntry",
  SIGNUP_API:BASE_URL+"/signup",
  LOGIN_API:BASE_URL+"/login",
  SENDOTP_API:BASE_URL+"/sendotp",
  RESETPASSTOKEN_API: BASE_URL + "/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/reset-password",
}
// REACT_APP_BASE_URL="http://localhost:4009/api/v1"




