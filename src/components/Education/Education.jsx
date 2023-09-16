import React from 'react';
import "./Education.css";
import { useForm } from "react-hook-form";

const Education = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <div className="Education">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 mx-auto">

                            <div className="row">
                                <div className="col my-3 d-flex justify-content-center">
                                    <img className='img-fluid' src="/heart.png" alt="Not available" />
                                </div>
                            </div>

                            <div className="row heading">
                                <div className="col-12 my-3 d-flex justify-content-center">
                                    <h2 className='text-light'>Education & Professional Details</h2>
                                </div>
                            </div>

                            <form action="" onSubmit={handleSubmit((data) => {
                                console.log(data);
                            })}>
                                <div className="row my-4">
                                    <div className="col-sm-10 col-md-6">
                                        <label for="" class="form-label highest_qua">Highest Qualification Category</label>
                                        <select {...register("Qualification", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                                            <option selected disabled value="">Select Highest Qualification Category</option>
                                            <option value="0">Undergraduate</option>
                                            <option value="1">Postgraduate</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Qualification?.message}</p>
                                    </div>
                                    <div className="col-sm-10 col-md-6">
                                        <label for="" class="form-label">Highest Qualification Degree</label>
                                        <select  {...register("Degree", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                                            <option selected disabled value="">Select Highest Qualification Degree</option>
                                            <option value="0">B.Tech.</option>
                                            <option value="1">MBA</option>
                                            <option value="2">MCA</option>
                                            <option value="3">PhD</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Degree?.message}</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-sm-10 col-md-6 school_clg_input">
                                        <input type="text" {...register("School_College", { required: "School / College  is required !" })} class="form-control gap" placeholder="School / College Attended" />
                                        <p style={{ color: "red" }}>{errors.School_College?.message}</p>
                                    </div>
                                    <div className="col-sm-10 col-md-6">
                                        <label for="" class="form-label">Occupation Sector</label>
                                        <select  {...register("occu_sector", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Select Occupation Sector</option>
                                            <option value="0">Yes</option>
                                            <option value="1">No</option>
                                            <option value="2">Doesn't Matter</option>
                                            <option value="3">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.occu_sector?.message}</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-sm-10 col-md-6">
                                        <label for="" class="form-label">Occupation Field</label>
                                        <select {...register("Occu_field", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                                            <option selected disabled value="">Select Occupation Field</option>
                                            <option value="0">Yes</option>
                                            <option value="1">No</option>
                                            <option value="2">Doesn't Matter</option>
                                            <option value="3">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Occu_field?.message}</p>
                                    </div>
                                    <div className="col-sm-10 col-md-6">
                                        <label for="" class="form-label">Work As</label>
                                        <select  {...register("Work_as", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Select Work As</option>
                                            <option value="0">Yes</option>
                                            <option value="1">No</option>
                                            <option value="2">Doesn't Matter</option>
                                            <option value="3">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Work_as?.message}</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-sm-10 col-md-6">
                                        <input type="text" {...register("org_name", { required: "Organization Name is required !" })} class="form-control gap" placeholder="Organization Name" />
                                        <p style={{ color: "red" }}>{errors.org_name?.message}</p>
                                    </div>
                                    <div className="col-sm-10 col-md-6">
                                    <input type="text" {...register("work_location", { required: "Work Location is required !" })} class="form-control" placeholder="Work Location" />
                                        <p style={{ color: "red" }}>{errors.work_location?.message}</p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <button className='my-5 w-25 btn SaveButton'>Save and Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Education;
