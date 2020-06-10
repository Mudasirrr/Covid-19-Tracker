import React from 'react';

import styles from './Footer.module.css';



class Footer extends React.Component {
  render() {
    
    return (
      <div className={styles.container}>
			    	<br/>
			      <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="https://web.facebook.com/mudasir.hussain.1671897"><i className="fa fa-facebook"></i></a></li>

                  <li className="list-inline-item"><a href="hmudasir714@gmail.com"><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a href="hmudasir714@gmail.com"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
				    <br/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p className="h6">© All right Reversed.<a className="text-green ml-2" >Mudasir Hussain</a></p>
            </div>
          </div>
      </div>
    );
  };
}

export default Footer;