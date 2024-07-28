import React from 'react';
import koulutusImg from '../assets/koulutus.png';
import tyoImg from '../assets/tyo.png';
import kurssiImg from '../assets/kurssi.png';
import langImg from '../assets/lang.png';

const Home = ({language}) => {
  return (
    <div className='home-div'>
      {language === 'finnish' ? (
        <div>
          <h3>Koulutus<img src={require('../assets/koulutus.png')} alt='' className='home' /></h3>
          <h5>Filosofian maisteri, pääaine: Software, Web &amp; Cloud<br></br> </h5>
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
          <h5>Ohjelmistokehittäjä</h5>
          <p>Insta Advance Oy. Tampere | 01/2022 - </p>
          <h4>Ohjelmistokehitystehtäviä niin front- kuin backendpuolella vaihtelevissa asiakasprojekteissa konsultoiden</h4>
          <h5>Ohjelmistokehittäjä/suunnittelija</h5>
          <p>eSend Finland Oy. Tampere | 06/2020 - 12/2021</p>
          <h4>Aloitin tehtäväni uusien toiminnallisuuksien visuaalisena suunnittelijana. Myöhemmin siirryin
            monipuolisiin ohjelmoinnin tehtäviin, sekä front-, että backend puolella.</h4>
          <h4>Sain kokemusta vastuullisesta ja itsenäisestä toiminallisuuksien kehittämisestä alusta loppuun.</h4>
          <h4>React+TypeScript, AWS, Figma</h4>
          <hr className='thin'></hr>
          <h5>Ohjelmistokehittäjäharjoittelija</h5>
          <p>Tuudo Oy. Oulu | 06/2019 - 08/2019</p>
          <h4>Ohjelmistokehittäjän tehtävissä toimin osana ketterää ohjelmistokehitystiimiä,
            jossa osallistuin sekä asiakas-, että palvelinpuolen kehitykseen.</h4>
          <h4>Tehtävässäni sain kokemusta uuden ominaisuuden vaatimusmäärittelystä, suunnittelusta ja toteutuksesta.</h4>
          <h4>React, Express.js, MongoDB</h4>
          <hr className='thin'></hr>
          <h5>Myyntineuvottelija</h5>
          <p>Tuudo Oy. Oulu | 10/2018 - 05/2019</p>
          <h4>Työskentelin työnantajapalveluiden B2B myyntitehtävissä, joissa hoidin asiakassuhteita sähköisten viestintävälineiden kautta ja kasvotusten.</h4>
          <h4>Tehtäviini kuului myös asiakkaiden analytiikan kerääminen ja toimittaminen.</h4>
          <hr></hr>

          <h3>Kurssit ja projektit <img src={require('../assets/kurssi.png')} alt='' className='home' /></h3>
          <h5>Software Engineering Project -kurssi</h5>
          <p>Tampereen yliopisto, Huld Oy. Tampere | 9/2021 - 12/2021</p>
          <h4>Maisterin tutkintoon kuuluva kurssi, jossa työskentelin osana 6-hengen ryhmää.
            Tehtävämme oli kehittää Approtapahtumille digitaalinen appropassi mobiili- ja hallintasovellus.</h4>
          <h4>Vastuualueinani olivat käyttöliittymäsuunnittelu ja -ohjelmointi, sekä junior kehittäjien opastus</h4>
          <h4>Figma, React+Typescript, React Native, Apollo GraphQL, PostgreSQL</h4>
          <hr className='thin'></hr>
          <h5>Project work -kurssi</h5>
          <p>Oulun yliopisto, Tuotantotalouden yksikkö. | 1/2019 - 5/2019</p>
          <h4>Kandidaatin tutkintoon kuuluva kurssi, jossa työskentelin osana 4-hengen ryhmää.
            Tehtävämme oli kehittää opetuskäyttöön tarkoitettuun peliin helppokäyttöinen kenttäeditori.</h4>
          <h4>Vastuualueinani olivat käyttöliittymäsuunnittelu ja -ohjelmointi, sekä käyttäjätestausten järjestäminen ja dokumentointi.</h4>
          <h4>PixiJS, JavaScript, Node.js</h4>
          <hr className='thin'></hr>
          <h5>Demola 'Teatria Backstage' projekti</h5>
          <p>Demola Global Oy, Teatria Oy. Oulu | 3/2018 - 6/2018</p>
          <h4>Työskentelin osana kansainvälistä ja monitieteellistä 6-hengen opiskelijaryhmää. Tehtävämme oli keksiä tapoja hyödyntää
            liiketoiminnassa muodostuvaa dataa markkinoinnin parantamiseksi.</h4>
          <h4>Projektikumppanimme lisensoi projektimme tulosraportin.</h4>
          <hr></hr>

          <h3>Kielitaito:<img src={require('../assets/lang.png')} alt='' className='home' /></h3>
          <p><b>Suomi -</b> Äidinkieli <br></br>
            <b>Englanti -</b> Erinomainen <br></br>
            <b>Ruotsi -</b> Perusteet
          </p>
        </div>
      ) : (
        <div>
          <h3>Education<img src={koulutusImg} alt='' className='home' /></h3>
          <h5>Master of Science, major: Software, Web &amp; Cloud<br></br> </h5>
          <p>Tampere University | 2019 - </p>
          <hr className='thin'></hr>
          <h5>Bachelor of Science, major: Computer Science<br></br> </h5>
          <p>Minor: Psychology<br></br>
            University of Oulu | 2015 - 2019<br></br> </p>
          <hr className='thin'></hr>
          <h5>High School Graduate<br></br></h5>
          <p>Madetoja Music High School, Oulu | 2011 - 2014</p>
          <hr></hr>

          <h3>Work Experience<img src={tyoImg} alt='' className='home' /></h3>
          <h5>Software Developer</h5>
          <p>Insta Advance Oy. Tampere | 01/2022 - </p>
          <h4>Software development tasks on both front and backend in various client projects as a consultant</h4>
          <h5>Software Developer/Designer</h5>
          <p>eSend Finland Oy. Tampere | 06/2020 - 12/2021</p>
          <h4>I started as a visual designer for new functionalities. Later, I transitioned to diverse programming tasks, both front and backend.</h4>
          <h4>I gained experience in responsible and independent development of functionalities from start to finish.</h4>
          <h4>React+TypeScript, AWS, Figma</h4>
          <hr className='thin'></hr>
          <h5>Software Developer Intern</h5>
          <p>Tuudo Oy. Oulu | 06/2019 - 08/2019</p>
          <h4>As a software developer, I worked as part of an agile software development team, participating in both client-side and server-side development.</h4>
          <h4>In this role, I gained experience in requirement specification, design, and implementation of new features.</h4>
          <h4>React, Express.js, MongoDB</h4>
          <hr className='thin'></hr>
          <h5>Sales Negotiator</h5>
          <p>Tuudo Oy. Oulu | 10/2018 - 05/2019</p>
          <h4>I worked in B2B sales tasks for employer services, managing customer relationships through electronic communication and face-to-face meetings.</h4>
          <h4>My tasks also included collecting and delivering customer analytics.</h4>
          <hr></hr>

          <h3>Courses and Projects <img src={kurssiImg} alt='' className='home' /></h3>
          <h5>Software Engineering Project course</h5>
          <p>Tampere University, Huld Oy. Tampere | 9/2021 - 12/2021</p>
          <h4>A master's degree course where I worked as part of a 6-person team.
            Our task was to develop a digital "appro passport" mobile and management application for Appro -events.</h4>
          <h4>My responsibilities included UI design and programming, as well as guiding junior developers</h4>
          <h4>Figma, React+Typescript, React Native, Apollo GraphQL, PostgreSQL</h4>
          <hr className='thin'></hr>
          <h5>Project work course</h5>
          <p>University of Oulu, Department of Industrial Engineering and Management. | 1/2019 - 5/2019</p>
          <h4>A bachelor's degree course where I worked as part of a 4-person team.
            Our task was to develop an easy-to-use level editor for a game intended for educational use.</h4>
          <h4>My responsibilities included UI design and programming, as well as organizing and documenting user tests.</h4>
          <h4>PixiJS, JavaScript, Node.js</h4>
          <hr className='thin'></hr>
          <h5>Demola 'Teatria Backstage' project</h5>
          <p>Demola Global Oy, Teatria Oy. Oulu | 3/2018 - 6/2018</p>
          <h4>I worked as part of an international and multidisciplinary 6-person student team. Our task was to find ways to utilize
            data generated in business to improve marketing and ticket sales.</h4>
          <h4>Our project partner licensed our project result report.</h4>
          <hr></hr>

          <h3>Language Skills:<img src={langImg} alt='' className='home' /></h3>
          <p><b>Finnish -</b> Native <br></br>
            <b>English -</b> Excellent <br></br>
            <b>Swedish -</b> Basic
          </p>
        </div>
      )}
    </div>
  )
}

export default Home;
