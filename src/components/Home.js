import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home-div'>
        <div>
          <h3>Koulutus<img src={require('../assets/koulutus.png')} alt='' className='home' /></h3>
          <h5>Filosofian maisteri, pääaine: Computational Big Data Analytics<br></br> </h5>
          <p>Tampereen yliopisto | 2019 - </p>
          <hr className='thin'></hr>
          <h5>Luonnontieteiden kandidaatti, pääaine: Tietojenkäsittelytiede<br></br> </h5>
          <p>Sivuaine: Psykologia<br></br>
          Oulun yliopisto | 2015 - 2019<br></br> </p>
          <hr className='thin'></hr>
          <h5>Ylioppilas<br></br></h5>
          <p>Madetojan musiikkilukio, Oulu | 2011 - 2014</p>
          <hr></hr>

          <h3>Työkokemus<img src={require('../assets/tyo.png')} alt='' className='home' /></h3>
          <h5>Ohjelmistokehittäjä/suunnittelija</h5>
          <p>eSend Finland Oy. Tampere | 06/2020 - </p>
            <h4>Aloitin tehtäväni uusien toiminnallisuuksien visuaalisena suunnittelijana. Myöhemmin siirryin
              monipuolisiin ohjelmoinnin tehtäviin, sekä front-, että backend puolella.</h4>
          <h4>Sain kokemusta vastuullisesta ja itsenäisestä toiminallisuuksien kehittämisestä alusta loppuun.</h4>
          <hr className='thin'></hr>
          <h5>Ohjelmistokehittäjäharjoittelija</h5>
          <p>Tuudo Oy. Oulu | 06/2019 - 08/2019</p>
            <h4>Ohjelmistokehittäjän tehtävissä toimin osana ketterää ohjelmistokehitystiimiä,
            jossa osallistuin sekä asiakas-, että palvelinpuolen kehitykseen.</h4>
          <h4>Tehtävässäni sain kokemusta uuden ominaisuuden vaatimusmäärittelystä, suunnittelusta ja toteutuksesta.</h4>
          <hr className='thin'></hr>
          <h5>Myyntineuvottelija</h5>
          <p>Tuudo Oy. Oulu | 10/2018 - 05/2019</p>
            <h4>Työskentelin työnantajapalveluiden B2B myyntitehtävissä, jossa hoidin asiakassuhteita sähköisten viestintävälineiden kautta ja kasvotusten.</h4>
          <h4>Tehtäviini kuului myös asiakkaiden analytiikan kerääminen ja toimittaminen.</h4>
          <hr className='thin'></hr>
          <h5>Hautuumaatyöntekijä</h5>
          <p>Paimion seurakunta. Paimio | 8/2017 - 9/2017</p>
            <h4>Kausiluonteista puutarha- ja hautuumaan hoitotyötä.</h4>
          <hr></hr>

          <h3>Kurssit ja projektit <img src={require('../assets/kurssi.png')} alt='' className='home' /></h3>
          <h5>Project work -kurssi</h5>
          <p>Oulun yliopisto, Tuotantotalouden yksikkö. | 1/2019 - 5/2019</p>
            <h4>Kandidaatin tutkintoon kuuluva kurssi, jossa työskentelin osana 4-hengen ryhmää.
            Tehtävämme oli kehittää opetuskäyttöön tarkoitettuun peliin helppokäyttöinen kenttäeditori.</h4>
          <h4>Vastuualueinani olivat käyttöliittymäsuunnittelu ja -ohjelmointi, sekä käyttäjätestausten järjestäminen ja dokumentointi.</h4>
          <hr className='thin'></hr>
          <h5>Demola 'Teatria Backstage' projekti</h5>
          <p>Demola Global Oy, Teatria Oy. Oulu | 3/2018 - 6/2018</p>
            <h4>Työskentelin osana kansainvälistä ja monitieteellistä 6-hengen opiskelijaryhmää. Tehtävämme oli keksiä tapoja hyödyntää
            liiketoiminnassa muodostuvaa dataa markkinoinnin parantamiseksi.</h4>
          <h4>Projektikumppanimme lisensoi projektimme tulosraportin.</h4>
          <hr></hr>

          <h3>Kielitaito:<img src={require('../assets/lang.png')} alt='' className='home'/></h3>
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
