if (window.matchMedia('(max-width: 599px)').matches) {
  $(".phone").click(function() {
    $(".phone").css("display", "none");
    $(".pc-header").css("display", "block");
  });

  $(".pc-header").click(function() {
    $(".pc-header").css("display", "none");
    $(".phone").css("display", "block");
  });
} else {
}

$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });

});

$(window).on('load scroll', function() {
  add_class_in_scrolling($('.sample1'));
  add_class_in_scrolling($('.sample2'));
  add_class_in_scrolling($('.sample3'));
});

// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
  var winScroll = $(window).scrollTop();//スクロールの上下位置を取得
  var winHeight = $(window).height();//ウィンドウの高さを取得
  var scrollPos = winScroll + winHeight;//上記の合計（スクロールポジション）

  if(target.offset().top < scrollPos) {//classをつけたい要素の上下位置がスクロールポジションより小さい場合＝ウィンドウ内に表示された場合
      target.addClass('show');
  }
}
