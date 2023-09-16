import React from 'react';
import "./PP.css"
import { Controller, useForm } from "react-hook-form";

import Select from 'react-select'


const PP = () => {
    const { control,register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    const Maritial = [
        { value: 'married', label: 'Married' },
        { value: 'unmarried', label: 'Unmarried' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'widow', label: 'Widow' }
    ]

    const Religion = [
        { value: 'hindu', label: 'Hindu' },
        { value: 'muslim', label: 'Muslim' },
        { value: 'christian', label: 'Christian' },
        { value: 'jain', label: 'Jain' }
    ]

    const Caste = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        { value: "doesn't Matter", label: "Doesn't Matter" },
        { value: "don't Know", label: "Don't Know" }
    ]

    const Occupation = [
        { value: 'job', label: 'Job' },
        { value: 'entrepreneur', label: 'Entrepreneur' },
        { value: "doesn't Matter", label: "Doesn't Matter" },
        { value: "don't Know", label: "Don't Know" }
    ]


    return (
        <>
            <div className="PP">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 mx-auto">

                            <div className="row">
                                <div className="col my-3 d-flex justify-content-center ">
                                    <img className='img-fluid' src="/heart.png" alt="Not available" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 my-3 d-flex justify-content-center">
                                    <h2 className='text-light'>Partner Preference</h2>
                                </div>
                            </div>

                            <form action="" onSubmit={handleSubmit((onSubmit))}>
                                <div className="row my-4 text-light">
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

                                <div className="row my-4 ">
                                    <div className="col-sm-12 col-md-6 ">
                                        <label for="marialStatus" class="form-label text-light">Marial Status</label>

                                        <Controller
                                            name="selectedOption"
                                            control={control}
                                            rules={{ required: 'Please select an option' }}
                                            render={({ field_1 }) => (
                                                <Select
                                                    {...field_1}
                                                    options={Maritial}
                                                    isClearable
                                                    placeholder="Select an option"
                                                />
                                            )}
                                        />
                                        {errors.selectedOption && (
                                            <span style={{ color: "red" }} className="error">{errors.selectedOption.message}</span>
                                        )}
                                    </div>
                                    <div className="col-sm-12  col-md-6">
                                        <label for="Religion" class="form-label text-light">Religion</label>
                                        <Controller
                                            name="selectedOption"
                                            control={control}
                                            rules={{ required: 'Please select an option' }}
                                            render={({ field_2 }) => (
                                                <Select
                                                    {...field_2}
                                                    options={Religion}
                                                    isClearable
                                                    placeholder="Select an option"
                                                />
                                            )}
                                        />
                                        {errors.selectedOption && (
                                            <span style={{ color: "red" }} className="error">{errors.selectedOption.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="row my-4 ">
                                    <div className="col-sm-12  col-md-6">
                                        <label for="Caste" class="form-label text-light">Caste</label>
                                        <Controller
                                            name="selectedOption"
                                            control={control}
                                            rules={{ required: 'Please select an option' }}
                                            render={({ field_3 }) => (
                                                <Select
                                                    {...field_3}
                                                    options={Religion}
                                                    isClearable
                                                    placeholder="Select an option"
                                                />
                                            )}
                                        />
                                        {errors.selectedOption && (
                                            <span style={{ color: "red" }} className="error">{errors.selectedOption.message}</span>
                                        )}
                                    </div>
                                    <div className="col-sm-12  col-md-6">
                                        <label for="ResiStatus" class="form-label text-light">Residential Status</label>
                                        <Controller
                                            name="selectedOption"
                                            control={control}
                                            rules={{ required: 'Please select an option' }}
                                            render={({ field_4 }) => (
                                                <Select
                                                    {...field_4}
                                                    options={Caste}
                                                    isClearable
                                                    placeholder="Select an option"
                                                />
                                            )}
                                        />
                                        {errors.selectedOption && (
                                            <span style={{ color: "red" }} className="error">{errors.selectedOption.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="row my-4 ">
                                    <div className="col-sm-12  col-md-6">
                                        <label for="ocuu" class="form-label text-light">Occupation</label>
                                        <Controller
                                            name="selectedOption"
                                            control={control}
                                            rules={{ required: 'Please select an option' }}
                                            render={({ field_5 }) => (
                                                <Select
                                                    {...field_5}
                                                    options={Occupation}
                                                    isClearable
                                                    placeholder="Select an option"
                                                />
                                            )}
                                        />
                                        {errors.selectedOption && (
                                            <span style={{ color: "red" }} className="error">{errors.selectedOption.message}</span>
                                        )}
                                    </div>
                                    <div className="col-sm-12  col-md-6">
                                        <label for="ecu" class="form-label text-light">Education</label>
                                        <Controller
                                            name="selectedOption"
                                            control={control}
                                            rules={{ required: 'Please select an option' }}
                                            render={({ field_6 }) => (
                                                <Select
                                                    {...field_6}
                                                    options={Caste}
                                                    isClearable
                                                    placeholder="Select an option"
                                                />
                                            )}
                                        />
                                        {errors.selectedOption && (
                                            <span style={{ color: "red" }} className="error">{errors.selectedOption.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="row my-4 text-light">
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
