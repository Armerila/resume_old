import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home-div'>
        <div>
          <h3>Koulutus<img src={require('../assets/koulutus.png')} className='home' /></h3>
          <h5>Filosofian maisteri, pääaine: Computational Big Data Analytics<br></br> </h5>
          Tampereen yliopisto | 2019 - <br></br>
          <h5>Luonnontieteiden kandidaatti, pääaine: Tietojenkäsittelytiede<br></br> Sivuaine: psykologia<br></br></h5>
          Oulun yliopisto | 2015 - 2019<br></br>
          <h5>Ylioppilas<br></br></h5>
          Madetojan musiikkilukio, Oulu | 2011 - 2014
          <hr></hr>

          <h3>Työkokemus<img src={require('../assets/tyo.png')} className='home' /></h3>
          <h5>Ohjelmistokehittäjäharjoittelija</h5>
          Tuudo Oy. Oulu | 06/2019 - 08/2019
            <h4>Ohjelmistokehittäjän tehtävissä toimin osana ketterää ohjelmistokehitystiimiä,
            jossa osallistuin sekä asiakas-, että palvelinpuolen kehitykseen.</h4>
          <h4>Tehtävässäni sain kokemusta uuden ominaisuuden vaatimusmäärittelystä, suunnittelusta ja toteutuksesta.</h4>
          <hr className='thin'></hr>
          <h5>Myyntineuvottelija</h5>
          Tuudo Oy. Oulu | 10/2018 - 05/2019
            <h4>Työskentelin työnantajapalveluiden B2B myyntitehtävissä, jossa hoidin asiakassuhteita sähköisten viestintävälineiden kautta ja kasvotusten.</h4>
          <h4>Tehtäviini kuului myös asiakkaiden analytiikan kerääminen ja toimittaminen.</h4>
          <hr className='thin'></hr>
          <h5>Hautuumaatyöntekijä</h5>
          Paimion seurakunta. Paimio | 8/2017 - 9/2017
            <h4>Kausiluonteista puutarha- ja hautuumaan hoitotyötä.</h4>
          <hr className='thin'></hr>
          <h5>Myyntineuvottelija</h5>
          Sanoma Media Finland Oy. Oulu | 9/2014 - 12/2014 ja 10/2013 - 12/2013
            <h4>Aikakaus- ja erikoislehtien myynti projekteittain yksityistalouksiin.</h4>
          <hr></hr>

          <h3>Kurssit ja projektit <img src={require('../assets/kurssi.png')} className='home' /></h3>
          <h5>Project work -kurssi</h5>
          Oulun yliopisto, Tuotantotalouden yksikkö. | 1/2019 - 5/2019
            <h4>Kandidaatin tutkintoon kuuluva kurssi, jossa työskentelin osana 4-hengen ryhmää.
            Tehtävämme oli kehittää opetuskäyttöön tarkoitettuun peliin helppokäyttöinen kenttäeditori.</h4>
          <h4>Vastuualueinani olivat käyttöliittymäsuunnittelu- ja ohjelmointi, sekä käyttäjätestausten järjestäminen ja dokumentointi.</h4>
          <hr className='thin'></hr>
          <h5>Demola 'Teatria Backstage' projekti</h5>
          Demola Global Oy, Teatria Oy. Oulu | 3/2018 - 6/2018
            <h4>Työskentelin osana kansainvälistä ja monitieteellistä 6-hengen opiskelijaryhmää. Tehtävämme oli keksiä tapoja hyödyntää
            liiketoiminnassa muodostuvaa dataa markkinoinnin parantamiseksi.</h4>
          <h4>Projektikumppanimme lisensoi projektimme tulosraportin.</h4>
          <hr></hr>

          <h3>Kielitaito:<img src={require('../assets/lang.png')} className='home'/></h3>
          <p><b>Suomi -</b> Äidinkieli <br></br>
            <b>Englanti -</b> Erinomainen <br></br>
            <b>Ruotsi -</b> Perusteet
          </p>
        </div>
      </div>
    )
  }
}
export default Home;
