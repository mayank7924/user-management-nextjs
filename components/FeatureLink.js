import React from "react";
import Link from "next/link";

export default function FeatureLink(props) {
  return (
    <Link href={props.href}>
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.header}</h5>
          <small>{props.tab}</small>
        </div>
        <p className="mb-1">{props.description}</p>
      </a>
    </Link>
  );
}
