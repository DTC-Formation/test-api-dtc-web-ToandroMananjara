let liName
let liUserName
let liEmail
let liAdress
let liPhone
let liWebsite
let liCompany
let img


function create(){
    let containerItem=document.createElement('div')
    containerItem.classList.add('container-item')
    document.getElementById('container').appendChild(containerItem)
    img=document.createElement('img')
    
    let imgContainer=document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(img)
    
    let about = document.createElement('div')
    about.classList.add('about')
    
    
    
    containerItem.append(imgContainer,about)
    
    let ul=document.createElement('ul')
    about.appendChild(ul)
    
    liName = document.createElement('li')
    liUserName = document.createElement('li')
    liEmail = document.createElement('li')
    liAdress = document.createElement('li')
    liPhone = document.createElement('li')
    liWebsite = document.createElement('li')
    liCompany = document.createElement('li')
    ul.append(liName,liUserName,liEmail,liAdress,liPhone,liWebsite,liCompany)
}

fetch("./assets/user.json")
.then(res => res.json())
.then(user => {
    for (let k = 0 ; k<user.length;k++){
        let obj = user [k] 
        
        create()

        img.src = "./assets/img/user-avatar.png"
        liName.innerHTML = "<span>Name : </span> " + obj.name
        liUserName.innerHTML = "<span>UserName :</span> "+ obj.username
        liEmail.innerHTML = "<span>Email : </span>" +  obj.email
        liAdress.innerHTML = "<span>Address : </span>" + obj.address
        liPhone.innerHTML = "<span>Phone : </span>" +obj.phone
        liWebsite.innerHTML = "<span>Website : </span>" + obj.website
        liCompany.innerHTML = "<span>Company : </span>" + obj.company
    }
});
