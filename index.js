
    // Play audio on first interaction
    document.body.addEventListener('click', function() {
       var audio = document.getElementById('background-music');
       if (audio.paused) {
          audio.play();
       }
    });

    window.addEventListener('load', function() {
       const audio = document.getElementById('background-music');
       audio.muted = false; // Unmute the audio after the page loads
    });
    

onload = () => {
   const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");

      const titles = ('I LOVE U').split('')
      const titleElement = document.getElementById('title');
      let index = 0;

      function appendTitle() {
         if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 1000ms delay
         }
      }

      appendTitle();

      clearTimeout(c);
   }, 1000);
};


 