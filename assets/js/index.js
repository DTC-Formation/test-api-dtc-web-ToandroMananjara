let liName
let liUserName
let liEmail
let liAdress
let liPhone
let liWebsite
let liCompany
let img
let span
let nom = "Name: "


function create(){
    let container=document.createElement('div')
    container.classList.add('container')
    document.getElementById('container').appendChild(container)
    img=document.createElement('img')
    
    let imgContainer=document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(img)
    
    let about = document.createElement('div')
    about.classList.add('about')
    
    
    
    container.append(imgContainer,about)
    
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

// // span=document.createElement('span')       
// // span.innerHTML ="nom"
// liName.appendChild(span)


fetch("./assets/user.json")
.then(res => res.json())
.then(user => {
    // obj = user [j
    for (let k = 0 ; k<user.length;k++){
        let obj = user [k] 
        
        create()
        
        img.src = "./assets/img/ZO.jpg"
        liName.innerHTML = "Name : "+ obj.name
        liUserName.innerHTML = "UserName : "+ obj.username
        liEmail.innerHTML = "Email : " +  obj.email
        liAdress.innerHTML = "Address : " + obj.address
        liPhone.innerHTML = "Phone : " +obj.phone
        liWebsite.innerHTML = "Website : " + obj.website
        liCompany.innerHTML = "Company : " + obj.company
    }
});
