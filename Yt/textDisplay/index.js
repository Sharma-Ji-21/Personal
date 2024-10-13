containerEl=document.querySelector(".container")

const name=["My Self Om","Here are My Friends:","Yug","Sneha","Riya","Sristy"];
nameIndex=0;
charIndex=0;


updateText()
function updateText(){
    containerEl.innerHTML =`
    <h1>${name[nameIndex].slice(0,charIndex)}</h1>
    `;
    if(charIndex===name[nameIndex].length){
        charIndex=-1;
        nameIndex++;
    }
    charIndex++;
    if(nameIndex==name.length){
        nameIndex=0;
    }
    setTimeout(updateText, 300);
}