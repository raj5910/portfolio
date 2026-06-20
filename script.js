const words=['Web Developer','Web Designer','Firebase Developer'];
let i=0,j=0,current='',isDeleting=false;
function type(){
current=words[i];
document.getElementById('typing').textContent=current.substring(0,j);
if(!isDeleting){j++; if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}}
else{j--; if(j===0){isDeleting=false;i=(i+1)%words.length;}}
setTimeout(type,isDeleting?50:100);
}
type();
