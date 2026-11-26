const audio=document.getElementById('weddingMusic');
const openButton=document.getElementById('openButton');
const opening=document.getElementById('opening');
const musicButton=document.getElementById('musicButton');
let isPlaying=false;
async function playMusic(){
  try{await audio.play();isPlaying=true;musicButton.innerHTML='♫ <span>Musik menyala</span>';}
  catch(e){isPlaying=false;musicButton.innerHTML='♫ <span>Tambahkan musik MP3</span>';showToast('Tambahkan file assets/music.mp3 untuk mengaktifkan musik.');}
}
openButton.addEventListener('click',()=>{opening.classList.add('closed');playMusic();});
musicButton.addEventListener('click',()=>{if(isPlaying){audio.pause();isPlaying=false;musicButton.innerHTML='♫ <span>Putar musik</span>';}else{playMusic();}});
document.querySelectorAll('.copy-button').forEach(btn=>btn.addEventListener('click',async()=>{
  const value=btn.dataset.account;
  try{await navigator.clipboard.writeText(value);showToast('Nomor rekening berhasil disalin.');}
  catch(e){showToast('Nomor rekening: '+value);}
}));
function showToast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600);}
const weddingDate=new Date('2026-12-18T00:00:00+07:00').getTime();
function updateCountdown(){
 const remaining=Math.max(0,weddingDate-Date.now());
 const values=[Math.floor(remaining/86400000),Math.floor(remaining/3600000)%24,Math.floor(remaining/60000)%60,Math.floor(remaining/1000)%60];
 ['days','hours','minutes','seconds'].forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,'0'));
}
updateCountdown();setInterval(updateCountdown,1000);
const params=new URLSearchParams(location.search);
if(params.get('to'))document.getElementById('guestName').textContent=params.get('to');
