import { useEffect } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        company: "",
        designation: "",
        email: "",
        contactNumber: "",
        telephone: "",
        technologies: "",
        event: "",
        consent: false,
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitRegistrationForm = async (data) => {
    console.log(data);
    // handle form submission
  };

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(submitRegistrationForm)}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="label-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
            className="form-style"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-400">
              Please enter your first name.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="label-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="form-style"
            placeholder="Enter Last Name"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="label-style">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Enter Company Name"
          className="form-style"
          {...register("company", { required: true })}
        />
        {errors.company && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please enter your company name.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="designation" className="label-style">
          Designation
        </label>
        <input
          type="text"
          name="designation"
          id="designation"
          placeholder="Enter Designation"
          className="form-style"
          {...register("designation", { required: true })}
        />
        {errors.designation && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please enter your designation.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="label-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please enter your email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contactNumber" className="label-style">
          Contact Number
        </label>
        <input
          type="text"
          name="contactNumber"
          id="contactNumber"
          className="form-style"
          placeholder="Enter Contact Number"
          {...register("contactNumber", { required: true })}
        />
        {errors.contactNumber && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please enter your contact number.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="telephone" className="label-style">
          Telephone
        </label>
        <input
          type="text"
          name="telephone"
          id="telephone"
          placeholder="Enter Telephone Number"
          {...register("telephone", { required: true })}
          className="form-style"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="technologies" className="label-style">
          Select the technologies you are interested in
        </label>
        <select
          name="technologies"
          id="technologies"
          {...register("technologies", { required: true })}
          className="form-style"
        >
          <option value="">Select</option>
          <option value="Data Engineering">Data Engineering</option>
          <option value="Hyper Automation - AI/ML">
            Hyper Automation - AI/ML
          </option>
          <option value="IPaaS">IPaaS</option>
          <option value="Digital Integration">Digital Integration</option>
          <option value="DPA/BPA/BPM">DPA/BPA/BPM</option>
          <option value="RPA">RPA</option>
          <option value="CRM">CRM</option>
          <option value="ERP">ERP</option>
          <option value="Cloud">Cloud</option>
          <option value="IT Consulting">IT Consulting</option>
          <option value="Open Source Technologies">
            Open Source Technologies
          </option>
        </select>
        {errors.technologies && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please select a technology.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="event" className="label-style">
          I am interested in
        </label>
        <select
          name="event"
          id="event"
          {...register("event", { required: true })}
          className="form-style"
        >
          <option value="">Select</option>
          <option value="Attend as a Delegate">Attend as a Delegate</option>
          <option value="Attend as a Speaker">Attend as a Speaker</option>
          <option value="Attend as a Partner">Attend as a Partner</option>
        </select>
        {errors.event && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please select an event.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="consent" className="label-style flex items-center">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            {...register("consent", { required: true })}
            className="mr-2"
          />
          Consent to send updates via WhatsApp/LinkedIn/email
        </label>
        {errors.consent && (
          <span className="-mt-1 text-[12px] text-yellow-400">
            Please provide your consent.
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] sm:text-[16px]`}
      >
        Send Message
      </button>
    </form>
  );
};

export default RegistrationForm;
