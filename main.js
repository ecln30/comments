













const comment = document.querySelector("#root")
const sendBtn = document.querySelector(".send-btn")
const root = document.getElementById('root')

sendBtn.addEventListener("click", display)


async function getdata() {
    const response = await fetch("data.json")
    const data = await response.json()
    console.log(data.currentUser)
    load(data)
}
getdata()

function load(data) {

     console.log(data)
     const div = document.createElement("div")
     const user = document.querySelector('.name')
     const picture = document.querySelector(".pic")
     console.log(data.currentUser.username)
     console.log(data.currentUser.image);
     user.textContent = data.currentUser.username
     picture.src = data.currentUser.image.webp
        
}


function display() {
    console.log("display clicked")
    const currentUser = document.querySelector(".current-user")
    const inputValue = document.querySelector(".comment-Input").value
   
    root.innerHTML += `
    
    <div class="current-user">
    <div class="score">
      <img class="plus" src="./images/icon-plus.svg" alt="" >
       <h2>2</h2>
      <img class="minus" src="./images/icon-minus.svg" alt="" >

   </div>

   <div class="user-Box">

     <nav class="info">
       <div class="profile">

         <img class="pic" src="./images/avatars/image-juliusomo.webp" alt="">
         <h4 class="name">juliusomo</h4>
         <h4 class="you">you</h4>
         <h4 class="date">2 days ago</h4>

     </div>

       <div class="icons">
         
           <img class="del" src="./images/icon-delete.svg" alt="">
           <h4 class="del-txt">Delete</h4> 
        
          <img class="edit" src="./images/icon-edit.svg" alt="">
          <h4 class="edit-txt">Edit</h5>  

       </div>

     </nav>
      
      <textarea class="comment" >
        ${inputValue}
      </textarea>
   </div>
   </div>

  </div>
    
    `
    

}