import React from "react";
import Form from "./Form";
import {useRouter} from "next/router"

export default function Modal(props) {
  const router = useRouter()
  return (
    <>
      <div
        className="modal modal-alert bg-secondary py-5"
        tabIndex="-1"
        role="dialog"
        id="myModal1"

      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content rounded-2 shadow" style={{paddingTop: 50, paddingRight: 50}}>
              <h3 style={{paddingLeft: 50}}>Edit User</h3>
            <Form user={props.user} edit={true}/>
            <div className="modal-footer flex-nowrap p-0">
              <button
                type="button"
                className="btn btn-lg btn-link fs-5 text-decoration-none col-2 m-2 rounded-0"
                data-bs-dismiss="modal"
                onClick={() => {router.push(props.path)}}
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
