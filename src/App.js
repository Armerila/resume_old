import React from 'react';
import './App.scss';
import { PDFExport } from '@progress/kendo-react-pdf';
import Sidebar from './components/Sidebar.js'
import Home from './components/Home.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'finnish'
    };
  }

  toggleLanguage = () => {
    this.setState((prevState) => ({
      language: prevState.language === 'finnish' ? 'english' : 'finnish'
    }));
  }

  pdfExportComponent;
  render() {
    const { language } = this.state;
    return (
      <>
      <div className="button-container">
      <button className="language-button" onClick={this.toggleLanguage}>
        {language === 'finnish' ? 'Switch to English' : 'Vaihda suomeksi'}
      </button>
      <button className="load-button" onClick={this.exportPDFWithComponent}>
        {language === 'finnish' ? 'Lataa PDF-muodossa' : 'Download as PDF'}
      </button>
    </div>
      <PDFExport ref={(component) => this.pdfExportComponent = component}
        margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
        fileName="CV_Arttu_Merilainen.pdf"
        keepTogether="home-div"
        scale={0.7}>
        <div className='root'>
          <Home language={language} />
          <Sidebar language={language} />
        </div>
      </PDFExport>
      </>
    );
  }
  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  }
}

export default App;
