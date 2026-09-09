<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Замовлення товару</title>
</head>
<body>

    <h1>Замовлення товару</h1>

    <form>

        <label for="name">Ім'я покупця</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Введіть ім'я"
            required
        >

        <br><br>

        <label for="surname">Прізвище</label>
        <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Введіть прізвище"
            required
        >

        <br><br>

        <label for="email">Електронна пошта</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Введіть email"
            required
        >

        <br><br>

        <label for="phone">Номер телефону</label>
        <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Введіть номер телефону"
            required
        >

        <br><br>

        <label for="quantity">Кількість товару</label>
        <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="10"
        >

        <br><br>

        <label for="address">Адреса доставки</label>
        <input
            type="text"
            id="address"
            name="address"
            placeholder="Введіть адресу доставки"
            minlength="10"
        >

        <br><br>

        <p>Спосіб доставки:</p>

        <input type="radio" name="delivery" value="pickup" required>
        Самовивіз

        <input type="radio" name="delivery" value="postomat">
        Поштомат

        <input type="radio" name="delivery" value="courier">
        Кур'єр

        <br><br>

        <p>Додаткові параметри:</p>

        <input type="checkbox" name="gift" value="gift">
        Подарункова упаковка

        <input type="checkbox" name="warranty" value="warranty">
        Додаткова гарантія

        <input type="checkbox" name="sms" value="sms">
        SMS-повідомлення

        <input type="checkbox" name="call" value="call">
        Телефонний дзвінок перед доставкою

        <br><br>

        <label for="payment">Спосіб оплати</label>

        <select name="payment" id="payment">
            <option value="card">Оплата карткою</option>
            <option value="cash">Оплата при отриманні</option>
            <option value="bank">Банківський переказ</option>
        </select>

        <br><br>

        <label for="comment">Коментар до замовлення</label>

        <br>

        <textarea
            name="comment"
            id="comment"
            cols="50"
            rows="10"
            maxlength="200"
            placeholder="Введіть коментар"
        ></textarea>

        <br><br>

        <button type="submit">Відправити</button>
        <button type="reset">Очистити</button>

    </form>

</body>
</html>
