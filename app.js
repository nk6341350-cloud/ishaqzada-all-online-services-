let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e});
document.getElementById("installBtn").addEventListener("click",async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else alert("د نصب اختیار د موبایل له براوزر څخه وکاروئ.")});
document.querySelectorAll(".service").forEach(b=>b.addEventListener("click",()=>{alert("دا خدمت به وروسته د خپل اصلي فایل سره وصل شي.")}));
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
