import React from "react";

export default function Form() {
  return (
    <div>
      <form style={{ maxWidth: "480px", paddingLeft: 50 }}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            placeholder="Enter first name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            placeholder="Enter last name"
          />
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <input
            className="form-control"
            placeholder="Enter date of birth in YYYY-MM-DD"
          />
        </div>
        <div className="form-group">
          <label>Enter Account Type</label>
          <input
            className="form-control"
            placeholder="Free/Paid"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
