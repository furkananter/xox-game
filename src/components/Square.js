import React from 'react';

function Square(props) {
        return (
            <button 
            onClick={props.onClick}
            className="bg-white text-black border-black border-4 float-left text-4xl font-bold  -mr-[1px] -mt-[1px] p-0 text-center w-16 h-16 focus:outline-none focus:bg-[#000] focus:text-white">
                {props.value}
            </button>
        );
    
}

export default Square