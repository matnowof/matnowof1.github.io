if ('serviceWorker' in navigator) {
   window.addEventListener('load'), () => {
   navigator.serviceWorker
   .register('sw.js')
   .then(reg => console.log(service Worker: Registered))
   .catch(err => console.log('Service Worker: Error: ${err}'));
   });
}
