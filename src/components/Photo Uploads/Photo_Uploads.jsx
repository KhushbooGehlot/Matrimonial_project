import React from "react";
import "./Photo_Uploads.css";
import { useForm } from "react-hook-form";

function Photo_Uploads() {
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
              <h3 className="text-light">Upload Images</h3>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5 text-light align-items-center'>
          <input type="file" id="file-input" name="file-input" className="input py-3 w-25" {...register('file', { required: "File is required" })} />
          </div>
          <div className="d-flex justify-content-center">
            {errors.file && (
              <p className="text-danger">{errors.file.message}</p>
            )}
          </div>
          <div className="d-flex justify-content-center mt-5 ">
            <button type="submit" className="py-3 bttn rounded text-light h4 border-0 w-25">
              Save and Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Photo_Uploads;
