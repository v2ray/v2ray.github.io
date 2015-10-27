/* global jQuery */
/* global marked */

function Article(title, contentFile) {
  this.title = title;
  this.contentFile = contentFile;
  this.content = null;
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
  this.getContent(function(data) {
    callback(marked(data));
  });
};

var articles = {
  'index-zh-cn': new Article('首页', 'index.md'),
  'guide-zh-cn': new Article('用户指引', 'guide.md'),
  'vmess-zh-cn': new Article('VMess 协议', 'vmess.md'),
  'install-zh-cn': new Article('V2Ray 安装', 'install.md'),
  'donate-zh-cn': new Article('资助 V2Ray', 'donate.md'),
  'roadmap-zh-cn': new Article('开发计划', 'roadmap.md'),
  'issue-zh-cn': new Article('Issue 指引', 'issue.md'),
  'develop-zh-cn': new Article('开发指引', 'develop.md')
};
