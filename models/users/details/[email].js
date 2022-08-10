import React from "react";

export default function UserDetails() {
  return (
    <div>
      <div className="card" style={{ marginLeft: 40, width: "60rem" }}>
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </p>
          <a href="#" className="btn btn-primary">
            Back to list
          </a>
        </div>
      </div>
    </div>
  );
}
