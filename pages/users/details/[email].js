import React, { useContext } from "react";
import Context from "../../../contexts/selectedUser"
import styles from "../../../styles/UserDetails.module.css"
export default function UserDetails() {
  const [selectedUser] = useContext(Context);
  console.log(selectedUser)
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">
            <ul className="list-group">
              <li className="list-group-item"><span className={styles.field}>Id:</span>             {selectedUser._id}</li>
              <li className="list-group-item"><span className={styles.field}>First Name:</span>     {selectedUser.firstName}</li>
              <li className="list-group-item"><span className={styles.field}>Last Name: </span>     {selectedUser.lastName}</li>
              <li className="list-group-item"><span className={styles.field}>Email:  </span>        {selectedUser.email}</li>
              <li className="list-group-item"><span className={styles.field}>Date of birth:</span>  {selectedUser.dob}</li>
              <li className="list-group-item"><span className={styles.field}>Account Type: </span>  {selectedUser.accountType}</li>
              <li className="list-group-item"><span className={styles.field}>Last Active at:</span> {selectedUser.lastActive}</li>
              <li className="list-group-item"><span className={styles.field}>Created at:  </span>   {selectedUser.createdAt}</li>
              <li className="list-group-item"><span className={styles.field}>Updated at:</span>     {selectedUser.updatedAt}</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
