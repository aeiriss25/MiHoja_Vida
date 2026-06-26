document.addEventListener('DOMContentLoaded', () => {
    const botonesPestana = document.querySelectorAll('.tab-btn');
    const panelesContenido = document.querySelectorAll('.tab-panel');

    botonesPestana.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesPestana.forEach(btn => btn.classList.remove('active'));
            panelesContenido.forEach(panel => panel.classList.remove('active'));

            boton.classList.add('active');
            
            const idPanel = boton.getAttribute('data-tab');
            const panelObjetivo = document.getElementById(idPanel);
            if (panelObjetivo) {
                panelObjetivo.classList.add('active');
            }
        });
    });

    const botonesCopiar = document.querySelectorAll('.action-btn');
    const toast = document.getElementById("toast-alert");

    botonesCopiar.forEach(boton => {
        boton.addEventListener('click', () => {
            const textoACopiar = boton.getAttribute('data-copy');
            const tipoDato = boton.getAttribute('data-type');

            if (textoACopiar) {
                navigator.clipboard.writeText(textoACopiar).then(() => {
                    if (toast) {
                        toast.innerText = `¡${tipoDato} copiado!`;
                        toast.classList.add("show");
                        setTimeout(() => { 
                            toast.classList.remove("show"); 
                        }, 2500);
                    }
                }).catch(err => {
                    console.error('Error al intentar copiar el texto: ', err);
                });
            }
        });
    });
});