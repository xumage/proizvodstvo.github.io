<?php
$email_1 = 'mxumage@gmail.com';

function sendMail($to, $subject, $message, $headers) {
	return mail($to, $subject, $message, $headers);
}

$siteName = parse_url($_SERVER["HTTP_REFERER"])["host"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$email_2 = '';
	$message = '<h3>Новая заявка с сайта</h3>';

	if (isset($_POST['name']) && $_POST['name'] and isset($_POST['phone']) && $_POST['phone']) {
		if (isset($_POST['name']) && $_POST['name']) {
			$message .= '<br>Имя: '. trim(strip_tags($_POST['name']));
		}
		if (isset($_POST['phone']) && $_POST['phone']) {
			$message .= '<br>Телефон: <a href="tel:+'. str_ireplace('/[^0-9.]/', '', $_POST['phone']) .'">'. trim(strip_tags($_POST['phone'])) .'</a>';
		}
		if (isset($_POST['auto']) && $_POST['auto']) {
			$message .= '<br>Автомобиль: '. trim(strip_tags($_POST['auto']));
		}
		if (isset($_POST['email']) && $_POST['email']) {
			$message .= '<br>Email: '. trim(strip_tags($_POST['email']));
			$email_2 = trim(strip_tags($_POST['email']));
		}
		if (isset($_POST['date']) && $_POST['date']) {
			$message .= '<br>Дата аренды: '. trim(strip_tags($_POST['date']));
		}
		if (isset($_POST['address']) && $_POST['address']) {
			$message .= '<br>Место доставки автомобиля: '. trim(strip_tags($_POST['address']));
		}
		if (isset($_POST['price-total']) && $_POST['price-total']) {
			$message .= '<br>Итоговая стоимость: '. trim(strip_tags($_POST['price-total'])) .' рублей';
		}
		// ...другие необязательные поля из формы на сайте

		$subject = 'Новая заявка с сайта'; // тема письма
		$from = "no-reply@". $siteName; // адрес отправителя

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=UTF-8'."\r\n";
		$headers .= 'From: '. $from . "\r\n";

		if ($email_1) {
			$result = sendMail($email_1, $subject, $message, $headers);

			if ($result) {
				if ($email_2) {
					sleep(3);
					$result = sendMail($email_2, $subject, $message, $headers);
					if ($result) exit('success');
					else exit('error');
				}
				exit('success');
			}
			exit('error');
		}
		exit('error');
	}
}

exit('error');