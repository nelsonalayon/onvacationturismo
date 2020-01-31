import React from 'react'

class Tips extends React.Component {
    render() {
        return(

            
                <div className="row container">
                    {this.props.datos.map(
                        (item) => {
                            return(
                                 <div className="col s12 m4 hoverable">
                                    <div className="card grey lighten-5">
                                        <div className="card-content">
                                           
                                                      
                                                            <p>
                                                                {item}
                                                            </p>
                                                 
                                        </div>                        
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

export default Tips

