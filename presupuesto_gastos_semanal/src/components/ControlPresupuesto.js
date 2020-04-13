import React,{Component, Fragment} from 'react';
import Presupuesto from './Presupuesto'
import Restante from './Restante'
import PropTypes from 'prop-types';

 class ControlPresupuesto extends Component {
    render() {
        return (
            <Fragment>
                <Presupuesto
                    presupuesto = {this.props.presupuesto}
                />
                <Restante
                    restante = {this.props.restante}
                />
            </Fragment>
        );
    }
}
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default ControlPresupuesto;