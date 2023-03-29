import React, {useState} from 'react';
import {Container, ContainerWrapper} from "@dathaplus/storybook";
import axios from "axios";

const Factura = () => {

  const [listaCatalogo, setListaCatalogo] = useState([]);

  const llamadaEndpoint = () => {
    console.log('HOLA GASTBY');
    //axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(res => {
    axios.get('http://localhost:3000/dev/catalogo').then(res => {
      let catalogo = res.data;
      let productos = catalogo.productos;
      let precio = productos[0].precio;
      console.log('RES: ',res.data);
      console.log('Productos: ',productos);
      console.log('Precio: ',precio);

      setListaCatalogo(productos);

    }).catch(console.log)
  }

  const listaCatalogoVer = () => {
    console.log('LISTADO: ',listaCatalogo[0].precio);
    let datitos = listaCatalogo.map(equipo => equipo.id +' '+equipo.precio +' '+equipo.equipo+' '+equipo.caracteristicas);
    console.log('datitos: ',datitos);
    console.log('lista catalogo: ',listaCatalogo);
  }

  const [texto, setTexto] = useState('initState');

  const handleInput = ({target}) => {
    setTexto(target.value);
  }

  return (
    <div>
      <ContainerWrapper>
        <Container>
          <label> ID Productos: <input placeholder={'Ingrese Id'}/></label>
          <label> Descuento: <input placeholder={'Ingrese descuento'}/></label>
        </Container>

        <Container>
          <button onClick= {llamadaEndpoint} >Facturar</button>
        </Container>

        <Container>
          <button onClick= {listaCatalogoVer} >Ver Catálogo</button>
          <label>{listaCatalogo}</label>
        </Container>
      </ContainerWrapper>
    </div>
  );
};

export default Factura;
