import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Details = ({ show, handleClose, userid }) => {
	const [users, setUser] = useState([]);
	const [closeModal, setcloseModal] = useState(show);

	console.log(closeModal);
	console.log(userid);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users?id=${userid}`)
			.then((response) => response.json())
			.then((json) => setUser(json));
	}, [userid]);

	return (
		<div>
			{users.map((details) => (
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{details.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{details.username}</Modal.Body>
					<Modal.Body>{details.email}</Modal.Body>
					<Modal.Body>
						{details.address.street} {details.address.suite} {details.address.city} {details.address.zipcode}
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={handleClose}>Close </Button>
					</Modal.Footer>
				</Modal>
			))}
		</div>
	);
};

export default Details;
