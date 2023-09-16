import React, { useState } from "react";
import "./PersonalDetails.css";
import { useForm } from "react-hook-form";
import Stepper from "../Stepper/Stepper/Stepper";

function PersonalDetails_container() {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);
  const [MyBrother, setMyBrother] = useState("");
  const [myson, setmyson] = useState("");
  const [male, setmale] = useState("");
  const [Female, setFemale] = useState("");
  const [MyDaughter, setMyDaughter] = useState("");
  const [MySister, setMySister] = useState("");
  const [Self, setSelf] = useState("");
  const [Friend, setFriend] = useState("");

  
 
 

  const onSubmit = (data) => {
    console.log(data);
    alert("hurrah    ");
  };

  // const a = watch("name")
  // console.log(a);

  // const validateButton = document.getElementById('validateButton');

  function validateButton() {
    const errorText = document.getElementById("errorText");
    const inputField = document.getElementById("inputField");

    const inputValue = inputField.value.trim();

    // Perform validation
    if (inputValue === "") {
      errorText.textContent = "Input cannot be empty.";
    } else if (!isNumeric(inputValue)) {
      errorText.textContent = "Input must be a valid number.";
    } else if (inputValue === "123456") {
      errorText.textContent = ""; // Clear any previous error message
      // Here, you can perform any additional validation or actions
      setInputVisible(!isInputVisible);
    } else {
      errorText.textContent = "invalid input";
    }
  }
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  return (
    <>
      <div className="PersonalDetails">
        <Stepper/>
        <div className="container">
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row d-flex justify-content-center ">

              <div className="d-flex justify-content-center ">
                <img className="mt-4" src="heart.png" alt="" />
              </div>

              <h4 className="text-white text-center mb-5">Personal Details</h4>

              <div className="row d-flex justify-content-center mb-4">
                <div className="col-12   col-md-5 col-lg-4">
                <label for="" class="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control gap"
                    placeholder="First Name"
                    autoComplete="off"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}
                </div>
                <div className=" col-12   col-md-5 col-lg-4">
                <label for="FatherName" class="form-label">Middle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle Name "
                    name="name"
                    autoComplete="off"
                    {...register("Mmiddlename", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (<p className="text-danger">{errors.name.message}</p>)}
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className=" col-12   col-md-5 col-lg-4">
                <label for="FatherName" class="form-label">Last Name</label>
                  <input type="text" className="form-control mb-4" placeholder="Last Name " name="name" autoComplete="off" {...register("lastname", { required: "Name is required" })} />
                  {errors.name && (<p className="text-danger">{errors.name.message}</p>)}
                </div>
                <div className=" col-12   col-md-5 col-lg-4"></div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 mx-auto ">
                  <h6 className="text-white ">Profile Created For</h6>
                  <div className=" text-light my-4 d-flex flex-wrap  ">
                    <span className="me-3">
                      <input type="radio" style={{ display: "none" }} />
                      <label
                        htmlFor=""
                     
                        className="   profile_btns px-4 py-2"
                      >
                        Self
                      </label>
                    </span>
                    <span className="me-3">
                      <input type="radio" style={{ display: "none" }} />
                      <label
                        htmlFor=""
                  
        
                        className="profile_btns px-2 py-2"
                      >
                        My Brother
                      </label>
                    </span>
                    <div className="me-3">
                      <input
                        type="radio"
                        className=""
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor=""
                        className="profile_btns px-2 py-2"
                      >
                        My Sister
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="radio"
                        className=""
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor=""
                        
                     
                        className="profile_btns px-3 py-2"
                      >
                        My Son
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="radio"
                        className=""
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor=""
                        className="profile_btns px-3 py-2 "
                      >
                        My Daughter
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="radio"
                        className=""
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor=""
                        
                        className="profile_btns px-3 py-2"
                      >
                        Friend
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-4 d-flex justify-content-center">
                <div className="col-12   col-md-5 col-lg-4 text-white mb-3">
                  <h6 className="mb-3">Gender</h6>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-4 py-2   gap"
                    >
                      Male
                    </label>
                  </span>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-3    py-2"
                    >
                      Female
                    </label>
                  </span>
                </div>

                <div className="   col-md-5 col-lg-4  col-12">
                  <label for="Email" class="form-label">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="form-control w-100 "
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="  col-md-5 col-lg-4  col-12 mb-">
                  <label for="Email" class="form-label">Mobile No.(Cannot Change)</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control w-100 gap"
                    placeholder="Please Enter Mobile No."
                    autoComplete="off"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number",
                      },
                    })}
                  />
                  {errors.mobile && (
                    <p
                      className="
                                    text-danger"
                    >
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
                <div className="  col-md-5 col-lg-4  col-12 mb-4">
                  <label for="FatherName" class="form-label">Religion</label>
                  <select {...register("religion", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                    <option selected disabled value="">Select Occupation Field</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Jain">Jain</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.religion?.message}</p>
                </div>
              </div>


              <div className="row mb-4 d-flex justify-content-center">
                <div className="col-12   col-md-5 col-lg-4 text-white">
                  <h6 className="mb-3">Marial Status</h6>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-3 py-2 marial"
       
                    >
                      Unmarried
                    </label>
                  </span>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-3 marial py-2"
                    >
                      Divorced
                    </label>
                  </span>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-3 marial py-2"
                    >
                      Windower
                    </label>
                  </span>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-3 marial py-2 gap"
                    >
                      Annulled
                    </label>
                  </span>
                </div>

                <div className="  col-md-5 col-lg-4 col-12">
                  <label for="No_of_children" class="form-label">No. Of Children </label>
                  <select {...register("NO_OF_children", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                    <option selected disabled value="">Select No. Of Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.NO_OF_children?.message}</p>
                </div>
              </div>

              <div className="row mb-4 d-flex justify-content-center">
                <div className="  col-md-5 col-lg-4 col-12">
                  <label for="No_of_children_living" class="form-label">No. Of Children living with you</label>
                  <select {...register("NO_OF_children_living", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                    <option selected disabled value="">Select No. Of Children living with you</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.NO_OF_children_living?.message}</p>
                </div>

                <div className="  col-md-5 col-lg-4 col-12 text-light">
                  <h6 className="mb-3">Any plans to immigrate</h6>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-4 py-2"
                    >
                      Yes
                    </label>
                  </span>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-4 py-2"
                    >
                      No
                    </label>
                  </span>
                </div>

              </div>

              <div className="row mb-4 d-flex justify-content-center text-light">
                <div className="  col-md-5 col-lg-4  col-12">
                  <h6 className="mb-3">Living with Family</h6>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
                      className="profile_btns px-4 py-2   gap"
                    >
                      Yes
                    </label>
                  </span>
                  <span className="me-3">
                    <input type="radio" style={{ display: "none" }} />
                    <label
                      htmlFor=""
              
                      className="profile_btns px-3    py-2"
                    >
                      No
                    </label>
                  </span>
                </div>
                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="No_of_children_living" class="form-label">Residential Status</label>
                  <select {...register("resi_status", { required: "Select one option!" })} class="form-select " aria-label="Default select example">
                    <option selected disabled value="">Select Residential Status</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.resi_status?.message}</p>
                </div>
              </div>

              <div className="row mb-4 d-flex justify-content-center">
                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Eating Habits (Diet)</label>
                  <select {...register("eating_habit", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                    <option selected disabled value="">Select Diet</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.eating_habit?.message}</p>
                </div>

                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Drinking Habits</label>
                  <select {...register("drink_habit", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                    <option selected disabled value="">Select Drink</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.drink_habit?.message}</p>
                </div>
              </div>

              <div className="row mb-4 d-flex justify-content-center">
                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Smoking Habits (Smoke)</label>
                  <select {...register("smoke_habit", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                    <option selected disabled value="">Select Diet</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.smoke_habit?.message}</p>
                </div>

                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Height(in foot and inch)</label>
                  <select {...register("height", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                    <option selected disabled value="">Select Height</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.height?.message}</p>
                </div>
              </div>

              <div className="row mb-4 d-flex justify-content-center">
                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Tentative Time to Marry</label>
                  <select {...register("time_marry", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                    <option selected disabled value="">Select Tentative Time to Marry</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.time_marry?.message}</p>
                </div>

                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Annual Income</label>
                  <select {...register("annual_income", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                    <option selected disabled value="">Select Annual Income</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.annual_income?.message}</p>
                </div>
              </div>

              <div className="row mb-4 d-flex justify-content-center">
                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Body Type</label>
                  <select {...register("time_marry", { required: "Select one option!" })} class="form-select gap" aria-label="Default select example">
                    <option selected disabled value="">Select Body Type</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.time_marry?.message}</p>
                </div>

                <div className="  col-md-5 col-lg-4  col-12">
                  <label for="" class="form-label">Any Special Ability</label>
                  <select {...register("special_ability", { required: "Select one option!" })} class="form-select" aria-label="Default select example">
                    <option selected disabled value="">Select Special Ability</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="More than 3">More than 3</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.special_ability?.message}</p>
                </div>
              </div>

              <div className="mx-auto text-center">
                <button className="btn Save_Next_btn w-25 my-5">Save and Next</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails_container;
