import './Carousel.scss';
import React, {PropTypes, Component} from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import CustomMap from '../CustomMap.js';

class PageThree extends Component {

  constructor(props) {
    super(props);
  }
   
   render() {
      return (
         <div className="">
         	<div className="bodydiv">
	            <div className="bikeimg">
                  <img style={{margin: 'auto', height: '100'+'%'}} src="./images/Drop/Address_icon.png"/>
               </div>
	            <div className="contactLetter">Your contact details</div>
	            <div className="inputThdiv">
                  <FormGroup>
                     <FormControl className="inputThElement ph_name_icon" type="text" placeholder="Your name" />
                     <FormControl className="inputThElement ph_moblie_icon" type="number" placeholder="Your mobile number" />
                     
                  </FormGroup>

               </div>
               <div className="mapDiv">
                  <CustomMap/>
               </div>

	         </div>
            <a href="MainView"><div className="bottomButton">Done</div></a>
         </div>
      );
   }
}

export default PageThree;
