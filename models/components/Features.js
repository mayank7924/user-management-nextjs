import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <div>
      <div className="list-group">
        <Link href="/users">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List Users</h5>
              <small>List Users Tab</small>
            </div>
            <p className="mb-1">
              Using the tabular data present on the users tab you can view the
              details of all the Users present in the database. The table also
              gives you access to edit/delete actions.
            </p>
          </a>
        </Link>
        <Link href="/users/create">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Add a new User</h5>
              <small>Create User Tab</small>
            </div>
            <p className="mb-1">
              The user create form allows to create a new user document and add
              it to the database collection
            </p>
          </a>
        </Link>
        <Link href="/users/details/john@xyz.com">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">View User details</h5>
              <small>List Users Tab</small>
            </div>
            <p className="mb-1">
              If you click on the First name or Last Name of one of the user
              entries present on the List users tab you will be taken to the
              user details page
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
