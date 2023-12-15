const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
const click  = document.getElementById("color-btn")
click.addEventListener("click",()=> {
    const a =  document.getElementById("rainbow")
    a.style.background = `${colorArray[Math.floor(Math.random() *5)]}`
    // console.log("click")
})
const clickBackpack = document.getElementById("add-btn")
clickBackpack.addEventListener("click",()=>{
    const input = document.getElementById("item-input")
    console.log(input.value)
    const list = document.getElementById("listItem")
    const li = document.createElement("li")
    li.textContent = `${input.value}`
    list.appendChild(li)
})  

function userCheck (user){
    if (user.length < 5){
        return undefined
    }
    let UpperCheck = 0
    let numCheck = 0
    for (let i=0;i< user.length;i++){
        if(user[i] === "1" || user[i] === "2"|| user[i] === "3"|| user[i] === "4"|| user[i] ==="5"|| user[i] ==="6"|| user[i] ==="7"|| user[i] ==="8"|| user[i] ==="9"|| user[i] ==="0"){
            numCheck = 1
            continue
        }
        if (user[i].toLowerCase() === user[i].toUpperCase()){
            return undefined
        }
        else if (user[i] === user[i].toUpperCase()){
            UpperCheck = 1
        }
        else if (user[i] === user[i].toLowerCase()){

        }
        else {
            return undefined
        }
    }
    if (UpperCheck === 1 && numCheck === 1){
        return user 
    }
    return false
}
function emailCheck(email){
    let at = 0
    let com = 0
    if(email.endsWith(".com")){
        com = 1
    }
    for (let i=0;i< email.length;i++){
        if(email[i] === "@"){
            at = 1
        }
    }
    if(at === 1 && com === 1){
        return email
    }
    return undefined
}
function password(pw){
    let upper = 0
    let lower = 0
    let spec = 0
    let num = 0
    if (pw.length < 8){
        return undefined
    }
    for(let i = 0;i<pw.length;i++){
        if (pw[i].toLowerCase() === pw[i].toUpperCase()){
            if(pw[i] === "1" || pw[i] === "2"|| pw[i] === "3"|| pw[i] === "4"|| pw[i] ==="5"|| pw[i] ==="6"|| pw[i] ==="7"|| pw[i] ==="8"|| pw[i] ==="9"|| pw[i] ==="0"){
            num = 1
            continue
            }
            spec =1
            continue
        }
        if (pw[i] === pw[i].toLowerCase()){
            lower = 1
        }
        if(pw[i] === pw[i].toUpperCase()){
            upper = 1
        }
    }
    if (upper === 1 && lower === 1&& spec === 1&& num === 1){
        return pw
    }
    return undefined
}
const clickEnter = document.getElementById("submit-btn")
clickEnter.addEventListener("click",(event)=>{
    event.preventDefault()
    const listInput = document.getElementById("input-list")
    const insertP = listInput.querySelector("[class='error']")
    const un = document.querySelector("[placeholder='username']").value
    const em = document.querySelector("[placeholder='email']").value
    const pwd = document.querySelector("[placeholder='password']").value
    if (userCheck(un) === undefined){
    insertP.textContent = 'invaild username'
    }
    else if (emailCheck(em) === undefined){
    insertP.textContent = 'invaild email'
    }
    else if (password(pwd) === undefined){
    insertP.textContent = 'invaild password'
    }
    else 
    insertP.textContent = 'successfully'
})
