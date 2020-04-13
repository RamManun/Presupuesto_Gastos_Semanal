import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto'
import {validarPresupuesto} from '../helper'
  
class App extends Component {
  
  state={
    presupuesto : '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }
  obtenerPresupuesto = () => {
    let presupuesto = prompt('cual es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }else{
      this.obtenerPresupuesto();
    }
  }

  //Agregar in nuevo gasto al state
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};
    // agregar el gasto al state
    gastos[`gastos${Date.now()}`] = gasto;

    //restar el presupuesto

    this.restarPresupuesto(gasto.cantidadGasto);

    //Ponerlo en state
    this.setState({
        gastos
    })
  }

  // Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad =>{
    //leer el gasto
    let restar = Number(cantidad);

    //Tomar una copia del state actual
    let restante = this.state.restante;

    //lo restamos
    restante -= restar;

    restante= String(restante);

    //agregamos el nuevo state
    this.setState({
      restante
    })
  }

  render() {
    return (
      <div className="App container">
      <Header
        titulo='Gasto Semanal'
      />
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
            <Form
              agregarGasto = {this.agregarGasto}
            />
          </div>
          <div className="one-half column">
            <Listado
              gastos ={this.state.gastos}
            />
            <ControlPresupuesto
              presupuesto = {this.state.presupuesto}
              restante = {this.state.restante}
            />
          </div>
        </div>
      </div>
    </div>  
    );
  }
}
  
export default App;