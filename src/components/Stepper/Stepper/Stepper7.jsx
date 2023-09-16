import React from 'react'
import "./css/Stepper7.css"

function Stepper7() {
  return (
    <>
    <div className=' stepper7 pt-2'>
    <div className="container h-100">
        <div className="row justify-content-between align-items-center h-100" >
          <div className='Personal_detail d-flex flex-column align-items-center'>
            <span className='Personal_detail_span1 mb-1 '><i class="fa-solid fa-check" ></i></span>
            <span className='text-light mt-lg-2 mt-3'>Personal Details</span>
          </div>
          <div className='Educational d-flex flex-column align-items-center'>
          <span className='Personal_detail_span1 mb-1 '><i class="fa-solid fa-check" ></i></span>
            <span className='text-light mt-lg-2 mt-3 text-center'>Educational & Professional Details</span>
          </div>
          <div className='Family_Detail d-flex flex-column align-items-center'>
          <span className='Personal_detail_span1 mb-1 '><i class="fa-solid fa-check" ></i></span>
            <span className='text-light mt-lg-2 mt-3 text-center'>Family Details</span>
          </div>
          <div className='Address d-flex flex-column align-items-center'>
          <span className='Personal_detail_span1 mb-1 '><i class="fa-solid fa-check" ></i></span>
            <span className='text-light mt-lg-2 mt-3 text-center'>Address</span>
          </div>
          <div className='Photo_upload d-flex flex-column align-items-center'>
          <span className='Personal_detail_span1 mb-1 '><i class="fa-solid fa-check" ></i></span>
            <span className='text-light mt-lg-2 mt-3 text-center'>Photo Upload</span>
          </div>
          <div className='Kyc d-flex flex-column align-items-center'>
          <span className='Personal_detail_span1 mb-1 '><i class="fa-solid fa-check" ></i></span>
            <span className='text-light mt-lg-2 mt-3 text-center'>KYC</span>
          </div>
          <div className='PartnerPerference d-flex flex-column align-items-center'>
          <span className='Personal_detail_span mb-1 '>7</span>
            <span className='text-light mt-lg-2 mt-3 text-center'>Partner Preference</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Stepper7