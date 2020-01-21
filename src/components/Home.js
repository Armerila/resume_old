import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className='home-div'>
                <div className='home-p'>
                    <h3 className= 'tabbed'>Koulutus</h3>
                    <p className='tabbed'>
                        <b>Filosofian maisteri, Computational Big Data Analytics | 2019 -</b>
                        <b>Luonnontieteiden kandidaatti, tietojenkäsittelytiede | 2015 - 2019</b>
                        <img src={require('../assets/uni_oulu.png')} className='home'></img><br></br>
                    <b>Ylioppilas | 2011 - 2014</b><br></br>
                    Madetojan musiikkilukio, Oulu</p>
                    <h3>Työkokemus</h3>
                    <h3>Kielitaito:</h3>
                    <p><b>Suomi -</b> Äidinkieli <br></br>
                        <b>Englanti -</b> Erinomainen <br></br>
                        <b>Ruotsi -</b> Perusteet</p>
                </div>
            </div>
        )
    }
}
export default Home;
