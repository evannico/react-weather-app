var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the JS framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - This is the Front-End framework used.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
