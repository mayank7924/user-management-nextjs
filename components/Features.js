import React from "react";
import Link from "next/link";
import FeatureLink from "./FeatureLink";

export default function Features() {
  return (
    <div>
      <div className="list-group">
          <FeatureLink href="/users" header="List Users" tab="List Users Tab" description="Using the tabular data present on the users tab you can view the
              details of all the Users present in the database. The table also
              gives you access to edit/delete actions."/>
          <FeatureLink href="/users/create" header="Add a new User" tab="Create User Tab" description="The user create form allows to create a new user document and add
              it to the database collection"/>
          <FeatureLink href="/users/details/jane@xyz.com" header="View User details" tab="List Users Tab" description="If you click on the First name or Last Name of one of the user
              entries present on the List users tab you will be taken to the
              user details page"/>
      </div>
    </div>
  );
}
