import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom"

const NewContact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleChange = (e) => {
        //e => evento, cambio en un input
        //name => name del input, value => valor introducido por el usuario
        const { name, value } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    const checkData = () => {
        if (contactData.name !== "" && contactData.email !== "" && contactData.phone !== "" && contactData.address !== "") {
            actions.newContact(contactData)
            navigate("/")
        } else {
            setError("All fields are required. Please complete all fields.")
        }
    }

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-3">Add a new contact</h1>
            <div>
                <p>Full Name</p>
                <input type="text" name="name" className="form-control" placeholder="Full Name" value={contactData.name} onChange={handleChange} />
                <p>Email</p>
                <input type="text" name="email" className="form-control" placeholder="Email" value={contactData.email} onChange={handleChange} />
                <p>Phone</p>
                <input type="text" name="phone" className="form-control" placeholder="Phone" value={contactData.phone} onChange={handleChange} />
                <p>Address</p>
                <input type="text" name="address" className="form-control" placeholder="Address" value={contactData.address} onChange={handleChange} />

                <div className="text-danger mt-2">{error}</div>

                <div className=" d-grid">
                    <button className="btn btn-primary mt-3" onClick={checkData}>Save</button>
                </div>
            </div>
            <Link to={"/"}>
                <p>or get back to contact</p>
            </Link>
        </div>
    )
}

export default NewContact