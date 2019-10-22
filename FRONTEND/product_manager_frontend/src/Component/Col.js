import React, { Component } from 'react';

class Col extends Component {
    render() {
        return (
            <div className="col-4">
            <div className="card mb-4">
              <img className="card-img-top img-fluid" src={this.props.image} alt="" />
              <div className="card-body">
                <h5 className="card-title float-left">{this.props.name}</h5>
                <h5 className="card-title float-right">{this.props.price}</h5>  
              </div>
            </div>
          </div>
          
          
        );
    }
}

export default Col;