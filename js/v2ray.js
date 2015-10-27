/* global React */
/* global ReactDOM */
/* global v2raySiteState */
/* global articles */

var NavBar = React.createClass({
  goToArticile: function(article) {
    return function(e) {
      e.preventDefault();
      v2raySiteState.setArticle(article);
      v2raySiteState.pushState();
      return false;
    };
  },
  render: function() {
    return (
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#v2ray-navbar">
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
              <a className="dropdown-toggle"
                 data-toggle="dropdown"
                 href="#"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                新手上路 <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this.goToArticile('install-zh-cn')}>安装 V2Ray</a></li>
                <li><a href="#" onClick={this.goToArticile('guide-zh-cn')}>客户端配置</a></li>
                <li><a href="#">服务器配置</a></li>
                <li><a href="#" onClick={this.goToArticile('issue-zh-cn')}>Issue 指引</a></li>
                <li><a href="#" onClick={this.goToArticile('errors-zh-cn')}>常见错</a></li>
                <li><a href="#" onClick={this.goToArticile('benchmark-zh-cn')}>性能评测</a></li>
              </ul>
            </li>
            <li>
              <a className="dropdown-toggle"
                 data-toggle="dropdown"
                 href="#"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                技术细节 <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this.goToArticile('roadmap-zh-cn')}>开发计划</a></li>
                <li><a href="#" onClick={this.goToArticile('design-zh-cn')}>设计概要</a></li>
                <li><a href="#" onClick={this.goToArticile('vmess-zh-cn')}>VMess 协议</a></li>
                <li><a href="#" onClick={this.goToArticile('develop-zh-cn')}>开发指引</a></li>
              </ul>
            </li>
            <li><a href="https://github.com/v2ray/v2ray-core/releases" target="_blank">下载</a></li>
            <li><a href="#" onClick={this.goToArticile('donate-zh-cn')}>捐助</a></li>
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

