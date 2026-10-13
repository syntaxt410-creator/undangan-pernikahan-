document.addEventListener("DOMContentLoaded", function() {
   
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestNameElement = document.getElementById('guest-name');
    
    if (guestName) {
        guestNameElement.textContent = decodeURIComponent(guestName);
    }

    const openBtn = document.getElementById('open-invitation');
    const coverSection = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');

    openBtn.addEventListener('click', function() {
        coverSection.style.transform = 'translateY(-100%)';
        coverSection.style.transition = 'transform 0.8s ease-in-out';
        
        setTimeout(() => {
            coverSection.classList.add('hidden');
            mainContent.classList.remove('hidden');
     
            bgMusic.play().catch(error => {
                console.log("Autoplay dicegah oleh browser:", error);
            });
        }, 800);
    });


   const weddingDate = new Date("October 18, 2026 08:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "<h3>Acara Sedang / Telah Berlangsung</h3>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }, 1000);
});s