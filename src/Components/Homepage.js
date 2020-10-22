import React, { Component } from 'react';
import { Img } from 'react-image';
import { Helmet } from 'react-helmet';

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleName: 'Moulik Gaglani - Personal Website'
        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.state.titleName}</title>
                    <meta name="description" content="A bit about me on the internet."/>
                    <link rel="canonical" href="https://moulikgaglani.me/#" />                    
                </Helmet>
                <div className="intro-pic">
                    <Img src=""/>
                </div>

                <h4>Hi there, welcome to my personal website!</h4>

                <p>
                    My name is 
                    <b> Moulik Gaglani</b>
                    {' '}
                    and I recently graduated from the University of Toronto with a 
                    <b> Honours Bachelor of Science</b>, 
                    {' '}
                    specialized in 
                    <b> Computer Science</b>
                    {' '}.
                </p>

                <p>I&apos;ve got one teaching assistantship and about 2 years of experience in software development including Full-stack development and DevOps; <a href='/#/resume'>check out my resume here</a>!</p>

                <p>
                    Apart from all that, I&apos;m a big fan of learning new hobbies. I absoutely love to cook (making chili paneer being my favourite), and I like 
                    <a href="/#/gallery"> take photos</a>
                    {' '}
                    on occasion.
                </p>

                <p>If you have any questions about my experiences, education, project, cooking or want to connect about an opportunity, I'd love to <a href="https://www.linkedin.com/in/moulikgaglani" target="_blank" rel="noopener noreferrer">connect on LinkedIn</a>!</p>

                <p>You can view the source code for this website and the projects it hosts <a href="https://www.github.io/Moulik21/moulik21.github.io" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
        );
    }
}

export default Homepage;