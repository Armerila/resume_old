import React from 'react';


class Sidebar extends React.Component {
 
      render() {
        return (
          <div className='sidebar'>
            <div>
              <img src={require('../assets/omakuva.jpg')} className='rounded' />
            </div>
            <div className='sidebar-p'>
              <h1>Arttu Meriläinen</h1>
              <h2>Junior ohjelmistokehittäjä</h2>
              <h3>Profiili </h3>
              <h4>Olen 24-vuotias uraani aloitteleva ohjelmistokehittäjä.
              Olen kiinnostunut etenkin web-kehittämisestä ja suunnittelusta,
              sekä datan hyödyntämisestä ja visualisoinnista.</h4>
              <h4>Minulla on kokemusta sekä front- että back-end ohjelmoinnista.
              Opinnoissani olen myös tutustunut erilaisiin data-analyysimenetelmiin ja työkaluihin.
              </h4>
              <h3>Yhteystiedot</h3>
              <p>
                Lapintie 32 D 34<br></br>
                33100 TAMPERE<br></br>
                0443020596<br></br>
                <a href='mailto:arttu.merilainen@tuni.fi'>arttu.merilainen@tuni.fi</a><br></br>
                Syntynyt 02.05.1995 Oulussa<br></br>
                <a href='https://www.linkedin.com/in/armerila/'>
                  <img src={require('../assets/LI-Logo.png')} className='small' />
                </a><br></br>
                <a href='https://github.com/Armerila'>
                  <img src={require('../assets/GitHub_Logo.png')} className='small' />
                </a>
              </p>
            </div>
          </div>
        )
      }
    }
      


export default Sidebar;