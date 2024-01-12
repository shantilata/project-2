import React from 'react'
import{Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Component/Home/Home'
import About from '../Component/About/About'
import Service  from '../Component/Service/Service'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import Pnf from '../Layout/PNF/Pnf'
import Contact from '../Component/Contact/Contact'
import Allcat from '../Component/Product/Allcategory/Allcat'
import Subcat from '../Component/Product/Subcat/Subcat'
import Single from '../Component/Product/Singleproduct/Single'
import Myform from '../Component/Newform/Myform'
const RootRouting = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="contact-us/:name" element={<Contact/>}/>
        <Route path="allcategory" element={<Allcat/>}/>
        <Route path="form-page" element={<Myform/>}/>
        <Route path="allcategory/sub_cat/:pid" element={<Subcat/>}/>
        <Route path="allcategory/sub_cat/:pid/single/:subpid" element={<Single/>}/>


        <Route path="*" element={<Pnf/>}/>
        

        
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default RootRouting