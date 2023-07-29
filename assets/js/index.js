let liName
let liUserName
let liEmail
let liAdress
let liPhone
let liWebsite
let liCompany

function create(){
    let container=document.createElement('div')
    container.classList.add('container')
    document.querySelector('body').appendChild(container)

    let imgContainer=document.createElement('div')
    imgContainer.classList.add('img-container')

    let img=document.createElement('img')
    let ul=document.createElement('ul')
    container.appendChild(ul)

    console.log(ul)

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
    // obj = user [j
    for (let k = 0 ; k<user.length;k++){
        let obj = user [k] 
        
        create()
        liName.innerHTML =obj.name
        liUserName.innerHTML = obj.username
        liEmail.innerHTML = obj.email
        liAdress.innerHTML = obj.address
        liPhone.innerHTML = obj.phone
        liWebsite.innerHTML = obj.website
        liCompany.innerHTML = obj.company
    }
    });


