// アコーディオン
$(function () {
  //中のコンテンツを隠す
  $(".section9__accordion__content").css("display", "none");
  //タイトルがクリックされたら
  $(".js__accordion__title").click(function () {
    //クリックしたjs-accordion-title以外の全てのopenを取る
    $(".js__accordion__title").not(this).removeClass("open");
    //クリックされたtitle以外のcontentを閉じる
    $(".js__accordion__title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
});

// 追従ボタン
$(function() {
  var topBtn = $('.following');
  //ボタンを非表示にする
  topBtn.hide();
  //スクロールしてページトップから500に達したらボタンを表示
  $(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
//フェードインで表示
  topBtn.fadeIn();
  } else {
//フェードアウトで非表示
  topBtn.fadeOut();
  }
  });
});

// ページ内リンク移動
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    //ヘッダーの高さを取得
    var header = $('header').height();
    //ヘッダーの高さを引く
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// スライダー
function slider(condition) {
  var current = $(".item.current"),
      next,
      index;
  if (condition >= 0) {
    next = $(".item").eq(condition);
    index = condition;
  } else if (condition == 'prev') {
    next = current.is(":first-child") ? $(".item").last() : current.prev();
    index = next.index();
  }else {
    next = current.is(":last-child") ? $(".item").first() : current.next();
    index = next.index();
  }
  next.addClass("current");
  current.removeClass("current");
  $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}
var setSlider = setInterval(slider, 4000);

$(".button").on("click", function() {
  clearInterval(setSlider);
  var flag = $(this).is(".prev") ? 'prev' : 'next';
  slider(flag);
  setSlider = setInterval(slider, 4000);
});

$(".dot").on("click", function() {
  if ($(this).is(".current")) return;
  clearInterval(setSlider);
  var index = $(this).index();
  slider(index);
  setSlider = setInterval(slider, 4000);
});


// モーダル
$(function(){
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
});

// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
  // 閉じるボタンで、メニューもとじさせる
  $('.globalMenuSp').click(function(){
    $('.hamburger, .globalMenuSp').removeClass('active');
  });
});

// パラメータ取得
var url   = location.href;
params    = url.split("?");
spparams   = params[1].split("&");
 var paramArray = [];

for ( i = 0; i < spparams.length; i++ ) {
  vol = spparams[i].split("=");
  paramArray.push(vol[0]);
  paramArray[vol[0]] = vol[1];
}
// http://www.example.com/?modal=show
if ( paramArray["modal"] == "show") {
  alert("show");
} else {
  alert("no show");
}