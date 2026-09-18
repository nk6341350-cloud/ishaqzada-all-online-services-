const modal=document.getElementById('modal'),title=document.getElementById('modalTitle');
document.querySelectorAll('.service').forEach(b=>b.onclick=()=>{title.textContent=b.querySelector('b').textContent;modal.hidden=false});
document.getElementById('registerBtn').onclick=()=>{title.textContent='ځان ثبت کړئ';modal.hidden=false};
document.getElementById('ok').onclick=()=>modal.hidden=true;modal.onclick=e=>{if(e.target===modal)modal.hidden=true};
