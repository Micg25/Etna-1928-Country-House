// lightbox.js
document.addEventListener('DOMContentLoaded', () => {
  // Crea il markup del lightbox se non esiste
  if (!document.getElementById('lightbox')) {
    const lightboxDiv = document.createElement('div');
    lightboxDiv.id = 'lightbox';
    lightboxDiv.innerHTML = `
      <span class="close-btn" title="Chiudi">&times;</span>
      <img src="" alt="Immagine ingrandita" />
    `;
    document.body.appendChild(lightboxDiv);

    // Stili base per il lightbox
    const style = document.createElement('style');
    style.innerHTML = `
      #lightbox {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.9);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      #lightbox img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 12px;
        box-shadow: 0 0 20px #000;
      }
      #lightbox .close-btn {
        position: fixed;
        top: 20px;
        right: 30px;
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
      }
    `;
    document.head.appendChild(style);
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close-btn');

  // Apre lightbox al click di un'immagine
  document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Chiude lightbox
  const closeLightbox = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });
});
