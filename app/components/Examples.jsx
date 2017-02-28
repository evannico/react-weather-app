var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">Examples</h3>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Los%20Angeles'>Los Angeles, CA</Link>
        </li>
        <li>
          <Link to='/?location=San%20Francisco'>San Francisco, CA</Link>
        </li>
        <li>
          <Link to='/?location=Miami'>Miami, FL</Link>
        </li>
      </ol>
    </div>

  )
};

module.exports = Examples;
