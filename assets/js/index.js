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
    display.style.display="block"
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
            liName.innerHTML =    '<span class="ok">Name</span>'+'<span>: </span>'+ obj.name
            liUserName.innerHTML ='<span class="ok">UserName</span> '+'<span>: </span>' +obj.username
            liEmail.innerHTML =   '<span class="ok">Email</span>'+'<span>: </span>' +  obj.email
            liAdress.innerHTML =  '<span class="ok">Address</span>'+'<span>: </span>' + obj.address
            liPhone.innerHTML =   '<span class="ok">Phone</span>'+'<span>: </span>' + obj.phone
            liWebsite.innerHTML = '<span class="ok">Website</span>'+'<span>: </span>' + obj.website
            liCompany.innerHTML = '<span class="ok">Company</span>'+'<span>: </span>' + obj.company

            
        // Alignement de tous les deux points
           window.addEventListener('resize',function(){
            if (window.innerWidth <=600){
                address.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="31px"
                    
                });
                phone.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="41.5px"
                    
                });
                website.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="30.5px"
                    
                });
                company.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="18px"
                    
                });   
            }
           })
            
                address.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="27px"
                    
                });
                phone.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="41px"
                    
                });
                website.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="27px"
                    
                });
                company.forEach(add => {
                    enfant =add.querySelector('.ok')
                    enfant.style.marginRight="10px"
                    
                });
            }
           
            

    });
    
    let loader = document.querySelector('.loader').remove()
}, 2000);

