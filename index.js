const movie = document.querySelector("#movie")
const row = document.querySelectorAll(".row");
const seat = document.querySelectorAll(".seat");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movvie = document.querySelector('#movie');
const showcase = document.querySelectorAll("ul>li>div")
const occupied = document.querySelectorAll(".occupied")
const btn = document.querySelector(".submit");




seat.forEach(item=>{
    if(item.className === "seat" && item.parentElement.parentElement.className !== "showcase" ) {


        item.addEventListener("click", e=>{
        


            if(item.style.backgroundColor === ""){
                
                item.style.backgroundColor = "#6feaf6"
    
                const countNum = parseInt(count.innerHTML);
                count.innerHTML = countNum+1
    
                const totalNum = parseInt(total.innerHTML);
                total.innerHTML = totalNum + parseInt(movvie.value);
    
     

                
                
            }else{
                item.style.backgroundColor = ""
    
                const countNum = parseInt(count.innerHTML);
                count.innerHTML = countNum-1
    
                const totalNum = parseInt(total.innerHTML);
                total.innerHTML = totalNum - parseInt(movvie.value)
    
    
            }
    }
)}


})
 

btn.addEventListener("click", e=>{
    
    seat.forEach(item=>{


        if(item.style.backgroundColor === "rgb(111, 234, 246)" && item.parentElement.parentElement.className !== "showcase"){

            item.style.backgroundColor = "#fff"

           item.style.pointerEvents = "none"

          localStorage.setItem("seat", item);

          const x =  localStorage.getItem("seat");

          
          

            count.innerHTML = "0"

            total.innerHTML = "0";
             


         };

      });

    });

    