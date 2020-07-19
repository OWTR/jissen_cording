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
$('a[href^="#"]').click(function() {
  // スクロールの速度
  var speed = 400; // ミリ秒で記述
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
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

// // モーダル
// $(function(){
//   var modal = $('#modal'),
//         modalContent = $('#modal_content'),
//         btnOpen = $("#btn_open"),
//         btnClose = $(".btn_close");
 
//   $(btnOpen).on('click', function() {
//     modal.show();
//   });
 
//   $(modal).on('click', function(event) {
//     if(!($(event.target).closest(modalContent).length)||($(event.target).closest(btnClose).length)){
//       modal.hide();
//     }
//   });
// });