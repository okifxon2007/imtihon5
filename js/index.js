import { createCard, cred } from "./function.js";
let main = document.querySelector('.main2');
let dark = document.querySelector('.dark');
let container = document.querySelector('.container');
let header = document.querySelector('.header');
let h1 = document.querySelector('.h1');
let body = document.querySelector('.body');
let region = document.querySelector('#region')
let option = document.querySelector('.option')
let davlat = document.querySelector('.davlat')
let input = document.querySelector('.input')
let hit = document.querySelector('.h3')
let p = document.querySelectorAll('.p')
let main4 = document.querySelectorAll('.main4')
let inn = document.querySelector('#inn')
let click = document.querySelector('#click')




window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');

    loader.classList.add("loader-hidden");
    loader.addEventListener('transitionend', function () {
        
    })
})



region.addEventListener("change", function(){
let value = region.value

    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=${value}`)
.then(data=>data.json())
.then(data=>{
   main.innerHTML= ""
   data.data.forEach((arg)=>{
       let card = createCard(arg)
       main.innerHTML += card
})
.catch(err =>{
   console.log(err);
});
})
})

const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com";


document.addEventListener('DOMContentLoaded', function(){
    fetch(`${BASE_URL}/countries`,{
        method: 'GET'
    })
    
     
         .then(res =>{
            if (res.ok == true && res.status == 200) {
                return res.json()
            }
         })
         .then(data =>{
            console.log(data);
            if (data.data.length) {
                
                data.data.forEach((arg)=>{
                    let card = createCard(arg)
                    main.innerHTML += card
                })
        }
})
         .catch(err =>{
            console.log(42, err);
         });
         
         

        
})


    

dark && dark.addEventListener("click" ,function(e){
    e.preventDefault()
       header.classList.toggle("header-dMode");
       header.classList.toggle("main-dMode");
       document.body.classList.toggle("main-dMode")
       if(header.classList.contains("header-dMode")){
           dark.classList.add("fa-solid")
           dark.classList.remove("fa-regular")
       }
       else{
        dark.classList.add("fa-regular")
        dark.classList.remove("fa-solid")
       }
    
     if(header.classList.contains("header-dMode")){
          input.classList.add("second-input")
          input.classList.remove("inputt")
          header.style.backgroundColor = '#2B3844'
          region.style.backgroundColor = '#2B3844'
          region.style.color = 'white'
          body.style.backgroundColor = '#2B3844'
          header.style.color = 'white'
          dark.style.color = 'white'
          h1.style.color ='white'
          input.style.backgroundColor = '#2B3844'
          input.style.color = 'white'
          region.style.color = 'white'
          hit.style.color = ''
       

     }
     else{
        region.style.color = 'black'
        input.style.color = 'black'
        input.classList.add("inputt")
        input.classList.remove("second-input")
        header.style.backgroundColor = 'white'
        body.style.backgroundColor = 'white'
        header.style.color = 'balck'
        dark.style.color = 'black'
        h1.style.color ='black'
        region.style.backgroundColor = 'white'
        input.style.backgroundColor = 'white'

          
        
     }
    
     if(header.classList.contains("header-dMode")){
         select.classList.add("select-dark")
         select.classList.remove("select-mode")
         header.style.backgroundColor = 'white'
         davlat.style.backgroundColor = '#2B3844'
        
     }
     else{
        select.classList.add("select-mode")
        select.classList.remove("select-dark")
       
     }
    
     if(header.classList.contains("header-dMode")){
        main.style.color = 'black'
    }
    else{
        header.style.color = "black"
    }
    if(header.classList.contains("header-dMode")){
        header.style.backgroundColor = "#2B3844"
       
        
    }
    else{
        country.style.backgroundColor = "#000"
    
    }
    })

  

    inn.addEventListener("input", updateValue);
    function updateValue(e) {
    
        fetch(`${BASE_URL}/countries?search=${e.target.value}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => {
                main.innerHTML = '';
    
                result.data.forEach(data => {
                    let card = createCard(data);
                    main.innerHTML += card;
                });
            })
            .catch(err => {
                console.log(err);
            });
    }