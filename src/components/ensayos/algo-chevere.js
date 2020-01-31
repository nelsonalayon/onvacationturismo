import React from 'react'

class OtroComponente extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.datos.value}</h1>
            <h3>{this.props.datos} </h3>
            {console.log(this.props.datos.valor)}
            </div>
            
        )
    }
}

export default OtroComponente