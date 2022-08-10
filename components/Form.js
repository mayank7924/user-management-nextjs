import React, { useState, useEffect } from "react";

export const initialInputData = Object.freeze({
  email: "",
  firstName: "",
  lastName: "",
  dob: "",
  accountType: "",
});

export default function Form(props) {
  const [data, setData] = useState(initialInputData);

  useEffect(() => {
    if (props.edit && props.user) {
      const { email, firstName, lastName, dob, accountType } = props.user;
      setData({ email, firstName, lastName, dob, accountType });
    }
  }, [props]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (props.edit) {
      const response = await fetch(`/api/user/${data.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          dob: data.dob,
          email: data.email,
          accountType: data.accountType,
        }),
      });
      if (response.status !== 200) {
        window.alert(result.message);
      } else window.alert("User updated successfully");
    } else {
      const response = await fetch(`/api/user/${data.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          dob: data.dob,
          accountType: data.accountType,
        }),
      });
      if (response.status !== 200) {
        window.alert(result.message);
      } else window.alert("User created successfully");
    }
  };

  return (
    <div>
      <form style={{ maxWidth: "480px", paddingLeft: 50 }}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter user email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            placeholder="Enter first name"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            className="form-control"
            placeholder="Enter last name"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <input
            className="form-control"
            placeholder="Enter date of birth in YYYY-MM-DD"
            name="dob"
            value={data.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Account Type</label>
          <input
            name="accountType"
            className="form-control"
            placeholder="Free/Paid"
            value={data.accountType}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
