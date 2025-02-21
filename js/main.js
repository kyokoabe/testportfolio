function delayScrollAnime() {
	var time = 0.2;
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
			$(childs).each(function () {

				if (!$(this).hasClass("fadeUp")) {

					$(parent).addClass("play");
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");
					value = value + time;


					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");
			value = time;
		}
	})
}


	$(window).scroll(function (){
		delayScrollAnime();
	});


	$(window).on('load', function(){
		delayScrollAnime();
	});


	//ここから足跡アニメーション
	document.addEventListener('DOMContentLoaded', function() {
		const images = document.querySelectorAll('.image-container img');
	  
		const observer = new IntersectionObserver((entries) => {
		  entries.forEach(entry => {
			if (entry.isIntersecting) {
			  entry.target.style.animation = 'none';
			  entry.target.offsetHeight; // トリガーをリセットするための再計算
			  entry.target.style.animation = '';
			  entry.target.classList.add('fade-in');
			} else {
			  entry.target.classList.remove('fade-in');
			}
		  });
		});
	  
		images.forEach(image => {
		  observer.observe(image);
		});
	  });

//画面をロードしたら実行
$(window).on('load', function () {
	ScrollAnime();
  });
  
  //スクロールしたら実行
  $(window).scroll(function () {
	ScrollAnime();
  });
  
  //変数定義
  let beforePos = 0;                         //スクロール前位置
  let window_h = $(window).height() / 2;     //画面中央位置
  
  function ScrollAnime() {
	let scroll_top = $(window).scrollTop();
	
	//上にスクロールしたら表示 & 画面中央より上なら常に表示
	if(window_h > scroll_top || 0 > scroll_top - beforePos){
	  $('#head_wrap').removeClass('UpMove');
	  $('#head_wrap').addClass('DownMove');
	
	//下にスクロールしたら非表示
	}else {
	  $('#head_wrap').removeClass('DownMove');
	  $('#head_wrap').addClass('UpMove');
	  
	}
	
	//スクロール前の場所を保持
	beforePos = scroll_top;
  }
	
  document.addEventListener('DOMContentLoaded', function() {

  var markerText = document.querySelectorAll('.js-marker'); // 監視対象を選択
  var markerTextArr = Array.prototype.slice.call(markerText); // 監視対象をArrayに変換（IE対策）

  /* IntersectionObserverに渡すコールバック関数 */
  var cb = function(entries, observer) {
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        /* 監視対象が画面内に入ったときのアクション */
        entry.target.classList.add('inview'); // 画面内に入った要素にinviewクラスを付与
        observer.unobserve(entry.target); // 1度発火した後監視を止める
      }

    });
  }
  
  /* IntersectionObserverに渡すコールバック関数 */
  var options = {
    rootMargin: "-50px 0px"
  }

  /* IntersectionObserver初期化 */
  var io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfillの設定

  markerTextArr.forEach(el => {
    io.observe(el);
  });

});


//マーカー文字
document.addEventListener('DOMContentLoaded', function() {

	var markerText = document.querySelectorAll('.sectiontitle'); // 監視対象を選択
	var markerTextArr = Array.prototype.slice.call(markerText); // 監視対象をArrayに変換（IE対策）
  
	/* IntersectionObserverに渡すコールバック関数 */
	var cb = function(entries, observer) {
	  entries.forEach((entry) => {
  
		if(entry.isIntersecting) {
		  /* 監視対象が画面内に入ったときのアクション */
		  entry.target.classList.add('inview'); // 画面内に入った要素にinviewクラスを付与
		} else {
		  entry.target.classList.remove('inview'); // 画面外に出た要素のinviewクラスを外す
		}
  
	  });
	}
	
	/* IntersectionObserverに渡すコールバック関数 */
	var options = {
	  rootMargin: "-50px 0px"
	}
  
	/* IntersectionObserver初期化 */
	var io = new IntersectionObserver(cb, options);
	io.POLL_INTERVAL = 100; // Polyfillの設定
  
	markerTextArr.forEach(el => {
	  io.observe(el);
	});
  
  });

  

	