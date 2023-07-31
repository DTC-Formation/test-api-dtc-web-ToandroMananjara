let liName
let liUserName
let liEmail
let liAdress
let liPhone
let liWebsite
let liCompany
let img
let btn 


// la fonction qui cree tous les contenu html 
function create(){
    let containerItem=document.createElement('div') // creation div container-item
    containerItem.classList.add('container-item')
    document.querySelector('body').appendChild(containerItem)
    img=document.createElement('img')
    
    let imgContainer=document.createElement('div') // creation div img-container
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(img)
    
    let about = document.createElement('div')      // creation div about
    about.classList.add('about')
    
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

    liPhone = document.createElement('li')
    
    liWebsite = document.createElement('li')
    
    liCompany = document.createElement('li')
    
    ul.append(liName,liUserName,liEmail,liAdress,liPhone,liWebsite,liCompany)

    btn = document.createElement("button")
    btn.innerHTML = '<i class="fa-regular fa-eye"></i>'
    containerItem.appendChild(btn)
    
}
function displayNone(display){
    display.style.display="none"
}

function displayBlock(display){
    display.style.display="flex"
}

let bt = []         // on va recuperer tous les boutons dans le tableau bt 
let address = []    // on va recuperer tous les li address dans le tableau bt
let phone = []      // on va recuperer tous les li phone dans le tableau bt
let website = []    // on va recuperer tous les li website dans le tableau bt
let company = []    // on va recuperer tous les li company dans le tableau bt

setTimeout(() => {
    
    fetch("./assets/user.json")
    .then(res => res.json())
    .then(user => {
        for (let k = 0 ; k<user.length;k++){
            let obj = user [k] 
            
            create()

            btn.classList.add(`btn${k}`)

            liAdress.classList.add(`address${k}`)
            liPhone.classList.add(`phone${k}`)
            liWebsite.classList.add(`website${k}`)
            liCompany.classList.add(`company${k}`)

            bt[k]=document.querySelector(`.btn${k}`)

            address[k]=document.querySelector(`.address${k}`)
            displayNone(address[k])
            
            phone[k]=document.querySelector(`.phone${k}`)
            displayNone(phone[k])

            website[k]=document.querySelector(`.website${k}`)
            displayNone(website[k])

            company[k]=document.querySelector(`.company${k}`)
            displayNone(company[k])

            bt[k].addEventListener('click',function(){
                console.log('mandeha');
                
        
                if(bt[k].innerHTML=='<i class="fa-regular fa-eye"></i>' ){
                    bt[k].innerHTML='<i class="fa-regular fa-eye-slash"></i>'
                    displayBlock(address[k])
                    displayBlock(phone[k])
                    displayBlock(website[k])
                    displayBlock(company[k])
                }
                else if(bt[k].innerHTML=='<i class="fa-regular fa-eye-slash"></i>' ){
                    bt[k].innerHTML='<i class="fa-regular fa-eye"></i>'
                    displayNone(address[k])
                    displayNone(phone[k])
                    displayNone(website[k])
                    displayNone(company[k])
                }
               
                
            
                
        })
        
            img.src = "./assets/img/user-avatar.png"
            liName.innerHTML =    '<h6 class="ok">Name</h6>'+'<span>: </span>'+ obj.name
            liUserName.innerHTML ='<h6 class="ok">UserName</h6> '+'<span>: </span>' +obj.username
            liEmail.innerHTML =   '<h6 class="ok">Email</h6>'+'<span>: </span>' +  obj.email
            liAdress.innerHTML =  '<h6 class="ok">Address</h6>'+'<span>: </span>' + obj.address
            liPhone.innerHTML =   '<h6 class="ok">Phone</h6>'+'<span>: </span>' + obj.phone
            liWebsite.innerHTML = '<h6 class="ok">Website</h6>'+'<span>: </span>' + obj.website
            liCompany.innerHTML = '<h6 class="ok">Company</h6>'+'<span>: </span>' + obj.company

            
        }   
    })
    document.querySelector('.loader').remove()
}, 2000);

