import React, {useState, useEffect} from "react";
import Table from "../../components/Table";
const createConnection = require("../../src/dbConnection");
const User = require("../../models/user");

const columns = [
  "First Name",
  "Last Name",
  "Email",
  "Date of birth",
  "Actions",
];

export default function Users(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(props.users)
  }, [props.users])

  return (
      <div>
        {process.env.DATABASE_USER}
        <Table columns={columns} data={users}/>
      </div>
  );
}

export async function getServerSideProps() {
  console.log(process.env.DATABASE_USER)
  await createConnection();
  const users = await User.find();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    }
  }
}
