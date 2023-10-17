import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Details from "./Details";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
	const [nameFilter, setnameFilter] = useState("");
	const [keyNumber, setkeyNumber] = useState("");
	const [openDetails, setopenDetails] = useState(false);
	const [showModal, setshowModal] = useState(false);
	const [users, setUser] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => setUser(json));
	}, []);
	const clickButton = (userid) => {
		setkeyNumber(userid);
		setopenDetails(true);
		setshowModal(true);
		console.log(keyNumber, "test");
	};
	const closeModal = () => {
		setshowModal(false);
	};

	return (
		<div class="">
			<div className="text-center my-5">
				<input id="inputFilter" value={nameFilter} placeholder="Search Contacts" onChange={(event) => setnameFilter(event.target.value)}></input>
			</div>
			<ListGroup className="w-25 mx-auto ">
				{users
					.filter((user) => user.name.toLowerCase().includes(nameFilter.toLowerCase()))
					.map((user) => (
						<ListGroup.Item key={user.id}>
							<Row>
								<Col> {user.name}</Col>

								<Col className="d-flex flex-row-reverse">
									<Button className="" onClick={() => clickButton(user.id)}>
										Open
										{/* {keyNumber === user.id ? <Details /> : ""} */}
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
			</ListGroup>
			{setshowModal && <Details show={showModal} userid={keyNumber} handleClose={closeModal} />}
		</div>
	);
};

export default Home;
