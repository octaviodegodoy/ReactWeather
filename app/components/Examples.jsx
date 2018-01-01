var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
     <h2 className="text-center">Examples!</h2>
     <p>Here are some examples of locations to try out :</p>
     <ol>
<li>
<Link to='/?location=Botucatu'>Botucatu,Brazil</Link>
</li>
<li>
<Link to='/?location=Cork'>Cork,Ireland</Link>
</li>
     </ol>
   </div>
  )
};


module.exports=Examples;
