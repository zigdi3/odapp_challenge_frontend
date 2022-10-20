import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardPaciente from "./components/card-paciente";
import Axios from "axios";
const { REACT_APP_API_URI } = process.env;


function App() {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {

    const { data } = await Axios.get(REACT_APP_API_URI + 'paciente/encontrar')
    console.log("Response:", data)
    const details = data.data


    setDetails(details);

  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">

      <Row>
        <Col md={4} className="offset-md-4 mt-4" />
        <ul><CardPaciente details={details} /></ul>
      </Row>
    </Container>
  );
}

export default App;
