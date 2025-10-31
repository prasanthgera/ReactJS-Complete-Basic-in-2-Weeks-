import { useState } from "react";
import { z } from "zod";


const formSchema = z
  .object({
    userName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPasswd: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPasswd, {
    message: "Passwords must match",
    path: ["confirmPasswd"],
  });

const FormInput = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPasswd: "",
  });

  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const validatedData = formSchema.parse(formData); 
      console.log("✅ Valid data:", validatedData);
      alert("Form submitted successfully!");
      setErrors({});
      setFormData({
        userName: "",
        email: "",
        password: "",
        confirmPasswd: "",
      });
    } catch (err) {
    if (err.issues) {
  const newErrors = {};
  err.issues.forEach((issue) => {
    newErrors[issue.path[0]] = issue.message;
  });
  setErrors(newErrors);
}

    }
  };

  return (
    <div>
      <hr />
      <h1 style={{ color: "green" }}>Form Validation with Zod</h1>
      <center>
        <form onSubmit={handleSubmit}>
          Username:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={changeValue}
          />
          <br />
          {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}

          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeValue}
          />
          <br />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeValue}
          />
          <br />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          Confirm Password:
          <input
            type="password"
            name="confirmPasswd"
            value={formData.confirmPasswd}
            onChange={changeValue}
          />
          <br />
          {errors.confirmPasswd && (
            <p style={{ color: "red" }}>{errors.confirmPasswd}</p>
          )}

          

          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
};

export default FormInput;
