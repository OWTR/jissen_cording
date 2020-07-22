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

// サイドCVボタン
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

// タブ切り替え
$(function(){
  $('.tab').click(function(){
      $('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      $('.is-show').removeClass('is-show');
      // クリックしたタブからインデックス番号を取得
      const index = $(this).index();
      // クリックしたタブと同じインデックス番号をもつコンテンツを表示
      $('.panel').eq(index).addClass('is-show');
  });
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

// パラメータ取得
var params = (new URL(document.location)).searchParams;
var modal = params.get('modal');
console.log('modal :', modal);
  /// => modal : show

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
});
