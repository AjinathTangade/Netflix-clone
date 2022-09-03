import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
import Row from './Row';
import requests from './Requests';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/*Navbar*/}
        <Nav /> 

        {/*Banner*/}
        <Banner />

        {/*Rows*/}

        <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movices" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movices" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movices" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movices" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />     
    </div>
  )
}

export default HomeScreen;
