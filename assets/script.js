const d=window.INVITATION;
const $=id=>document.getElementById(id);
const set=(id,value)=>{if($(id))$(id).textContent=value??"";};
set("openingTitle",d.openingTitle);
set("coverGroom",d.groomName);set("coverBride",d.brideName);set("coverDate",d.eventDateShort);
set("heroGroom",d.groomName);set("heroBride",d.brideName);set("heroDate",(d.eventDay+", "+d.eventDate).toUpperCase());
set("brideFullName",d.brideFullName);set("groomFullName",d.groomFullName);
set("brideParents",d.brideParents);set("groomParents",d.groomParents);
set("eventType",(d.eventType||"Akad Nikah").toUpperCase());set("eventDate",d.eventDay+", "+d.eventDate);
set("eventTime",d.eventTime);set("eventAddress",(d.addressLines||[]).join("\\n"));
set("announcementText",d.announcementText);set("quote","“"+d.quote+"”");set("quoteReference",d.quoteReference);
document.getElementById("signature").innerHTML = '<span class="signature-name">FACHRI</span><span class="signature-ampersand">&</span><span class="signature-name">'+d.brideName+'</span>';set("footerNames",(d.groomName+" & "+d.brideName+" · "+d.eventDate).toUpperCase());
set("monogram",(d.groomName||"N").charAt(0).toUpperCase()+"&"+(d.brideName||"N").charAt(0).toUpperCase());
$("mapsLink").href=d.mapsUrl||"#";
$("eventAddress").innerHTML=(d.addressLines||[]).map(x=>escapeHtml(x)).join("<br>");
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
const banks=$("bankList");
banks.innerHTML="";
(d.bankAccounts||[]).filter(b=>b.number&&b.number!=="0000000000").forEach(b=>{
 const card=document.createElement("div");card.className="bank-card";
 card.innerHTML=`<div class="bank-heading"><strong>${escapeHtml(b.bank)}</strong><span>WEDDING GIFT</span></div><div class="account-number">${escapeHtml(b.number)}</div><div class="account-owner">a.n. ${escapeHtml(b.owner)}</div><button class="copy-button" type="button">Salin nomor rekening</button>`;
 card.querySelector("button").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(b.number);toast("Nomor rekening berhasil disalin.");}catch(e){toast("Nomor rekening: "+b.number);}});
 banks.appendChild(card);
});
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2500);}
const params=new URLSearchParams(location.search);if(params.get("to"))set("guestName",params.get("to"));
const audio=$("music");let playing=false;
$("openButton").addEventListener("click",()=>{$("opening").classList.add("closed");audio.play().then(()=>{playing=true;$("musicButton").innerHTML='♫ <span>Musik menyala</span>';}).catch(()=>toast("Tambahkan assets/music.mp3 untuk musik latar."));});
$("musicButton").addEventListener("click",()=>{if(playing){audio.pause();playing=false;$("musicButton").innerHTML='♫ <span>Putar musik</span>';}else{audio.play().then(()=>{playing=true;$("musicButton").innerHTML='♫ <span>Musik menyala</span>';}).catch(()=>toast("Tambahkan assets/music.mp3 terlebih dahulu."));}});
const target=new Date(d.eventDateISO).getTime();
function countdown(){let ms=Math.max(0,target-Date.now());let vals=[Math.floor(ms/86400000),Math.floor(ms/3600000)%24,Math.floor(ms/60000)%60,Math.floor(ms/1000)%60];["days","hours","minutes","seconds"].forEach((id,i)=>set(id,String(vals[i]).padStart(2,"0")));}
countdown();setInterval(countdown,1000);
