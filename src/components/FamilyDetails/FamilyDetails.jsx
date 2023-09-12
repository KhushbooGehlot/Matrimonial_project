import React from 'react';
import "./FamilyDetails.css"
import { useForm } from "react-hook-form";

const FamilyDetails = () => {
    const { register , handleSubmit , formState:{errors}} = useForm();
    // const onSubmit = data => console.log(data);

    return (
        <>
            <div className="FamilyDetails">
                <div className="container">
                    <div className="row">
                        <div className="col my-3 d-flex justify-content-center">
                            <img className='img-fluid' src="/heart.png" alt="Not available" />
                        </div>
                    </div>
                    <div className="row heading">
                        <div className="col-12 my-3 d-flex justify-content-center">
                            <h2 className=''>Family Details</h2>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                        <div className="row my-4 ">
                            <div className="col-sm-12 col-md-5 align">
                                <label for="FatherName" class="form-label">Father Name</label>
                                <input type="text" {...register("FatherName", { required:"Father Name is required !" })} class="form-control inputClass  gap" placeholder="Enter the Father's Name" />
                                <p style={{color:"red"}}>{errors.FatherName?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="MotherName" class="form-label">Mother Name</label>
                                <input type="text" {...register("MotherName", { required : "Mother Name is required !" })} class="form-control inputClass" placeholder="Enter the Mother's Name" />
                                <p style={{color:"red"}}>{errors.MotherName?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">Hindu / Jain (Select No if Other Than Hindu/Jain)</label>
                                <input type="text" class="form-control inputClass religion_1" placeholder="Enter the Father's Name" />
                                
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label religion_2">Muslim / Christian (Select No if Other Than Muslim/Christian)</label>
                                <input type="text" class="form-control inputClass" placeholder="Enter the Father's Name" />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherGotra"  class="form-label">Father Gotra</label>
                                <input type="text" {...register("FatherGotra", { required:"Father Gotra is required !" })} class="form-control inputClass  gap" placeholder="Father Gotra" />
                                <p style={{color:"red"}}>{errors.FatherGotra?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="Mother_Gotra" class="form-label">Mother Gotra</label>
                                <input type="text" {...register("MotherGotra", { required:"Mother Gotra is required !" })} class="form-control inputClass" placeholder="Mother Gotra" />
                                <p style={{color:"red"}}>{errors.MotherGotra?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">Father's Occupation Status</label>
                                <select {...register("F_Occu_Status" , {required : "Select one option!" })} class="form-select  gap" aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.F_Occu_Status?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">Father's Occupation Field</label>
                                <select {...register("F_Occu_Field" , {required : "Select one option!" })} class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Field</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.F_Occu_Field?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="" class="form-label">Mother's Occupation Status</label>
                                <select {...register("M_Occu_Status" , {required : "Select one option!" })} class="form-select  gap" aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.M_Occu_Status?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">Mother's Occupation Field</label>
                                {/* <input type="text" class="form-control"   placeholder="" /> */}
                                <select  {...register("M_Occu_field" , {required : "Select one option!" })} class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.M_Occu_field?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="" class="form-label">Family Status</label>
                                <select {...register("fam_status" , {required : "Select one option!" })} class="form-select  gap" aria-label="Default select example">
                                    <option className='text-muted' selected disabled value="">Select Family Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.fam_status?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">Family Income</label>
                                <select {...register("Fam_Income" , {required : "Select one option!" })} class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Family Income</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.Fam_Income?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">Family Type</label>
                                <select {...register("fam_type" , {required : "Select one option!" })} class="form-select  gap" aria-label="Default select example">
                                    <option selected disabled value="">Select Family Type</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.fam_type?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="" class="form-label">Family Cultural Value</label>
                                <select {...register("Cultural_value" , {required : "Select one option!" })} class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Cultural Value</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                                <p style={{color:"red"}}>{errors.Cultural_value?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">No of Sister's</label>
                                <select {...register("no_of_sister" , {required : "Select one option!" })} class="form-select  gap" aria-label="Default select example">
                                    <option selected disabled value="">Select No of Sister</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                                <p style={{color:"red"}}>{errors.no_of_sister?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="" class="form-label">No of Sister's Married</label>
                                <select {...register("Sister_married" , {required : "Select one option!" })} class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select No of Sister's Married</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                                <p style={{color:"red"}}>{errors.Sister_married?.message}</p>
                            </div>
                        </div>
                        <div className="row my-4 mt-5">
                            <div className="col-sm-12 col-md-5">
                                <label for="FatherName" class="form-label">No of Brother's</label>
                                <select {...register("no_of_brother" , {required : "Select one option!" })} class="form-select  gap" aria-label="Default select example">
                                    <option selected disabled value="">Select No of Brother</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                                <p style={{color:"red"}}>{errors.no_of_brother?.message}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <label for="" class="form-label">No of Brother's Married</label>
                                <select {...register("Brother_married" , {required : "Select one option!" })} class="form-select" aria-label="Default select example">
                                    <option selected disabled value="">Select No of Brother's Married</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                                <p style={{color:"red"}}>{errors.Brother_married?.message}</p>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <button className='my-5 w-25 btn SaveBtn'>Save and Next</button>
                            {/* <input type="submit" value="" /> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FamilyDetails;
