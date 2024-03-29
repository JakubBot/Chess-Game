export default function LocalServiceWorkerRegister() {
  const swPath = `${process.env.PUBLIC_URL}/sw-build.js`;
  if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'production') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(swPath);
    });
  }
}
