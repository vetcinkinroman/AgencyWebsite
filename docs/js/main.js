$(document).ready(function() {


	//slide2id - плавная прокрутка по ссылкам внутри страницы
	 $("nav a,a[href='#top'],a[href='#blog'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
   });

	//Моббильная навигация
     
     var navToggleButton = $('.navigation__toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');
	var iconNav = 'fa-bars';
	var iconClose = 'fa-times';

	// Мобильная навигация
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		if ( navToggleIcon.hasClass(iconNav) ){
			navToggleIcon.removeClass(iconNav);
			navToggleIcon.addClass(iconClose);
		} else {
			navToggleIcon.removeClass(iconClose);
			navToggleIcon.addClass(iconNav);
		}
		
	})

	navLink.on('click', function(){

		if ( navBlock.hasClass(navBlockOpen) ) {
			if ( navToggleIcon.hasClass(iconNav) ){
				navToggleIcon.removeClass(iconNav);
				navToggleIcon.addClass(iconClose);
			} else {
				navToggleIcon.removeClass(iconClose);
				navToggleIcon.addClass(iconNav);
			}
		}

		navBlock.removeClass(navBlockOpen);
		
	})

  

}); 