function openMenu(){
const body = document.body

body.classList.add("open")
}

function closeMenu(){
    const body = document.body

   body.classList.remove("open")
}

//template_eic28s7
//service_f4jfbvf
//zyNoGk1qjZ0y3lWnH

function sendEmail(event){
    event.preventDefault()

    emailjs.send("service_f4jfbvf", "template_eic28s7", event.target, "zyNoGk1qjZ0y3lWnH");

    
    