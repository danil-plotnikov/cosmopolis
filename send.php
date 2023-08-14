<?php


//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5220980420:AAE-dOORo_S9buKpI01K2gejdKwchoyg_vY";

//Сюда вставляем chat_id
$chat_id = "-774860637";

//Определяем переменные для передачи данных из нашей формы

    $phone = ($_POST['phone']);
    $block = ($_POST['block']);
    $messenger = ($_POST['messenger']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Телефон:' => $phone,
        'Блок' => $block,
        'Способ связи' => $messenger,
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
     header('Location: thanks.html');
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo 'Ошибка';
    }


?>