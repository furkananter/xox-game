import React from 'react';

class Square extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            value : null
        }
    }

    render() {
        return (
            <button 
            onClick={() => this.setState({value: 'X'})}
            className="bg-white border-[1px] text-black border-black float-left text-4xl font-bold  -mr-[1px] -mt-[1px] p-0 text-center w-16 h-16 focus:outline-none focus:bg-[#000] focus:text-white">
                {this.state.value}
            </button>
        );
    }
}

export default Square