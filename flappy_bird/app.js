window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Настройка стилей
    ctx.fillStyle = '#ccff00'; // Зеленый цвет
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;

    // Рисуем форму
    ctx.beginPath();
    ctx.moveTo(50, 150); // Начало слева
    ctx.lineTo(50, 300); // Линия вниз
    ctx.lineTo(350, 300); // Линия вправо
    ctx.lineTo(350, 150); // Линия вверх
    ctx.quadraticCurveTo(200, 0, 50, 150); // Кривая вверху
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


    // Рисуем изображение (пример)
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 100, 200, 200, 300);
    };
    img.src = 'path/to/image.jpg'; // Замените на фактический путь к изображению
};