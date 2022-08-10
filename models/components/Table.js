import React from "react";
import Form from "./Form"
import {useRouter} from "next/router"

export default function Table() {
    const router = useRouter()
    return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Last Active</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td  onClick={ ()=> {router.push("/users/details/1")}}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>2016-05-18</td>
            <td>2022-07-23T10:13:16</td>
            <td>2022-07-23T10:13:16</td>
            <td>
            <button
                style={{marginRight: 20}}
                type="button"
                className="btn btn-primary"
              >
                Delete User
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal1"
                className="btn btn-primary"
              >
                Edit user
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        className="modal modal-alert bg-secondary py-5"
        tabIndex="-1"
        role="dialog"
        id="myModal1"

      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content rounded-2 shadow" style={{paddingTop: 50, paddingRight: 50}}>
              <h3 style={{paddingLeft: 50}}>Edit User</h3>
            <Form/>
            <div className="modal-footer flex-nowrap p-0">
              <button
                type="button"
                className="btn btn-lg btn-link fs-5 text-decoration-none col-2 m-2 rounded-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
