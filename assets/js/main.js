window.addEventListener('scroll', function () {
  const baja = window.pageYOffset || document.documentElement.scrollTop,
  nav = document.getElementById('navegador');
  
  if (baja > 65) {
    nav.classList.add('fondo-blanco');
    document.getElementById('logo-id').classList.add('logo-pink');
    document.getElementById('drive').classList.add('link-gris');
    document.getElementById('explore').classList.add('link-gris');
    document.getElementById('help').classList.add('link-gris');
    document.getElementById('log').classList.add('borde-gris');
    document.getElementById('sign').classList.add('sign-rosa');
  } else {
    nav.classList.remove('fondo-blanco');
    document.getElementById('logo-id').classList.remove('logo-pink');
    document.getElementById('drive').classList.remove('link-gris');
    document.getElementById('explore').classList.remove('link-gris');
    document.getElementById('help').classList.remove('link-gris');
    document.getElementById('log').classList.remove('borde-gris');
    document.getElementById('sign').classList.remove('sign-rosa');
  }
});