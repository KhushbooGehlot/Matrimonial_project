import React from 'react'
import "./css/Stepper.css"

function Stepper() {
  return (
    <>

    <div className='stepper pt-2'>
    <div className="container h-100">
        <div className="row justify-content-between align-items-center h-100" >
          <div className='Personal_detail d-flex flex-column align-items-center'>
            <span className='Personal_detail_span mb-1 '>1</span>
            <span className='text-light mt-lg-2 mt-3'>Personal Details</span>
          </div>
          <div className='Educational d-flex flex-column align-items-center'>
          <span className='Educational_detail_span m-3 '></span>
            <span className='text-light mt-2 text-center'>Educational & Professional Details</span>
          </div>
          <div className='Family_Detail d-flex flex-column align-items-center'>
          <span className='Educational_detail_span m-3 '></span>
            <span className='text-light mt-1 text-center'>Family Details</span>
          </div>
          <div className='Address d-flex flex-column align-items-center'>
          <span className='Educational_detail_span m-3 '></span>
            <span className='text-light mt-1 text-center'>Address</span>
          </div>
          <div className='Photo_upload d-flex flex-column align-items-center'>
          <span className='Educational_detail_span m-3 '></span>
            <span className='text-light mt-1 text-center'>Photo Upload</span>
          </div>
          <div className='Kyc d-flex flex-column align-items-center'>
          <span className='Educational_detail_span m-3 '></span>
            <span className='text-light mt-1 text-center'>KYC</span>
          </div>
          <div className='PartnerPerference d-flex flex-column align-items-center'>
          <span className='Educational_detail_span m-3 '></span>
            <span className='text-light mt-1 text-center'>Partner Preference</span>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Stepper