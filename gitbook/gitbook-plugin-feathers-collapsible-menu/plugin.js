require(["gitbook"], function (gitbook) {
  let config;

  function makeLi(heading) {
    return $('<li>').append($('<a>').html($(heading).text())
      .attr('href', '#' + $(heading).attr('id')));
  }

  gitbook.events.bind('start', function (e, cfg) {
    config = cfg.menu || { deep: false };
  });

  gitbook.events.bind("page.change", function () {
    $('ul.summary > li > ul').hide();
    $('ul.summary > li[data-level="1.2"] > ul > li:not(.active) li').hide();
    $('ul.summary li li.active').parents().children(':not(script)').show();
    $('ul.summary li.active > ul').show();
    $('.page-headings').remove();

    var hasChildren = $('ul.summary li.active ul').length !== 0;

    if (!hasChildren) {
      var headingList = $('<ul class="page-headings">');

      $('.page-wrapper h2').each(function () {
        var li = makeLi(this);
        var ul = $('<ul>');
        var h3s = $(this).nextUntil('h2').filter('h3');

        if (h3s.length && config.deep) {
          h3s.each(function () {
            ul.append(makeLi(this));
          });
          li.append(ul);
        }

        headingList.append(li);
      });

      $('li.active').append(headingList);
    }
  });
});
