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

setTimeout(() => {
    let loader = document.querySelector('.loader').remove()
    fetch("./assets/user.json")
.then(res => res.json())
.then(user => {
    for (let k = 0 ; k<user.length;k++){
        let obj = user [k] 
        
        create()
        btn.addEventListener('click',function(){
            document.querySelectorAll('button').forEach(element4=>{
                element4.title="afficher plus de resultat"
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
            document.querySelectorAll('.phone').forEach(element2=>{
                element2.classList.toggle('toggle')
            })
            document.querySelectorAll('.Company').forEach(element3=>{
                element3.classList.toggle('toggle')
            })
        })           
        img.src = "./assets/img/user-avatar.png"
        liName.innerHTML =    '<span class="ok">Name</span>'+'<span>: </span>'+ obj.name
        liUserName.innerHTML ='<span class="ok">UserName</span> '+'<span>: </span>' +obj.username
        liEmail.innerHTML =   '<span class="ok">Email</span>'+'<span>: </span>' +  obj.email
        liAdress.innerHTML =  '<span class="ok">Address</span>'+'<span>: </span>' + obj.address
        liPhone.innerHTML =   '<span class="ok">Phone</span>'+'<span>: </span>' + obj.phone
        liWebsite.innerHTML = '<span class="ok">Website</span>'+'<span>: </span>' + obj.website
        liCompany.innerHTML = '<span class="ok">Company</span>'+'<span>: </span>' + obj.company
    }
});
    
}, 5000);