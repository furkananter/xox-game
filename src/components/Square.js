import React from 'react';
import { motion } from 'framer-motion';

function Square(props) {
  // Item - Framer Motion
  const square = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }
  // Item - Framer Motion

  return (
    <motion.button
      whileHover={{ scale: 0.95, boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.5)' }}
      initial="hidden"
      animate="visible"
      variants={square}
      whileTap={{ scale: 1.1 }}
      onClick={props.onClick}
      className={
        `hidden:opactiy-0 visible:opacity-1 bg-white text-black border-black 
        border-4 float-left text-4xl font-bold  -mr-[1px] -mt-[1px] p-0 text-center 
        w-16 h-16 focus:outline-none focus:text-white 
        ${props.value === 'X' ? ' focus:bg-green-400' : 'focus:bg-red-400'} 
        cursor-pointer
        `}
    >
      {/*
        Props.value aracılığı ile verilerimizi Board.js sınıfından alıyoruz.
      */}

      {props.value}
    </motion.button>
  );
}

export default Square