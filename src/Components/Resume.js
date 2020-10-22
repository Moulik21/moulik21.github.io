import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { SizeMe } from 'react-sizeme';
import { Helmet } from 'react-helmet';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    
    removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
        textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Moulik Gaglani - Resume</title>
                    <meta name="description" content="My latest resume."/>
                    <link rel="canonical" href="https://moulikgaglani.me/#/resume" />                    
                </Helmet>
                <div className="Resume">
                    <p>
                        {'  '}
                        Here is a
                        <a href="moulik_gaglani_resume.pdf" target="_blank" rel="noopener noreferrer"> direct link to my resume;</a>
                        {'  '}
                        I'm currently looking for new grad opportunities!
                        {'  '}
                    </p>

                    <SizeMe>
                        {({ size }) => (
                            <Document file={"moulik_gaglani_resume.pdf"} externalLinkTarget="_blank">
                                <Page pageNumber={1} onLoadSuccess={this.removeTextLayerOffset} width={size.width ? size.width : 1} />
                            </Document>
                        )}

                    </SizeMe>
                </div>
            </div>
        );
    }
}

export default Resume;