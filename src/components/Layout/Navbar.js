import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav>
              <div className="nav-wrapper"style={{background:"#6200ee"}}>
                <Link to="/" className="brand-logo">Covid-19</Link>
                <ul className="right hide-on-med-and-down">
                    
                  <li><Link  to="/selcountry"className="waves-effect waves-light btn">Select Country</Link></li>
                  <li><Link  to="/chart"className="waves-effect waves-light btn-large">Global Record</Link></li>
                 
                </ul>
              </div>
            </nav>
          
        )
    }
}
