import React from 'react';
import "./PP.css"
import { useForm } from "react-hook-form";


const PP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="PP">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 mx-auto">

                            <div className="row">
                                <div className="col my-3 d-flex justify-content-center">
                                    <img className='img-fluid' src="/heart.png" alt="Not available" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 my-3 d-flex justify-content-center">
                                    <h2 className=''>Partner Preference</h2>
                                </div>
                            </div>

                            <form action="" onSubmit={handleSubmit((onSubmit))}>
                                <div className="row my-4">
                                    <div className="col-sm-12 col-md-6">
                                        <label for="AgeFrom" class="form-label">Age From</label>
                                        <select {...register("Age_from", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Age From</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Age_from?.message}</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <label for="AgeTo" class="form-label">Age To</label>
                                        <select {...register("Age_to", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                                            <option selected disabled value="">Age To</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Age_to?.message}</p>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="col-sm-12 col-md-6">
                                        <label for="marialStatus" class="form-label">Marial Status</label>
                                        <select {...register("Marial_Status", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Select Marial Status</option>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widow">Widow</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Marial_Status?.message}</p>
                                    </div>
                                    <div className="col-sm-12  col-md-6">
                                        <label for="Religion" class="form-label">Religion</label>
                                        <select {...register("religion", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                                            <option selected disabled value="">Select Religion</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Jain">Jain</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.religion?.message}</p>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="col-sm-12  col-md-6">
                                        <label for="Caste" class="form-label">Caste</label>
                                        <select {...register("caste", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Select Caste</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="Doesn't Matter">Doesn't Matter</option>
                                            <option value="Don't Know">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.caste?.message}</p>
                                    </div>
                                    <div className="col-sm-12  col-md-6">
                                        <label for="ResiStatus" class="form-label">Residential Status</label>
                                        <select {...register("Resi_Status", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                                            <option selected disabled value="">Select Residential Status</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="Doesn't Matter">Doesn't Matter</option>
                                            <option value="Don't Know">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Resi_Status?.message}</p>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="col-sm-12  col-md-6">
                                        <label for="ocuu" class="form-label">Occupation</label>
                                        <select {...register("Occupation", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Select Occupation</option>
                                            <option value="Yes">Job</option>
                                            <option value="No">Entrepreneur</option>
                                            <option value="Doesn't Matter">Doesn't Matter</option>
                                            <option value="Don't Know">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Occupation?.message}</p>
                                    </div>
                                    <div className="col-sm-12  col-md-6">
                                        <label for="ecu" class="form-label">Education</label>
                                        <select {...register("Education", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                                            <option selected disabled value="">Select Education</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="Doesn't Matter">Doesn't Matter</option>
                                            <option value="Don't Know">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Education?.message}</p>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="col-sm-12 col-md-6">
                                        <label for="Income_range" class="form-label">Highest Income Range</label>
                                        <select {...register("Income", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                                            <option selected disabled value="">Select Income Range</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="Doesn't Matter">Doesn't Matter</option>
                                            <option value="Don't Know">Don't Know</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors.Income?.message}</p>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <button className='my-5 w-50 btn SubmitBtn'>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PP;
