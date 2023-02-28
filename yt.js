
const isLoaded = new Promise((resolve,reject)=>{
let isExist = document.body.contains(document.querySelector("#owner"))
  if(isExist == true){
  setTimeout(()=>resolve(document.querySelector("#owner")),1500)
  
  }else{
  
  reject("Brak elementu!")
  }

})

isLoaded.then(owner=>{
  let btn= document.createElement("button")
  btn.textContent = "Skip Ads"
  btn.style.border = "none"
  btn.style.fontSize = "1.5rem"
  btn.style.padding = "0 16px"
  
btn.style.setProperty("background-color","var(--yt-live-chat-enabled-send-button-color)")
btn.style.setProperty("color","var(--yt-spec-text-primary-inverse)")
  btn.style.height = "36px"
  btn.style.lineHeight = "36px"
  btn.style.marginLeft = "1rem"
  btn.style.cursor = "pointer"
owner.appendChild(btn)
btn.addEventListener('click',()=>{
    document.querySelector("video").playbackRate = 16
})
} ).catch(err=>console.log(err))

