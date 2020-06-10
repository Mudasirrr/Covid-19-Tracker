import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.jpeg';
import Footer from './components/footer/Footer';


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
      
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <h1 className={styles.header1}>Welcome to the Covid-19 Tracker <br/> Here You Can check the Updated result of Covid-19</h1>

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <h1 className={styles.header2} >Here You can check the Result!</h1>
        <Cards data={data} />
        <h1 className={styles.header1}>Here ou can check chart</h1>

        <Chart data={data} country={country} /> 

        <Footer/>
      </div>
    );
  }
}

export default App;