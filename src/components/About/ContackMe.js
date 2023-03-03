import React, { Component } from 'react';
import Map from './Map';
import '../../styles/ContactMe.css';

class ContactMe extends Component{
    render(){
        return(
            <div>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                <h1 aria-label=" Contact me" className="blast-root"> 
                </h1>
                <div className="contact-form">
                </div>
                </div>
               <div className="map-wrap">
                    <Map></Map>
                </div>
            </div>
        );
    }
}


export default ContactMe;