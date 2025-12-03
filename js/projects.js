const projects = [
  {
    id:'alpha',
    name:'Proyecto Alpha',
    desc:'RPG narrativo con enfoque en elecciones morales. Estado: En desarrollo.',
    images:['assets/project1.jpg'],
    platforms:['PC','Consola']
  },
  {
    id:'neon',
    name:'Project Neon',
    desc:'FPS cooperativo con estética cyberpunk. Estado: Próximamente.',
    images:['assets/project2.jpg'],
    platforms:['PC']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projectsGrid');
  if (grid){
    projects.forEach(p=>{
      const el = document.createElement('div');
      el.className = 'card project';
      el.innerHTML = `
        <img src="${p.images[0]}" alt="${p.name}" style="width:100%;height:160px;object-fit:cover">
        <div class="card-body">
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
          <div style="display:flex;gap:8px;margin-top:8px">
            <button class="btn open" data-id="${p.id}">Ver</button>
          </div>
        </div>
      `;
      grid.appendChild(el);
    });

    document.querySelectorAll('.btn.open').forEach(btn=>{
      btn.addEventListener('click', (ev)=>{
        const id = ev.currentTarget.dataset.id;
        const p = projects.find(x=>x.id===id);
        openModal(p);
      });
    });
  }

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function openModal(p){
    modalBody.innerHTML = `
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${p.platforms.map(x=>`<span style="padding:6px 10px;background:#0c0f18;border-radius:8px">${x}</span>`).join('')}
      </div>
      <div style="margin-top:12px">${p.images.map(i=>`<img src="${i}" style="width:100%;max-height:360px;object-fit:cover;margin-top:10px;border-radius:8px">`).join('')}</div>
    `;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  }

  modalClose?.addEventListener('click', ()=>{
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  });
  modal?.addEventListener('click', (e)=>{ if(e.target === modal){ modal.classList.remove('show'); }});
});
