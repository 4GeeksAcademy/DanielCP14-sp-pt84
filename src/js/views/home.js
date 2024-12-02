import React, { useContext } from "react";
import { Link } from "react-router-dom"
import ContactCard from "../component/ContactCard";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context)
	const contacts = store.contacts

	return (
		<div className="container-fluid pt-2">
			{contacts.length === 0 ? (
				<div className="container text-center mt-5">
					<i className="fas fa-address-book fa-5x mb-4 text-muted"></i>
					<h1 className="text-muted">No contacts found</h1>
					<p className="text-muted">Your contact list is empty, start adding now!</p>
					<Link to={"/new-contact"}>
						<button type="button" className="btn btn-success btn-sm">Add Contact</button>
					</Link>
				</div>

			) : (
				<>
					<div className="d-flex justify-content-end my-2">
						<Link to={"/new-contact"}>
							<button type="button" className="btn btn-success btn-sm">Add new Contact</button>
						</Link>
					</div>
					{contacts.map((contact, index) => {
						return (
							<ContactCard
								key={index}
								name={contact.name}
								email={contact.email}
								phone={contact.phone}
								address={contact.address}
								id={contact.id}
							/>
						)
					})}
				</>)}
		</div>
	)
};

export default Home