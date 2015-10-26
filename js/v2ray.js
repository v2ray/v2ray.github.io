/* global React */
/* global ReactDOM */
/* global jQuery */
/* global marked */

var NavBar = React.createClass({
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
          <a className="navbar-brand" href="https://v2ray.com/">V2Ray</a>
        </div>
        <div className="collapse navbar-collapse" id="v2ray-navbar">
          <ul className="nav navbar-nav">
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

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div class="row">
          <div class="col-lg-12">
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
  render: function() {
    return (
      <header className="jumbotron">
        <h1>V2Ray 项目</h1>
        <p>一个免费的跨平台工具，可以助你加密网络流量，绕过网络供应商的干扰。</p>
        <p><a className="btn btn-primary btn-large" href="https://github.com/v2ray/v2ray-core/releases">下载</a></p>
      </header>
    );
  }
});

ReactDOM.render(
  <Content />,
  jQuery('#content')[0]
);

function Article(title, contentFile) {
  this.title = title;
  this.contentFile = contentFile;
  this.content = null;
}

Article.prototype.loadContent = function(callback) {
  var self = this;
  jQuery.ajax({
      url: self.contentFile,
      type: 'get',
      success: function(data, status, xhr) {
        callback(data);
      }
    });
};

Article.prototype.getContent = function(callback) {
  var self = this;
  if (self.content) {
    callback(self.content);
    return;
  }
  
  self.loadContent(function(data) {
    self.content = data;
    callback(data);
  });
};

Article.prototype.getMarkedContent = function(callback) {
  this.getContent(function(data) {
    callback(marked(data));
  });
};

var articles = {
  'guide-zh-cn': new Article('用户指引', 'guide.md')
};
