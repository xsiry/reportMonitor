function loadURL(a) {
  var b = $('div.container');
  $.ajax({
    "type": "GET",
    "url": a,
    "dataType": "html",
    "cache": !0,
    "beforeSend": function() {
      b.removeData().html(""),
        b.html('<div class="dropload-load"><span class="loading"></span>加载中...</div>'),
        b[0] == $("#container")[0] && ($("body").find("> *").filter(":not(" + ignore_key_elms + ")").empty().remove(),
          drawBreadCrumb(),
          $("html").animate({
            "scrollTop": 0
          }, "fast"))
    },
    "success": function(a) {
      b.css({
          "opacity": "0.0"
        }).html(a).delay(50).animate({
          "opacity": "1.0"
        }, 300),
        a = null,
        b = null
    },
    "error": function(c, d, e) {
      b.html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">' + a + "</span>: " + c.status + ' <span style="text-transform: capitalize;">' + e + "</span></h4>")
    },
    "async": !0
  })
}

function drawBreadCrumb(a) {
  var b = $("nav li.active > a"),
    c = b.length;
  bread_crumb.empty(),
    bread_crumb.append($("<li>首页</li>")),
    b.each(function() {
      bread_crumb.append($("<li></li>").html($.trim($(this).clone().children(".badge").remove().end().text()))),
        --c || (document.title = bread_crumb.find("li:last-child").text())
    }),
    void 0 != a && $.each(a, function(a, b) {
      bread_crumb.append($("<li></li>").html(b)),
        document.title = bread_crumb.find("li:last-child").text()
    })
}
