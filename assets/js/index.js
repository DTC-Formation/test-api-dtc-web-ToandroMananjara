let liName
let liUserName
let liEmail
let liAdress
let liPhone
let liWebsite
let liCompany
let img
let btn

function create(){
    let containerItem=document.createElement('div')
    containerItem.classList.add('container-item')
    document.querySelector('body').appendChild(containerItem)
    img=document.createElement('img')
    
    let imgContainer=document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(img)
    
    let about = document.createElement('div')
    about.classList.add('about')
    
    h1 = document.createElement('h1')
    
    containerItem.append(imgContainer,about)
    
    
    let ul=document.createElement('ul')
    about.appendChild(ul)
    
    liName = document.createElement('li')
    liName.classList.add('name')
    liUserName = document.createElement('li')
    liUserName.classList.add('user-name')
    liEmail = document.createElement('li')
    liEmail.classList.add('email')
    liAdress = document.createElement('li')
    liAdress.classList.add('address')
    liPhone = document.createElement('li')
    liPhone.classList.add('phone')
    liWebsite = document.createElement('li')
    liWebsite.classList.add('Website')
    liCompany = document.createElement('li')
    liCompany.classList.add('Company')
    ul.append(liName,liUserName,liEmail,liAdress,liPhone,liWebsite,liCompany)

     btn = document.createElement("button")
    btn.innerHTML = '<i class="fa-regular fa-eye"></i>'
    containerItem.appendChild(btn)
    
}

let clas  = "fa-regular fa-eye-slash"

fetch("./assets/user.json")
.then(res => res.json())
.then(user => {
    for (let k = 0 ; k<user.length;k++){
        let obj = user [k] 
        
        create()
        btn.addEventListener('click',function(){
            console.log('ok');
            document.querySelectorAll('button').forEach(element4=>{
                if(element4.innerHTML=='<i class="fa-regular fa-eye"></i>' ){
                    element4.innerHTML='<i class="fa-regular fa-eye-slash"></i>'
                }
                else if(element4.innerHTML=='<i class="fa-regular fa-eye-slash"></i>' ){
                    element4.innerHTML='<i class="fa-regular fa-eye"></i>'
                }
                  
            })          
            document.querySelectorAll('.address').forEach(element=>{
                element.classList.toggle('toggle')
            })
            document.querySelectorAll('.Website').forEach(element2=>{
                element2.classList.toggle('toggle')
            })
            document.querySelectorAll('.Company').forEach(element3=>{
                element3.classList.toggle('toggle')
            })
        })           
        img.src = "./assets/img/user-avatar.png"
        liName.innerHTML =    "<span>Name :</span> " + obj.name
        liUserName.innerHTML ="<span>UserName :</span> "+ obj.username
        liEmail.innerHTML =   "<span>Email    : </span>" +  obj.email
        liAdress.innerHTML =  "<span>Address  : </span>" + obj.address
        liPhone.innerHTML =   "<span>Phone    : </span>" +obj.phone
        liWebsite.innerHTML = "<span>Website  : </span>" + obj.website
        liCompany.innerHTML = "<span>Company  : </span>" + obj.company
    }
});
