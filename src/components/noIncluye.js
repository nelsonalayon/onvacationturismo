import React from 'react' 
import './que-incluye.css'

class NoIncluye extends React.Component {
    render (){
        return(
            <div>
                <h3 className="container">No incluye</h3>

                {
                    this.props.datos.PrincessNoIncluye.map(
                        (noIncluido) => {
                            return(
                                <div className="container-noincluye">
                                    
                                    <div>
                                        <i className="material-icons col s12 l2 red-text center-align advertencia">announcement</i>
                                    </div>
                                    <div>
                                        <p>
                                            {noIncluido.titulo}
                                        </p>
                                    </div>
                                </div>

                            )
                        }
                    )
                }
               
	        </div>
        )
    }
}

export default NoIncluye