// СЛАЙДЕР преимущества

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: true,
	slidesPerView: 4,

	breakpoints: {
		300: {
			slidesPerView: 1,
		},
		774: {
			slidesPerView: 2,
		},
		962: {
			slidesPerView: 3,
		},
		1110: {
			slidesPerView: 4,
		},
	},
});

// СЛАЙДЕР преимущества

//СЛАЙДЕР e200

var swiper = new Swiper(".e200Swiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: true,
	slidesPerView: 1,
});

// СЛАЙДЕР next

var swiper = new Swiper(".nextSwiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: true,
	slidesPerView: 1,
});

// СЛАЙДЕР next

// СЛАЙДЕР r580

var swiper = new Swiper(".r580Swiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: true,
	slidesPerView: 1,
});

// СЛАЙДЕР r580

// СЛАЙДЕР ducato

var swiper = new Swiper(".ducatoSwiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: true,
	slidesPerView: 1,
});

// СЛАЙДЕР ducato

// СЛАЙДЕР logan

var swiper = new Swiper(".loganSwiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: true,
	slidesPerView: 1,
});

// СЛАЙДЕР logan

function getNumberOfDays(start, end) {
	const date1 = new Date(start);
	const date2 = new Date(end);
	const oneDay = 1000 * 60 * 60 * 24;
	const diffInTime = date2.getTime() - date1.getTime();
	const diffInDays = Math.round(diffInTime / oneDay);
	return diffInDays;
}

// КАЛЕНДАРЬ

new AirDatepicker("#airdatepicker", {
	isMobile: true,
	range: true,
	multipleDatesSeparator: " - ",
	timepicker: true,
	autoClose: true,
	onSelect({date, formattedDate, datepicker}) {
		$('.preview-total').html('');
		let oneDay = Number($('.preview-price').text().replace('Стоимость за сутки:', '').replace('руб', '').trim());
		let deposit = Number($('.preview-deposit').text().replace('Залог:', '').replace('руб', '').trim());
		if (date[0] && date[1]) {
			let days = getNumberOfDays(date[0], date[1]);
			if (days > 0) {
				if (oneDay && deposit) {
					let total = (oneDay * days) + deposit;
					if (total > 0) $('.preview-total').html(`<strong>Итого: </strong>${total}руб`);
				}
			}
		} else if (date[0]) {
			let days = 1;
			if (oneDay && deposit) {
				let total = (oneDay * days) + deposit;
				if (total > 0) $('.preview-total').html(`<strong>Итого: </strong>${total}руб`);
			}
		}
	},
});

// КАЛЕНДАРЬ

// СПИСОК
const element = document.querySelector("select");
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: "",
});

$('input[name="phone"]').inputmask("+7 (999) 999-99-99");

$('.submit-btn').on('click', function() {
	let auto = $('.car-name').text().trim();
	let date = $('#airdatepicker').val();
	let address = $('select[name="select-category"] option:selected').text();
	let priceTotal = $('.preview-total').text().replace('Итого:', '').replace('руб', '').trim();

	if (!auto) {
		alert('Отсутствует название автомобиля!');
		return false;
	}
	if (!date) {
		alert('Не выбрана дата аренды!');
		return false;
	}
	if (!address) {
		alert('Не выбран адрес!');
		return false;
	}
	if (!priceTotal) {
		alert('Отсутствует итоговая цена!');
		return false;
	}

	$('.modal-form-auto').html(auto);
	$('.modal-form-date').html('Дата аренды: '+ date);
	$('.modal-form-address').html('Место доставки: '+ address);
	$('.modal-form-price-total').html('Итоговая стоимость: '+ priceTotal +' рублей');

	$('.form input[name="auto"]').val(auto);
	$('.form input[name="date"]').val(date);
	$('.form input[name="address"]').val(address);
	$('.form input[name="price-total"]').val(priceTotal);

	$('.modal').addClass('active');
	$('body').addClass('_lock');
});

$('.modal-close').on('click', function() {
	$('.modal').removeClass('active');
	$('body').removeClass('_lock');
});

$('.modal').on('click', function(e) {
	let modal = $('.modal-container');
	if (!modal.is(e.target) && modal.has(e.target).length === 0 ) {
		$('.modal').removeClass('active');
		$('body').removeClass('_lock');
	}
});

$('.form').on('submit', function(e) {
	let form = $(this);
	let actionUrl = form.attr('action');
	let btn = $('.form-row .btn');
	btn.text('Отправка...');
	btn.prop('disabled', true);
	$.ajax({
		type: "POST",
		url: actionUrl,
		data: form.serialize(),
		success: function(data) {
			if (data === 'success') {
				$('input[name="phone"], input[name="name"]').val('');
				$('.form-result').html('<div class="send-success">Сообщение успешно отправлено!</div>');
			} else {
				$('input[name="phone"], input[name="name"]').val('');
				$('.form-result').html('<div class="send-error">Ошибка, повторите попытку через некоторое время!</div>');
			}
			btn.text('Отправить');
			btn.prop('disabled', false);
		},
		complete: function(data) {
			// for test
			//form.append('<div class="send-success">Сообщение успешно отправлено!</div>');
		},
		error: function(jqXHR, exception) {
			$('input[name="phone"], input[name="name"]').val('');
			if (jqXHR.status === 0) {
				alert('Not connect. Verify Network.');
			} else if (jqXHR.status == 404) {
				alert('Requested page not found (404).');
			} else if (jqXHR.status == 500) {
				alert('Internal Server Error (500).');
			} else if (exception === 'parsererror') {
				alert('Requested JSON parse failed.');
			} else if (exception === 'timeout') {
				alert('Time out error.');
			} else if (exception === 'abort') {
				alert('Ajax request aborted.');
			} else {
				alert('Uncaught Error. ' + jqXHR.responseText);
			}
		}
	});
	return false;
});