let currentLang = "es";

function updateLang(){
  document.querySelectorAll("[data-es]").forEach(el=>{
    el.textContent = el.dataset[currentLang];
  });
  const btn=document.getElementById("langToggle");
  if(btn) btn.textContent = currentLang==="es"?"EN":"ES";
}

document.addEventListener("DOMContentLoaded",()=>{
  updateLang();
  const btn=document.getElementById("langToggle");
  if(btn){
    btn.onclick=()=>{
      currentLang = currentLang==="es"?"en":"es";
      updateLang();
    };
  }
});
