import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


// import Footer from './components/footer/Footer';

import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Footer from './components/Layout/Footer';

import {BrowserRouter,Route} from 'react-router-dom';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <BrowserRouter>
      
      {/* <div className={styles.container}> */}
        
      <Navbar/>

      <Route exact path='/' component={Landing}></Route>
      <Route path='/chart'>
      <Chart data={data} country={country} /> 
      
              <h1 className={styles.header2} >---------------------------------------------</h1>
              <Cards data={data} /> 
      </Route>
      <Route  path='/selcountry' >
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country} /> 
      
      <Cards data={data} />
      </Route>
      <Route  path='/card' component={Cards}></Route>
      {/* <Landing/> */}
       
        {/* <h1 className={styles.header1}>Welcome to the Covid-19 Tracker <br/> Here You Can check the Updated result of Covid-19</h1> */}

              {/* <CountryPicker handleCountryChange={this.handleCountryChange} />
              <h1 className={styles.header2} ></h1>
              <Cards data={data} />
              <h1 className={styles.header1}></h1> */}


        {/* <Footer/> */}
        
      <Footer/>
      </BrowserRouter>


    );
  }
}

export default App;