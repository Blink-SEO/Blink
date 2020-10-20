import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, titleClass, textColor }) => (
  <h1 className={`[ hero-title ${ titleClass } ] [ mb-5 ] [ ${ textColor } text-4xl sm:text-5xl lg:text-6xl leading-none ]`}>{ title }</h1>
)

Title.propTypes = {
  title: PropTypes.string,
  titleClass: PropTypes.string,
  textColor: PropTypes.string,
}

export default Title;
