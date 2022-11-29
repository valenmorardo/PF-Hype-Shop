import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Yo from './Yo';

class BounceExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <div>
                <button
                    className="btn btn-success my-5"
                    type="button"
                    onClick={this.handleClick}
                >
                    {this.state.show ? 'Hide' : 'Show'} Message
                </button>
                <Zoom when={this.state.show}>
                    <Yo />
                </Zoom >
            </div>
        );
    }
}
export default BounceExample;
