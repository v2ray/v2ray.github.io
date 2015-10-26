/* global React */
/* global ReactDOM */

var NavBar = React.createClass({
  render: function() {
    return (
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#v2ray-navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="https://v2ray.com/">V2Ray</a>
        </div>
        <div class="collapse navbar-collapse" id="v2ray-navbar">
          <ul class="nav navbar-nav">
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <NavBar />,
  document.getElementById('navbar')
);
