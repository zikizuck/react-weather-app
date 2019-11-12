import React, {Component} from 'react';


class Icons extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <img src={this.props.src} alt=""/>
            </div>
        );
    }
}

export default Icons;