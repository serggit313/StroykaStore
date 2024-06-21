$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	})


	// Меню бургер
	let menu_mob = document.querySelector('.header_mainline_mobile_menu')
	let header_menu_open = document.querySelector('.burger_menu_open')
	let header_menu_close = document.querySelector('.burger_menu_close')


	header_menu_open.addEventListener('click', function(){
		header_menu_close.classList.toggle('dn')
		header_menu_open.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
	})

	header_menu_close.addEventListener('click', function(){
		header_menu_open.classList.toggle('dn')
		header_menu_close.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
		sub_menu_mobile.classList.toggle('dn'); 
	})

	// Выпадающий список у десктопного меню
	let header_mainline_content_catalog = document.querySelector('.header_mainline_content_catalog');
	let mainline_catalog_dropdown_list_submenu = document.querySelector('.mainline_catalog_dropdown_list_submenu');
	
	if (header_mainline_content_catalog) {
		header_mainline_content_catalog.addEventListener('click', function(event) {
		mainline_catalog_dropdown_list_submenu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	// Выпадающий список у мобильного меню
	let li_mob_has_childrens = document.querySelector('.li_has_children_mobile_menu_catalog');
	let sub_menu_mobile = document.querySelector('.header_mainline_mobile_submenu');
	
	if (li_mob_has_childrens) {
		li_mob_has_childrens.addEventListener('click', function(event) {
		sub_menu_mobile.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	

	// Сладйер блок 1
	$('.block_1_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_btn_next'),
	});


	// Сладйер блок 6
	$('.block_6_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_6_slider_btn_prev'),
	    nextArrow: document.querySelector('.block_6_slider_btn_next'),
        centerMode: true,
		variableWidth: false,
		centerPadding: '125px'
	});
});