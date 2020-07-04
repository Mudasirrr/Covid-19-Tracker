import React, { Component } from 'react';
import image from '../../images/image2.png';

import styles from '../../App.module.css';

export default class Landing extends Component {
   

    render() {
        return (
            <div>
                {/* <h1>Landing</h1> */}
                
                <img  className={styles.image}src={image} alt="COVID-19" />
            </div>
        )
    }
}
