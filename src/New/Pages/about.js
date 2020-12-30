import React from 'react'
import '../Assests/about.scss'
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal/Fade';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export default ()=>{
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return(
        <Fade left>
                <div className = {'mother_about'}>

                    <h1 className = {'h1_about'}>About Me</h1>

                    <animated.div
                    className={"card"}
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}/>
                
                </div>
        </Fade>
            
        
    )
}