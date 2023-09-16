import React, { useEffect, useState } from 'react'
import './Address.css'
import axios from 'axios';

import { useForm } from 'react-hook-form';
import Stepper from '../Stepper/Stepper';
import Stepper2 from '../Stepper/Stepper2';
import Stepper3 from '../Stepper/Stepper3';
import Stepper4 from '../Stepper/Stepper4';
import Stepper5 from '../Stepper/Stepper5';
import Stepper6 from '../Stepper/Stepper6';
import Stepper7 from '../Stepper/Stepper7';
function Address() {
    const [copyAddress, setCopyAddress] = useState(false);
    

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const [getCountry, setCountry] = useState([]);
    const [getState, setState] = useState([]);
    const [getCity, setCity] = useState([]);
    const [getSelectedCountry, setSelectedCountry] = useState();
    const [getSelectedState, setSelectedState] = useState();


    const getApi = async () => {
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-country`
        ).then((res) => {
            setCountry(res?.data?.data)
            console.log(res.data.data);
        })
            .catch(err => err
            )
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-state?country_id=${getSelectedCountry}`
        ).then((res) => {
            setSelectedCountry(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
    }
    const getStateApi = async () => {
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-state?country_id=${getSelectedCountry}`
        ).then((res) => {
            setState(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
    }
    const getCityApi = async () => {
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-city?ct_state_id=${getSelectedState}`
        ).then((res) => {
            // console.log(res.data)
            setCity(res?.data?.data)
        })
            .catch(err => err
            )
    }
 
    const {
        register,
      setValue,
      getValues,
        handleSubmit,
        formState: { errors }
    } = useForm(); 

    const onSubmit = (data) => {
        if (copyAddress) {
          data.address2 = data.address;
          data.country2 = data.country;
          data.state2 = data.state;
          data.city2 = data.city;
        }
        alert("hurrah....")

      };

      const handleCopyAddress = () => {
        
        
        const currentAddressValue = getValues('address');
        const currentCountryValue = getValues('country');
        const currentStateValue = getValues('State');
        const CityValue = getValues('City');
        setValue('address2', currentAddressValue);
        setValue('country2', currentCountryValue);
        setValue('State2', currentStateValue);
        setValue('City2', CityValue);
        setIsCheckboxChecked(!isCheckboxChecked);
      };
    useEffect(() => {
        getApi();
    }, [])
    useEffect(() => {
        getStateApi();
    }, [getSelectedCountry]);
    useEffect(() => {
        getCityApi();
    }, [getSelectedState]);


    return (
        <>
            <div className="address_container">
            <Stepper4/>
                <div className="container">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-12 col-sm-8 mx-auto">
                                <div className='d-flex justify-content-center mx-auto'>
                                    <img className='mt-4' src="heart.png" alt="" />
                                </div>

                                <div className="row ">
                                    <h4 className='text-white text-center mb-5'>Address Details</h4>
                                    <div className='  col-12 text-center my-4'>
                                        <span className='address_address_div px-4 py-1'>
                                            Current Address
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-6 my-4 ">
                                        <label htmlFor="" className='address_select_label'>Country</label>
                                        <select className='w-100 address_countary mb-2' name="" id="" onChange={(e) => setSelectedCountry(e.target.value)} {...register('country', { required: "Country is required" })}>
                                            <option selected disabled value="" >
                                                Select Country
                                            </option>
                                            {
                                                getCountry?.map((element) => {
                                                    return (
                                                        <option value={element._id} style={{ color: "black" }}>{element?.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {errors.country && <p className='
                                   text-danger fw-bold'>{errors.country.message}</p>}
                                    </div>
                                    <div className="col-12 col-md-6 my-4">
                                        <label htmlFor="" className='address_select_label'>State</label>
                                        <select className='w-100 address_countary mb-2'  name="" id="" onChange={(e) => setSelectedState(e.target.value)}
                                        //  {...register('State', { required: "State is required" })}
                                         >
                                            <option selected disabled value="">
                                                State
                                            </option>

                                            {getState.map((element) => {
                                                return (
                                                    <option value={element._id} style={{ color: "black" }}>{element?.state}</option>
                                                )
                                            })}

                                        </select>
                                        {/* {errors.State && <p className='
                                   text-danger fw-bold'>{errors.State.message}</p>} */}
                                    </div>
                                    <div className="col-12 col-md-6 mt-2 my-4 ">
                                        <label htmlFor="" className='address_select_label'>City</label>
                                        <select className='w-100 address_countary mb-2' name="" id=""
                                        //  {...register('City', { required: "City is required" })}
                                        >
                                            <option selected disabled value="" >
                                                City
                                            </option>

                                            {getCity.map((element) => {
                                                return (
                                                    <option value="0" style={{ color: "black" }}>{element?.ct_city}</option>
                                                )
                                            })}

                                        </select>
                                        {/* {errors.City && <p className='
                                   text-danger fw-bold'>{errors.City.message}</p>} */}
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="" className='address_select_label'>Current Address</label>
                                            <input type="text" autoComplete='off' className='address_input w-100 mb-3' placeholder='Enter the Current Address'
                                              {...register('address', { required: "Current Address is required" })}
                                              />
                                            {errors.address && <p className='
                                   text-danger fw-bold'>{errors.address.message}</p>}
                                        </div>
                                        
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className='address_input2 w-100' />
                                    </div>
                                    <div className="col-12 mt-4 mb-3">
                                        <input type="checkbox" 
                                       checked={isCheckboxChecked}
                                        // onClick={showHide}
                                        onChange={() => {
                                            setCopyAddress(!copyAddress);
                                            handleCopyAddress();
                                          }}
                                        />
                                        <label htmlFor="" className='address_select_label ms-2'>Same as Current Address</label>
                                    </div>
                                    {!isCheckboxChecked && (
                                    <div className='  col-12 text-center my-4' id='permanent_address'>
                                        <span className='address_address_div px-4 py-1'>
                                            Permanent Address
                                        </span>
                                    </div>)}
                                    {!isCheckboxChecked && (
                                    <div className="col-12 col-md-6 my-4" id='country'>
                                        <label htmlFor="" className='address_select_label'>Country</label>
                                        <select className='w-100 address_countary mb-2' name="" id="" onChange={(e) => setSelectedCountry(e.target.value)} {...register('country2', { required: "Country is required" })} >
                                            <option selected disabled value="">
                                                Select Country
                                            </option>
                                            {
                                                getCountry?.map((element) => {
                                                    return (
                                                        <option value={element._id} style={{ color: "black" }}>{element?.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {errors.country2 && <p className='
                                   text-danger fw-bold'>{errors.country2.message}</p>}
                                        
                                    </div>)}
                                    {!isCheckboxChecked && (
                                    <div className="col-12 col-md-6 my-4" id='state'>
                                        <label htmlFor="" className='address_select_label'>State</label>
                                        <select className='w-100 address_countary mb-2' name="" id="" onChange={(e) => setSelectedState(e.target.value)} 
                                        // {...register('State2', { required: "State is required" })}
                                        >
                                            <option selected disabled value="">
                                                State
                                            </option>

                                            {getState.map((element) => {
                                                return (
                                                    <option value={element._id} style={{ color: "black" }}>{element?.state}</option>
                                                )
                                            })}

                                        </select>
                                        {/* {errors.State2 && <p className='
                                   text-danger fw-bold'>{errors.State2.message}</p>} */}
                                    </div>)}
                                    {!isCheckboxChecked && (
                                    <div className="col-12 col-md-6 mt-2 my-4" id='city'>
                                        <label htmlFor="" className='address_select_label'>City</label>
                                        <select className='w-100 address_countary mb-2' name="" id="" 
                                        // {...register('City2', { required: "City is required" })}
                                        >
                                            <option selected disabled value=""
                                            >
                                                City
                                            </option>

                                            {getCity.map((element) => {
                                                return (
                                                    <option value="0" style={{ color: "black" }}>{element?.ct_city}</option>
                                                )
                                            })}

                                        </select>
                                        {/* {errors.City2 && <p className='
                                   text-danger fw-bold'>{errors.City2.message}</p>} */}
                                    </div>)}
                                    {!isCheckboxChecked && (
                                    <div className="row mb-4" id='permanent'>
                                        <div className="col-6" >
                                            <label htmlFor="" className='address_select_label'>Permanent Address</label>
                                            <input type="text" autoComplete='off' className='address_input w-100 mb-2' placeholder='Enter the Permanent Address' {...register('address2', { required: "address is required" })}/>
                                        </div>
                                        {errors.address2 && <p className='
                                   text-danger fw-bold'>{errors.address2.message}</p>}
                                    </div>)}
                                    {!isCheckboxChecked && (
                                    <div className="col-12 mb-5" id='permanent2'>
                                        <input type="text" className='address_input2 w-100' />
                                    </div>)}
                                </div>


                            </div>
                        </div>
                        <div className='mx-auto text-center'>
                                <button type='submit' id='register_btn' className="btn register_btn  text-white w-50 my-5" >Save and Next</button>
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Address