import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Form extends Component {

    //refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    handleSubmit = (e) => {
        // Prevenir el default
            e.preventDefault();
        // crear el objeto con los datos
            const gasto = {
                nombreGasto : this.nombreGasto.current.value,
                cantidadGasto : this.cantidadGasto.current.value
            }
        // agregarlo y enviarlo por props
            this.props.agregarGasto(gasto)
        // resetear el formulario(opcional)
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Agrega tus gastos aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" ref={this.nombreGasto} type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                     <input className="u-full-width" type="text" ref={this.cantidadGasto} placeholder="Ej. 300" />
                </div>

                    <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

Form.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Form;