console.log("hello am here");
console.log(emojiList);
let emoji_container=document.getElementById('emoji_container');
let inputdata=document.getElementById("inputdata");
function displayemoji(query='') {
    let filtredData=emojiList.filter(e=>{
        if(e.description.indexOf(query)!=-1){
            return true;
        }
        if(e.aliases.find(elem=>elem===query)){
            return true;
        }
        if(e.tags.find(elem=>elem===query)){
            return true;
        }
    })
    emoji_container.innerHTML=``
    filtredData.forEach(e=>{
       let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        new_emoji.style.fontSize="30px"
        new_emoji.style.width="200px"
        let new_aliases = document.createElement("td");
        new_aliases.style.fontSize="30px"
        let new_description = document.createElement("td");
        new_description.style.fontSize="30px"

        new_emoji.innerText=e.emoji;
        new_aliases.innerText=e.aliases;
        new_description.innerText=e.description;
        
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_description);
        emoji_container.appendChild(new_row)
        console.log(emoji_container);
    })
 
}
function searchData(e){
    // e.preventDefault()
    let value=e.target.value;
    console.log(value);
    displayemoji(value)
}
window.addEventListener('load',displayemoji);
inputdata.addEventListener('keyup',searchData)
 window.onload=()=>displayemoji() // when window is first-time loade that time its show empty displayemoji