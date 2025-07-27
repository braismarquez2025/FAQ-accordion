document.addEventListener('DOMContentLoaded', function () {
    const preguntas = document.querySelectorAll('.pregunta');

    preguntas.forEach(pregunta => {
        const head = pregunta.querySelector('.pregunta_head');
        const icon = pregunta.querySelector('.pregunta_head-img');
        const title = pregunta.querySelector('.pregunta_head-title');

        head.addEventListener('click', () => {
        const abierta = pregunta.classList.contains('abierta');

        // Cierra todas
        preguntas.forEach(p => {
            p.classList.remove('abierta');
            const img = p.querySelector('.pregunta_head-img');
            if (img) img.src = "images/icon-plus.svg";
        });

        // Si no estaba abierta, la abrimos y cambiamos icono
        if (!abierta) {
            pregunta.classList.add('abierta');
            icon.src = "images/icon-minus.svg";
            title.style.color = "#AD28EB";
        }
        });
    });
});
