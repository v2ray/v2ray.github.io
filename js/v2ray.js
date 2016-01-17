/* global React */
/* global ReactDOM */
/* global v2raySiteState */
/* global articles */

var NavBar = React.createClass({
  goToArticle: function(article) {
    return function(e) {
      e.preventDefault();
      jQuery('#navbar-toggle-button').attr('data-toggle', 'collapse');
      v2raySiteState.setArticle(article);
      v2raySiteState.pushState();
      return false;
    };
  },
  render: function() {
    return (
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#v2ray-navbar" id="navbar-toggle-button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="https://www.v2ray.com/">V2Ray</a>
        </div>
        <div className="collapse navbar-collapse" id="v2ray-navbar">
          <ul className="nav navbar-nav">
            <li>
              <a href="#" onClick={this.goToArticle('updates-zh-cn')}>更新日志</a>
            </li>
            <li>
              <a href="https://github.com/v2ray/v2ray.github.io/wiki" target="_blank">Wiki</a>
            </li>
            <li><a href="https://github.com/v2ray/v2ray-core/releases" target="_blank">下载</a></li>
            <li><a href="#" onClick={this.goToArticle('donate-zh-cn')}>捐助</a></li>
            <li><a href="#">最新版本：1.4</a></li>
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

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; V2Ray.com</p>
          </div>
        </div>
      </footer>
    );
  }
});

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

var Content = React.createClass({
  getInitialState: function() {
    return {
      content: ''
    };
  },
  componentDidUpdate: function() {
    jQuery("html, body").animate({ scrollTop: 0 }, "slow");
  },
  componentDidMount: function() {
    var self = this;
    v2raySiteState.registerStateChangeCallback(function(state) {
      var article = articles[state.getArticle()];
      if (!article) {
        return;
      }
      article.getMarkedContent(function(data) {
        self.setState({content: data});
      });
    });
    articles[v2raySiteState.getArticle()].getMarkedContent(function(data) {
      self.setState({content: data});
    });
  },
  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.content}} />
    );
  }
});

ReactDOM.render(
  <Content />,
  jQuery('#content')[0]
);

