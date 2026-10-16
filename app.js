'use strict';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let toastTimer;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2500);}
$$('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
 const text=document.getElementById(button.dataset.copy).textContent;
 try{await navigator.clipboard.writeText(text);toast(button.dataset.copy==='bibtex'?'Citation copied':'Command copied');}
 catch{const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(document.getElementById(button.dataset.copy));selection.removeAllRanges();selection.addRange(range);toast('Text selected. Press Ctrl+C or ⌘C to copy.');}
}));
const dialog=$('#figure-dialog');let lastFigureButton;
$$('[data-figure]').forEach(button=>button.addEventListener('click',()=>{lastFigureButton=button;$('#large-figure').src=button.dataset.figure;$('#large-figure').alt=button.querySelector('img').alt;dialog.showModal();}));
$('#close-figure').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>lastFigureButton?.focus());
