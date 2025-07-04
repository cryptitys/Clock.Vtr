function updateClock() {
    const now = new Date();
    
    // Formatação do tempo
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Formatação da data
    const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const weekday = weekdays[now.getDay()];
    const day = now.getDate();
    const month = now.toLocaleString('pt-BR', { month: 'long' });
    const year = now.getFullYear();
    
    // Atualiza os elementos HTML
    document.getElementById('time').innerHTML = `
        <span class="hours">${hours}</span>
        <span class="separator">:</span>
        <span class="minutes">${minutes}</span>
        <span class="separator">:</span>
        <span class="seconds">${seconds}</span>
    `;
    
    document.getElementById('date').textContent = `${day} de ${month} de ${year}`;
    document.getElementById('weekday').textContent = weekday;
    
    // Atualiza a cada segundo
    setTimeout(updateClock, 1000);
}

// Inicia o relógio
updateClock();
