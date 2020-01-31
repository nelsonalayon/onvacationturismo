import React from 'react'

class ComponentePrueba extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.datos}</h1>

                <h2>aca van unos datos</h2>
            
                <p>y aqui van los otros</p>
            </div>
            
        )
    }
}

export default ComponentePrueba