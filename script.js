// Função de Contagem Regressiva para o Aniversário dela
function updateBirthdayCountdown() {
    const birthdayDate = new Date("March 18, 2025 00:00:00").getTime(); // Aniversário dela
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("birthdayCountdown");
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const messageElement = document.getElementById("birthdayMessage");
    if (distance < 0) {
        countdownElement.innerHTML = "O aniversário chegou! 🎉";
        messageElement.innerHTML = "Feliz Aniversário, meu amor! 🎂💖";
        messageElement.style.display = "block";
    } else {
        messageElement.style.display = "none";
    }
}

// Função de Contagem Regressiva para o Aniversário de Namoro
function updateAnniversaryCountdown() {
    const today = new Date();
    const nextAnniversary = new Date(today.getFullYear(), today.getMonth(), 12); // 12 de cada mês

    if (today.getDate() > 12) {
        nextAnniversary.setMonth(today.getMonth() + 1); // Caso já tenha passado o dia 12, vai para o próximo mês
    }

    const distance = nextAnniversary.getTime() - today.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("anniversaryCountdown");
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const messageElement = document.getElementById("anniversaryMessage");
    if (distance < 0) {
        countdownElement.innerHTML = "O aniversário de namoro chegou! 💕";
        messageElement.innerHTML = "Feliz Aniversário de Namoro, meu amor! 💑💖";
        messageElement.style.display = "block";
    } else {
        messageElement.style.display = "none";
    }

    // Função para pedir permissão de notificações
function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                console.log("Permissão de notificações concedida!");
            } else {
                console.log("Permissão de notificações negada!");
            }
        });
    }
}

// Chama a função para pedir permissão quando o usuário carregar o site
requestNotificationPermission();

// Função para exibir notificações diárias
function sendDailyNotification() {
    // Checa se a permissão foi concedida
    if (Notification.permission === "granted") {
        // Cria a notificação diária
        new Notification("Bom dia, meu amor! 💖", {
            body: "Você é incrível e me faz muito feliz todos os dias! 😘",
            icon: "icon.png" // Adicione um ícone personalizado, se necessário
        });
    }
}

// Função para exibir notificação especial no aniversário dela e no aniversário de namoro
function sendSpecialNotification() {
    const today = new Date();
    
    // Notificação para o aniversário dela (18 de março)
    if (today.getMonth() === 2 && today.getDate() === 18) {
        if (Notification.permission === "granted") {
            new Notification("Feliz Aniversário, meu amor! 🎉", {
                body: "Você é a pessoa mais maravilhosa do mundo! 💖🎂",
                icon: "icon.png" // Adicione um ícone personalizado
            });
        }
    }
    
    // Notificação para o aniversário de namoro (12 de cada mês)
    if (today.getDate() === 12) {
        if (Notification.permission === "granted") {
            new Notification("Feliz Aniversário de Namoro! 💕", {
                body: "Cada dia ao seu lado é uma nova aventura de amor. Te amo! 💑",
                icon: "icon.png" // Adicione um ícone personalizado
            });
        }
    }
}

// Função para configurar notificações diárias e especiais
function setupNotifications() {
    // Notificação diária
    setInterval(sendDailyNotification, 86400000); // 24 horas = 86400000 ms
    
    // Enviar notificações especiais (verifica diariamente)
    setInterval(sendSpecialNotification, 86400000); // 24 horas = 86400000 ms
}

// Chama a função de configuração assim que o site for carregado
setupNotifications();

}

// Atualizando as contagens regressivas a cada segundo
setInterval(updateBirthdayCountdown, 1000);
setInterval(updateAnniversaryCountdown, 1000);
