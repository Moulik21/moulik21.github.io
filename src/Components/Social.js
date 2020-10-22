import React, { Component } from 'react';

class SocialIcon extends Component {
    render() {
        const { link, name } = this.props;
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={`${window.location.origin}/icons/${name}.svg` } alt={`${name} logo`} />
            </a>
        );
    }
}

class Social extends Component {
    render() {
        return (
            <div className="social">
                <SocialIcon link="mailto:moulikgaglani@gmail.com" name="email" />
                <SocialIcon link="https://www.linkedin.com/in/moulikgaglani" name="linkedin" />
                <SocialIcon link="https://www.github.com/Moulik21" name="github" />
                <SocialIcon link="https://www.instagram.com/moulikgaglani" name="instagram" />
            </div>
        );
    }
}

export default Social;