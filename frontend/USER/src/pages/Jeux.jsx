import React from 'react'
import { Link } from 'react-router-dom';
import './css/Jeux.css'
import puzzled from './Image/puzzled.png'
import snake from './Image/snake.jpg'
import tetris from './Image/tetris.png'
const Jeux = () => {
  return (
    <div className='jeux'>
        <div className='bod'>
        <img className='imge' src={snake}  />
          <button className='but6'><Link to='/Snakey'>Snake</Link></button>
          <img className='imge' src={puzzled}  />
          <button className='but6' ><Link to='/Puzled'>Puzzled</Link></button>
          <img className='imge' src={tetris}  />
          <button className='but6'><Link to='/Tetris'>Tetris</Link></button>
        </div>
    </div>
  )
}

export default Jeux