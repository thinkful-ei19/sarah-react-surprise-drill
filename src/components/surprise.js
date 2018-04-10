import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'button'
        }
    }

    showImage(e) {
        //e.preventDefault();
        this.setState({
            show: 'img'
        });
    }

    render() {
        if(this.state.show === 'button') {
        return <SurpriseButton onClick={() => this.showImage()} />;
        } else if(this.state.show === 'img') {
            return <SurpriseImage />;
        }
    }
}
