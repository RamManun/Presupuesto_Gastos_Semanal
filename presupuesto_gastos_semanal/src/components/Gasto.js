import React,{Component} from 'react';
import PropTypes from 'prop-types';

 class Gasto extends Component {

    render() {
        const  {cantidadGasto, nombreGasto} = this.props.gastos
        return (
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">$ {cantidadGasto}</span>
                </p>
            </li>
        );
    }
}
Gasto.propTypes = {
    gastos : PropTypes.object.isRequired
}

export default Gasto;