import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Footer extends Component {
  render(){
    return(
        <footer style={{height:'200px'}}>
            <div className="footerFluid">
              <p style={{marginTop: '40px',paddingTop: '30px',color:'lightgreen',fontWeight:'bold',fontSize:'120%',textShadow:'0 0 2px black'}}>MountainCliff is everywhere you want to camp.</p>
              <div id="divFooter">
                <p style={{color:'white',fontWeight:'bold',textShadow:'0 0 2px black'}}>
                Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S.
                </p>
                <Button variant="btn btn-success btn-sm" style={{marginTop:'5px',marginBottom:'10px'}}>Climb the Mountain</Button>
              </div>
            </div>
        </footer>
    );
  }
}
export default Footer;