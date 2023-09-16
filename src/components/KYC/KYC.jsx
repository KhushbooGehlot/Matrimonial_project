import React from "react";
import "./KYC.css";
import { useForm } from "react-hook-form";

function KYC() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("hurrah    ");
  };
  return (
    <>
      <div className="photo_uploads">
        <div className="d-flex justify-content-center">
          <div className="mt-5">
            <img src="heart.png" alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-center">
            <div>
              <h3 className="text-light">KYC</h3>
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <div className="container w-100">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="mt-5 text-light d-flex flex-column align-items-center">
                    <p className="text-light text-center fw-bold mb-4">
                      Aadhar Front
                    </p>

                    <input type="file" id="file-input" className="input py-3 " name="file-input" {...register("file", { required: "File is required" })}/>
                    <div className="d-flex justify-content-center">
                      {errors.file && (
                        <p className="text-danger">{errors.file.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="mt-5 text-light d-flex flex-column align-items-center">
                    <p className="text-light text-center fw-bold mb-4">
                      Aadhar Back
                    </p>

                    <input type="file" id="file-input" className="input py-3 " name="file-input" {...register("file1", { required: "File is required" })}/>
                    <div className="d-flex justify-content-center">
                      {errors.file1 && (
                        <p className="text-danger">{errors.file1.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="mt-5 text-light d-flex flex-column align-items-center">
                    <p className="text-light text-center fw-bold mb-4">
                      PAN Card
                    </p>

                    <input type="file" id="file-input" className="input py-3 " name="file-input" {...register("file2", { required: "File is required" })}/>
                    <div className="d-flex justify-content-center">
                      {errors.file2 && (
                        <p className="text-danger">{errors.file2.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center my-5 ">
            <button className="py-3 mb-5 bttn rounded text-light h4 border-0 w-25">
              Save and Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default KYC;
