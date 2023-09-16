import React from 'react';
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/Home Page/HomePage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Membershipcard from './components/Membership/membershipcard';
import Dropdown from './components/dropdown/Dropdown';
import Order_Summary from './components/Membership/Order_Summary';
import Blog from './components/Blogs/Blog';
import Blog_details from './components/Blogs/blog_detail';
import Register from './components/Register/Register';

import CheckboxButton from './components/text';
import Matches from './components/Matches/Matches';
import FamilyDetails from './components/FamilyDetails/FamilyDetails';
import Login from './components/Login/images/login';
import SuccessStories from './components/Home Page/SuccessStories';
import AboutUs from './components/About us page/AboutUs';
import EnquiryPage from './components/About us page/EnquiryPage';
import PP from './components/PartnerPreference/PP';
import PersonalDetails_container from './components/PersonalDetails/PersonalDetails';
import Education from './components/Education/Education';
// import Photo_Uploads from './components/Photo Uploads/Photo_Uploads';


const App = () => {
  return (
    <div>
      <Router>
      {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/LogIn" element={<Login/>}></Route>
          <Route path="/ss" element={<SuccessStories/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/ContactUs" element={<EnquiryPage/>}></Route>

          <Route path="/Dropdown" element={<Dropdown/>}></Route>
          <Route path="/matches" element={<Matches/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog_detail" element={<Blog_details/>}></Route>
          <Route path="/order_summary" element={<Order_Summary/>}></Route>
          <Route path="/membership" element={<Membershipcard/>}></Route>
          <Route path="/s " element={<CheckboxButton/>}></Route>
          <Route path="/FamilyDetail" element={<FamilyDetails/>}></Route>
          <Route path="/pp" element={<PP/>}></Route>
          <Route path="/personalDetail" element={<PersonalDetails_container/>}></Route>
          <Route path="/Education" element={<Education/>}></Route>
          {/* <Route path="/Photo_upload" element={<Photo_Uploads/>}></Route> */}
        </Routes>
      {/* <Footer/> */}
      </Router>
    </div>
  );
};

export default App;