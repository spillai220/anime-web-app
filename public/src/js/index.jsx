var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render : function(){
    return (
      <h1> Hello World </h1>
    )
  }
})

ReactDOM.render((
  <App/>
), document.getElementById('app'), function(){
  console.log('react app successfully rendered on DOM')
})