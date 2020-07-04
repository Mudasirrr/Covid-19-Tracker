import React, { Component } from 'react';

export default class Footer extends Component {
   

    render() {
        return (
            <div>
            <footer className="page-footer"style={{background:"#6200ee"}}>
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                      <h5>
                  <a className="grey-text text-lighten-4 right"  style={{background:"Red"}}href="https://web.facebook.com/ziakhan.edu/">Special Thanks to Sir Zia Khan,Sir Zeeshan and Sir Adils</a></h5>
                    <h5 className="white-text">Covid-19</h5>
                    <p className="grey-text text-lighten-4">Coronavirus disease 2019 (COVID-19) is defined as illness caused by a novel coronavirus now called severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2; formerly called 2019-nCoV), which was first identified amid an outbreak of respiratory illness cases in Wuhan City, Hubei Province, China.</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li><a className="grey-text text-lighten-3" href="https://web.facebook.com/mudasir.hussain.1671897/">Facebook</a></li>
                      <li><a className="grey-text text-lighten-3" href="https://github.com/Mudasirrr">Github</a></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2020 Mudasir Hussain
                <a className="grey-text text-lighten-4 right" href="https://web.facebook.com/ziakhan.edu/">Special Thanks to Sir Zia Khan,Sir Zeeshan and Sir Adils</a>
                </div>
              </div>
            </footer>
            </div>
        )
    }
}
