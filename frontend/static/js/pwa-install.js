let deferredPrompt = null;

document.addEventListener("DOMContentLoaded", () => {

    // Espera o browser permitir a instalação
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;

        const toast = document.getElementById('pwa-toast');
        if (toast) {
            toast.style.display = 'flex';
        }
    });

    const btnInstall = document.getElementById("btn-install");
    const btnClose = document.getElementById("btn-close-toast");
    const toast = document.getElementById('pwa-toast');

    // Usuário clicou no botão Instalar
    if (btnInstall) {
        btnInstall.addEventListener("click", async () => {
            if (!deferredPrompt) return;

            deferredPrompt.prompt();
            const result = await deferredPrompt.userChoice;

            if (result.outcome === "accepted") {
                console.log("Usuário instalou o app");
            } else {
                console.log("Usuário cancelou a instalação");
            }

            deferredPrompt = null;

            if (toast) {
                toast.style.display = 'none';
            }
        });
    }

    // Botão fechar
    if (btnClose) {
        btnClose.addEventListener("click", () => {
            if (toast) {
                toast.style.display = 'none';
            }
        });
    }
});
