import React from "react";
import { useForm } from "react-hook-form";

let num = 0;

const Input = ({ name, type, label, register, required }) => {
  // num++;
  num = num + 1;
  console.log(num);
  // const numt= num;
  let clas = "";
  if (
    label === "description" ||
    label === "qualificationNeeded" ||
    label === "role"
  ) {
    clas = "AddJob__form-text";

    return (
      <div className={clas}>
        <label>
          {num / 2}. {name}
          {required ? <sup>*</sup> : <sup></sup>}
        </label>
        <textarea
          type={type}
          required={required}
          {...register(label, { required })}
          placeholder={name}
        />
      </div>
    );
  } else {
    if (type === "checkbox") clas = "AddJob__form-checkbox";
    return (
      <div className={clas}>
        <label>
          {num / 2}. {name}
          {required ? <sup>*</sup> : <sup></sup>}
        </label>
        <input
          type={type}
          required={required}
          {...register(label, { required })}
          placeholder={name}
        />
      </div>
    );
  }
};

const AddJob = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <div className="AddJob__section">
        <h3 className="AddJob__section-heading">Add Job</h3>
        <p className="AddJob__section-para">
          <sup>*</sup> marked are required
        </p>
        <main className="AddJob__container flex-grow">
          <form className="AddJob__form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="string"
                name="Company Name"
                label="CompanyName"
                register={register}
                required
              />
              <Input
                type="string"
                name="Job Code"
                label="jobCode"
                register={register}
                required
              />
              <Input
                type="datetime-local"
                name="Deadline"
                label="deadline"
                register={register}
                required
              />
              <Input
                type="string"
                name="Looking for"
                label="lookingFor"
                register={register}
                required
              />
              <Input
                type="string"
                name="location"
                label="location"
                register={register}
                required
              />
              <Input
                type="string"
                name="Salary"
                label="salary"
                register={register}
                required
              />
              <Input
                type="string"
                name="Job Type"
                label="jobType"
                register={register}
                required
              />
              <Input
                type="string"
                name="eligibility"
                label="eligibility"
                register={register}
                required
              />
              <Input
                type="checkbox"
                name="Female Only ?"
                label="femaleOnly"
                register={register}
              />
              <Input
                type="text"
                name="Description"
                label="description"
                register={register}
                required
              />
              <Input
                type="text"
                name="Qualification needed"
                label="qualificationNeeded"
                register={register}
                required
              />
              <Input
                type="textarea"
                name="Job Role"
                label="role"
                register={register}
                required
              />
            </div>
            <input className="AddJob__submit" type="submit" />
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddJob;
