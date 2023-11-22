import React from 'react'
import redBall from '../../images/red ball.png'
import purpleBall from '../../images/purple ball.png'

function Effects() {
  return (
    <div className="effects">
      <img src={redBall} alt="redBallEffect" className="effects__redBall" />
      <img
        src={purpleBall}
        alt="purpleBallEffect"
        className="effects__purpleBall"
      />
      <img
        src={redBall}
        alt="redBallEffect"
        className="effects__redBall-small"
      />
    </div>
  )
}

export default Effects
