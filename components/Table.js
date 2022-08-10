import React, {useContext} from "react";
import {useRouter} from "next/router"
import Modal from "./Modal";
import Context from "../contexts/selectedUser"
import styles from "../styles/Table.module.css"

export default function Table(props) {
  const router = useRouter()

  const [selectedRow, selectRow] = useContext(Context)

  const handleRowClick = (user) => {
    selectRow(user); 
    router.push(`/users/details/${user.email}`)
  }

  const deleteUser = async (user) => {
    const result = await fetch(`/api/user/${user.email}`, { method: "DELETE" })
    if(result.status===200) {
      window.alert("User deleted successfully")
      router.push("/users")
    } else window.alert("Error deleting User")
  }

  return (
    <>
      <table className={`${styles.tableContainer} table table-striped `}>
        <thead>
          <tr>
            {props.columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.email}>
                    <td onClick={()=> {handleRowClick(item)}} style={{cursor: "pointer"}}>{item.firstName}</td>
                    <td onClick={()=> {handleRowClick(item)}} style={{cursor: "pointer"}}>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>
                      <button className="btn btn-danger" type="button" style={{marginRight: 20}} onClick={() => deleteUser(item)}>Delete User</button>
                      <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModal1" onClick={() => selectRow(item)}>Edit User</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
      <Modal user={selectedRow} path="/users"/>
    </>
  );
}
