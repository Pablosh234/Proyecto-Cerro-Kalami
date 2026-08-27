const menuBtn=document.querySelector('.menu-btn'); const navLinks=document.querySelector('.nav-links');
if(menuBtn) menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const video=document.querySelector('video'), placeholder=document.querySelector('.video-placeholder');
if(video&&placeholder){video.addEventListener('loadeddata',()=>placeholder.style.display='none');video.addEventListener('error',()=>placeholder.style.display='flex');}
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.closest('.prompt-card').querySelector('code').innerText);btn.textContent='Copiado ✓';setTimeout(()=>btn.textContent='Copiar',1200)}catch(e){}}));
