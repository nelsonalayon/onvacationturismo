import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

class TarjetaRick extends React.Component {
    render () {
        return(
            <div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={this.props.data.image}/>
          <span className="card-title">{this.props.data.name}</span>
        </div>
        <div className="card-content">
          <p>{this.props.data.status}</p>
        </div>
        <div className="card-action">
          <a href={this.props.data.url} target="blank">Link</a>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

export default TarjetaRick