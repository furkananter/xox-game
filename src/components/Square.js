import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <button 
            onClick={() => console.log("clicked")}
            className="bg-white border-[1px] text-black border-black float-left text-4xl font-bold  -mr-[1px] -mt-[1px] p-0 text-center w-16 h-16 focus:outline-none focus:bg-[#000] focus:text-white">
                {this.props.value}
            </button>
        );
    }
}

export default Square