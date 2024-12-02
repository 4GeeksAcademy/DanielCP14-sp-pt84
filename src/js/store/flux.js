import EditContact from "../views/EditContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://playground.4geeks.com/contact/agendas/DanielCP/contacts")
					.then((response) => {
						if (!response.ok) {
							throw Error(response.statusText)
						}
						return response.json()
					})
					.then((data) => {
						setStore({ contacts: data.contacts })

					})
					.catch((err) => {
						console.error("Error en getContacts:", err);
						getActions().createAgenda(); // Solo si decides esta opción
					});
			},

			createAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/DanielCP", {
					method: "POST"
				})
					.then((response) => {
						if (!response.ok) throw Error(response.statusText)
					})

					.catch((err) => { err })
			},

			newContact: (contactData) => {
				fetch("https://playground.4geeks.com/contact/agendas/DanielCP/contacts", {
					method: "POST",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((response) => {
						if (!response.ok) throw Error(response.statusText)
					})

					.then(() => {
						console.log("Contacto agregado con éxito")
						getActions().getContacts()
					})

					.catch((err) => { err })
			},

			editContact: (contactData, idContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/DanielCP/contacts/${idContact}`, {
					method: "PUT",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((response) => {
						if (!response.ok) throw Error(response.statusText)
					})

					.then(() => {
						console.log("Contacto editado con éxito")
						getActions().getContacts()
					})

					.catch((err) => { err })
			},

			deleteContact: (idContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/DanielCP/contacts/${idContact}`, {
					method: "DELETE"
				})
					.then((response) => {
						if (response.ok) {
							console.log("Contacto borrado con éxito")
							getActions().getContacts()
						}
					})
					.catch(err => { err })
			}
		}
	};
};

export default getState;
