import React, { useState, useContext } from 'react'
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"
import rigoImage from "../../img/rigo-baby.jpg";
import perfilImage from "../../img/foto.jpeg"
import { act } from 'react-dom/test-utils';


const styleImg = {
  width: "7em",
  margin: "1em",
  marginRight: "2em"
}

const contactCard = ({ name, email, phone, address, id }) => {
  const { store, actions } = useContext(Context)
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <div className="container-fluid">
      <div className="row border">
        <div className="col-10 d-flex" >
          <img src={perfilImage} className="rounded-circle" style={styleImg} alt="Foto perfil" />
          <div className="container mt-3">
            <h4>
              {name}
            </h4>
            <div className="row">
              <i className="fa-solid fa-location-dot mb-2 col-1" /><p className="ps-0 col-11">{address}</p>
            </div>
            <div className="row">
              <i className="fa-solid fa-phone col-1" /><p className="ps-0 col-11">{phone}</p>
            </div>
            <div className="row">
              <i className="fa-solid fa-envelope col-1 mb-3" /><p className="ps-0 col-11">{email}</p>
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end mt-4" >
          <Link to={`/edit-contact/${id}`}>
            <i className="fa-solid fa-pencil text-black fs-4" style={{ marginRight: "3vw" }}></i>
          </Link>
          <i type="button" className="fa-solid fa-trash fs-4" style={{ marginRight: "3vw" }} data-bs-toggle="modal" data-bs-target={`#modal-${id}`} />

          <div className="modal" id={`modal-${id}`}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Are you sure?</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>If you delete this thing the entire universe will go down!</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                  <button type="button" className="btn btn-primary" onClick={() => { actions.deleteContact(String(id)) }} data-bs-dismiss="modal">Yes Baby!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contactCard