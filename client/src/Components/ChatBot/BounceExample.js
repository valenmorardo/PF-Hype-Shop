import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ChatLit from './ChatLit';

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
                <Zoom when={this.state.show}>
                    <ChatLit />
                </Zoom >
                <button
                    class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 z-100"
                    type="button"
                    onClick={this.handleClick}
                >
                    {this.state.show ? 'Hide' : 'Show'} Message
                </button>
            </div>
        );
    }
}
export default BounceExample;
