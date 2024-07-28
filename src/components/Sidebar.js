import React from 'react';


const Sidebar = ({ language }) => {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  return (
    <div className='sidebar'>
      <div>
        <img src={require('../assets/omakuva.jpg')} alt='A headshot of me' className='rounded' />
      </div>
      {language === 'finnish' ? (
        <div>
          <h1>Arttu Meriläinen</h1>
          <h2>Ohjelmistokehittäjä/suunnitelija</h2>
          <h3>Profiili </h3>
          <h4>Olen {calculate_age(new Date("1995-05-02"))}-vuotias ohjelmistokehittäjä.
            Olen kiinnostunut etenkin web-kehittämisestä ja suunnittelusta,
            sekä datan hyödyntämisestä ja visualisoinnista.</h4>
          <h4>Opinnoissani olen myös tutustunut erilaisiin data-analyysimenetelmiin ja työkaluihin.</h4>
          <br></br>

          <h3>Tekniset taidot</h3>
          <p>
            <b>Ohjelmointikielet ja teknologiat:</b><br></br>
            JavaScript/TypeScript, Python, R, Java, React,
            Node.js, Express.js, HTML/CSS, GraphQL, AWS<br></br>
            <br></br>
            <b>Version- ja projektinhallinta:</b><br></br>
            Git, GitLab, Jira, Bitbucket, Scrum<br></br>
            <br></br>
            <b>Tietokannat:</b><br></br>
            PostgreSQL, SQLite, MongoDB, DynamoDB<br></br>
            <br></br>
            <b>Mallinnus ja suunnittelu:</b><br></br>
            Visual Paradigm, Figma, GIMP, Adobe Photoshop
          </p>
          <h3>Yhteystiedot<img src={require('../assets/yhteys.png')} alt='' className='home' /></h3>
          <p>
            TAMPERE<br></br>
            0443020596<br></br>
            <a href='mailto:arkkuvio@gmail.com'>arkkuvio@gmail.com</a><br></br>
            <a href='https://www.linkedin.com/in/armerila/'>
              <img src={require('../assets/LI-Logo.png')} alt='Clickable Linkedin logo' className='small' />
            </a><br></br>
            <a href='https://github.com/Armerila'>
              <img src={require('../assets/GitHub_Logo.png')} alt='Clickable GitHub logo' className='small' />
            </a>
          </p>
        </div>
      ) : (
        <div>
          <h1>Arttu Meriläinen</h1>
          <h2>Software Developer/Designer</h2>
          <h3>Profile</h3>
          <h4>I am a {calculate_age(new Date("1995-05-02"))}-year-old software developer
            interested in web development and design,
            as well as data utilization and visualization.</h4>
          <h4>In my studies, I have also been introduced to various data analysis methods and tools.</h4>
          <br></br>

          <h3>Technical Skills</h3>
          <p>
            <b>Programming Languages and Technologies:</b><br></br>
            JavaScript/TypeScript, Python, R, Java, React,
            Node.js, Express.js, HTML/CSS, GraphQL, AWS<br></br>
            <br></br>
            <b>Version and Project Management:</b><br></br>
            Git, GitLab, Jira, Bitbucket, Scrum<br></br>
            <br></br>
            <b>Databases:</b><br></br>
            PostgreSQL, SQLite, MongoDB, DynamoDB<br></br>
            <br></br>
            <b>Modeling and Design:</b><br></br>
            Visual Paradigm, Figma, GIMP, Adobe Photoshop
          </p>
          <h3>Contact Information<img src={require('../assets/yhteys.png')} alt='' className='home' /></h3>
          <p>
            TAMPERE<br></br>
            0443020596<br></br>
            <a href='mailto:arkkuvio@gmail.com'>arkkuvio@gmail.com</a><br></br>
            <a href='https://www.linkedin.com/in/armerila/'>
              <img src={require('../assets/LI-Logo.png')} alt='Clickable Linkedin logo' className='small' />
            </a><br></br>
            <a href='https://github.com/Armerila'>
              <img src={require('../assets/GitHub_Logo.png')} alt='Clickable GitHub logo' className='small' />
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Sidebar;