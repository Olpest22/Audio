let endentification;

Notification.requestPermission(function (result) {
    console.log(result);
    // granted — если пользователь разрешил уведомления, разрешение будет «предоставлено»;
    // denied — если пользователь запретил их, разрешение будет «отказано»;
    // default — если пользователь отклонил запрос, состояние останется «по умолчанию».
    endentification = result;
});

const messages = [
    {user: 'Валера', message: 'hi'},
    {user: 'Миша', message: 'hola'},
    {user: 'Олег', message: 'Когда вернёшь долг'},
    {user: 'Настя', message: 'Привет'},
    {user: 'Пётр', message: '😃'},
    {user: 'Глэк', message: 'Даб даб да'}
];

setInterval(() => {
    if (endentification !== 'granted') {
        return;
    }
    const index = Math.floor(Math.random() * messages.length);
    const message = messages[index];
    let notify = new Notification(`Вам сообщение от ${message.user}`, {
        tag: `chat-${message.user}`,
        body: message.message,
        icon: './gGg47zpipn2RdAQvJp-KBKKU80z9uu5k2cMhfOiyAwatYKhnhNOEV7G6K2x9XC9P4_jHSk7i1KJ4iDj9ZJ2TN_Q8.jpeg'
    });
}, 1500);
