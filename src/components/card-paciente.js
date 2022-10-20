import React from "react";
import { Card, CardBody } from "reactstrap";

const CardPaciente = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-left">



        <li>{details.map((i) => {
          return <p>{i.nome}, {i.idade}, {i.cidade}, {i.estado}, {i.dataCadastro}
          </p>
        })}</li>



      </CardBody>
    </Card>
  )
}
export default CardPaciente;