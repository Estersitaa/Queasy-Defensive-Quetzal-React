import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './slide-show.css'

const SlideShow = (props) => {
  const [slidenumber, setSlidenumber] = useState(1)
  return (
    <div className={`slide-show-container ${props.rootClassName} `}>
      {slidenumber === 1 && (
        <div className="slide-show-slide1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="slide-show-image"
          />
          <div
            onClick={() => setSlidenumber(2)}
            className="slide-show-right-button"
          >
            <svg viewBox="0 0 1024 1024" className="slide-show-icon">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlidenumber(3)}
            className="slide-show-left-button"
          >
            <svg viewBox="0 0 1024 1024" className="slide-show-icon02">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slidenumber === 2 && (
        <div className="slide-show-slide2">
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="slide-show-image1"
          />
          <div
            onClick={() => {
              setSlidenumber(2)
              setSlidenumber(2)
            }}
            className="slide-show-right-button1"
          >
            <svg viewBox="0 0 1024 1024" className="slide-show-icon04">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setSlidenumber(3)
              setSlidenumber(3)
            }}
            className="slide-show-left-button1"
          >
            <svg viewBox="0 0 1024 1024" className="slide-show-icon06">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slidenumber === 3 && (
        <div className="slide-show-slide3">
          <img
            alt={props.image_alt111}
            src={props.image_src111}
            className="slide-show-image2"
          />
          <div
            onClick={() => setSlidenumber(2)}
            className="slide-show-right-button2"
          >
            <svg viewBox="0 0 1024 1024" className="slide-show-icon08">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlidenumber(3)}
            className="slide-show-left-button2"
          >
            <svg viewBox="0 0 1024 1024" className="slide-show-icon10">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

SlideShow.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  image_alt: 'image',
  image_src111:
    'https://images.unsplash.com/photo-1541959833400-049d37f98ccd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGp1bmdsZXxlbnwwfHx8fDE3MDE1MjcyMDF8MA&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  image_alt11: 'image',
  image_src1:
    'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFmcmljYXxlbnwwfHx8fDE3MDE1MjY4NzN8MA&ixlib=rb-4.0.3&w=1500',
  image_alt111: 'image',
  image_src11:
    'https://images.unsplash.com/photo-1517327876257-83a373f7ad3c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFudGFydGljYXxlbnwwfHx8fDE3MDE1MjcxNTR8MA&ixlib=rb-4.0.3&w=1500',
}

SlideShow.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src111: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt111: PropTypes.string,
  image_src11: PropTypes.string,
}

export default SlideShow
