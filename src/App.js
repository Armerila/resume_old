import React from 'react';
import './App.scss';
import { PDFExport } from '@progress/kendo-react-pdf';
import Sidebar from './components/Sidebar.js'
import Home from './components/Home.js'


class App extends React.Component {
  pdfExportComponent;
  render() {
    return (
      <PDFExport ref={(component) => this.pdfExportComponent = component}
        margin={{ top: 20, left: 0, right: 10, bottom: 20 }}
        fileName="CV_Arttu_Merilainen.pdf"
        paperSize= {"A4"}
        scale= {0.45}>
        <div className='root'>
          <Home></Home><button className="load-button" onClick={this.exportPDFWithComponent}>Lataa PDF-muodossa</button>
          <Sidebar></Sidebar>
        </div>
      </PDFExport>
    );
  }
  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  }
}

export default App;
