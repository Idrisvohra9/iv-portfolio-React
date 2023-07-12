import React from 'react'
import PropTypes from 'prop-types'


export default function Stats(props) {
  const StatStyle = {
    width : props.percent + "%",
    backgroundColor: props.color
  }
  return (
    <span className="d-flex w-100 align-items-center flex-column p-3 stats">
      <span className='d-flex align-items-center'>

      {props.icon && (
        <img src={props.icon} alt="programming language icon" className="icon-outer"/>
      )}
        <span className="label p-3" style={{ fontWeight:"bold", fontSize:"2rem"}}>
          {props.label}
        </span>
      </span>
        <span className="progress flex-grow-1" style={{width: "100%"}}>
          <span className={`progress-bar ${props.striped ? 'progress-bar-striped' : ""} progress-bar-animated bg-${props.color}`} role="progressbar"
            aria-label="stats" aria-valuenow={props.percent} aria-valuemin="0" aria-valuemax="100"
            style={StatStyle}>{props.percent}%</span>
        </span>
    </span >
  )
}


Stats.propTypes = {
  label: PropTypes.string,
  striped: PropTypes.bool,
  color: PropTypes.string,
  percent: PropTypes.number,
}

Stats.defaultProps = {
  label: "What's good.",
  striped: true,
  color: "darkcyan",
  percent: 80,
}