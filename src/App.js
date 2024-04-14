import logo from './logo.svg';
import './App.css';
import DetailForm from './component/DetailForm';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import {Routes,Route} from 'react-router-dom'
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Verifyemail from'./Pages/Verifyemail'
import TermsAndCondition from './Pages/TermsAndCondition';
import ForgotPassword from './Pages/ForgotPassword';
import Updatepassword from './Pages/Updatepassword';
import { useSelector } from 'react-redux';
function App() {
  const {dark} = useSelector((state) => state.darkMode);
  return (
    <div className={`h-screen w-screen overflow-x-hidden md:overflow-auto ${dark ? 'bg-slate-800 text-white' : 'bg-white'}`}>

       <NavBar></NavBar>   
   
     {/* <DetailForm></DetailForm> */}





    <Routes>
  <Route path='/signup' element={<Signup />} />
  <Route path='/login' element={<Login />} />
  <Route path='/entry' element={<DetailForm />} />
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/verifyemail' element={<Verifyemail />} />
  <Route path='/termsAndCondition' element={<TermsAndCondition />} />
  <Route path='/forgot-password' element={<ForgotPassword/>}></Route>

<Route path='/update-password/:id' element={<Updatepassword/>}></Route>

</Routes>
<Toaster />
    <Footer></Footer> 
    </div>

  );
}

export default App;
