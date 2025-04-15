const startDate = new Date("2022-08-11T21:00:00");

    function updateTimer() {
      const now = new Date();
      const diff = now - startDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30.4375);
      const years = Math.floor(months / 12);

      const monthsRemaining = months % 12;
      const daysRemaining = Math.floor(days % 30.4375);
      const hoursRemaining = hours % 24;
      const minutesRemaining = minutes % 60;
      const secondsRemaining = seconds % 60;

      document.getElementById("timer").textContent =
        `${years} anos, ${monthsRemaining} meses, ${daysRemaining} dias, ` +
        `${hoursRemaining} horas, ${minutesRemaining} minutos e ${secondsRemaining} segundos`;
    }

    function mostrarSite() {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("content").style.display = "block";
    }

    setInterval(updateTimer, 1000);
    updateTimer();