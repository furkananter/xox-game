import React from 'react';
import { motion } from 'framer-motion';

function Square(props) {
    const item = {
        hidden: { y: 80, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition:{
            duration: 0.8,
          }
        }
      }
    return (
        <motion.button
            whileHover={{ scale: 0.95, boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.5)'}}
            initial="hidden"
            animate="visible"
            variants={item}
            whileTap={{ scale: 1.1}}
            onClick={props.onClick}
            className={`hidden:opactiy-0 visible:opacity-1 bg-white text-black border-black border-4 float-left text-4xl font-bold  -mr-[1px] -mt-[1px] p-0 text-center w-16 h-16 focus:outline-none ${props.value === 'X' ? 'focus:bg-green-400' : 'focus:bg-red-400'} focus:text-white`}
        >
            {props.value}
        </motion.button>
    );
}

export default Square