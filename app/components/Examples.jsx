var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h3 className="text-center">Examples Component</h3>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=LosAngeles'>Los Angeles, CA</Link>
        </li>
        <li>
          <Link to='/?location=SanFrancisco'>San Francisco, CA</Link>
        </li>
        <li>
          <Link to='/?location=Miami'>Miami, FL</Link>
        </li>
      </ol>
    </div>

  )
};

module.exports = Examples;
