document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;

  const hero = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    if (!hero) return;
    const sc = window.scrollY;
    hero.style.backgroundPositionY = (sc * 0.2) + 'px';
  });

  const track = document.querySelector('.carousel-track');
  if (track) {
    const prev = document.querySelector('.carousel-btn.prev');
    const next = document.querySelector('.carousel-btn.next');
    let idx = 0;
    const cards = [...track.children];
    function show(i){
      idx = (i + cards.length) % cards.length;
      const gap = parseInt(getComputedStyle(track).gap) || 14;
      const w = cards[0].clientWidth + gap;
      track.style.transform = `translateX(-${idx * w}px)`;
    }
    prev?.addEventListener('click', ()=> show(idx-1));
    next?.addEventListener('click', ()=> show(idx+1));
    window.addEventListener('resize', ()=> show(idx));
  }
});
