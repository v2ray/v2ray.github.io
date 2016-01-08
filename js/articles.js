/* global jQuery */
/* global marked */

function Article(title, contentFile) {
  this.title = title;
  this.contentFile = contentFile;
  this.content = null;
  this.fileType = contentFile.split('.').pop();
}

Article.prototype.loadContent = function(callback) {
  var self = this;
  jQuery.ajax({
      url: '/content/' + self.contentFile,
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
  var self = this;
  self.getContent(function(data) {
    var markedContent = data;
    if (self.fileType == 'md') {
      markedContent = marked(data);
    }
    callback(markedContent);
  });
};

var articles = {
  'index-zh-cn': new Article('首页', 'index.md'),
  'guide-zh-cn': new Article('客户端配置', 'guide.md'),
  'guide-server-zh-cn': new Article('服务器配置', 'guide-server.md'),
  'vmess-zh-cn': new Article('VMess 协议', 'vmess.md'),
  'install-zh-cn': new Article('V2Ray 安装', 'install.md'),
  'donate-zh-cn': new Article('资助 V2Ray', 'donate.md'),
  'roadmap-zh-cn': new Article('开发计划', 'roadmap.md'),
  'issue-zh-cn': new Article('Issue 指引', 'issue.md'),
  'develop-zh-cn': new Article('开发指引', 'develop.md'),
  'benchmark-zh-cn': new Article('性能评测', 'benchmark.md'),
  'design-zh-cn': new Article('设计概要', 'design.md'),
  'errors-zh-cn': new Article('常见错误信息', 'errors.md'),
  'workflow-zh-cn': new Article('工作机制', 'workflow.md'),
  'config-zh-cn': new Article('配置文件', 'config.md'),
  'protocols-zh-cn': new Article('协议列表', 'protocols.md'),
  'firstuse-zh-cn': new Article('初次使用', 'firstuse.md'),
  'official-server-zh-cn': new Article('官方服务器', 'official-server.md'),
  'updates-zh-cn': new Article('更新日志', 'updates.md'),
  'pgp-zh-cn': new Article('PGP 公钥', 'pgp.md')
};
