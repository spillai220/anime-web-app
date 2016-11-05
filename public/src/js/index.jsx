var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var Layout = require('./components/layout.jsx');
var Home = require('./components/home.jsx')

var App = React.createClass({
  render : function(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render((
  <App/>
), document.getElementById('app'), function(){
  console.log('react app successfully rendered on DOM')
})
