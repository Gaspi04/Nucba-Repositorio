import React from "react";
import { Add, Delete, Deleteall } from "./components/button.style";
import { List, Tarea, Span } from "./components/list.style";
import { Contenedor, Title, Header, Input } from "./components/cont.style";

function App() {
  return (
    <>
      <Contenedor>
        <Title>Nucbatask</Title>
        <Header>
          <Input type="text" placeholder="¿Que tarea desea agregar?" />
          <Add>Añadir</Add>
        </Header>
        <List>
          <Tarea>
            <Span>Tarea1</Span>
            <Delete>Borrar</Delete>
          </Tarea>
          <Tarea>
            <Span>Tarea2</Span>
            <Delete>Borrar</Delete>
          </Tarea>
        </List>
        <Deleteall>Borrar todo</Deleteall>
      </Contenedor>
    </>
  );
}

export default App;
