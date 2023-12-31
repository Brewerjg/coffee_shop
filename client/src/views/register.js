import React from 'react'
import {motion} from 'framer-motion';

import Register from '../components/register';



function Login() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <Register/>


    </motion.div>
  )
}



export default Login