import React, { Component } from 'react';


const divStyle ={
  color:'red'
};

class Homepage extends Component {
  render(){
    return(
        <div style={divStyle}>
            Homepage content here
        </div>
    );
  }
}
export default Homepage;