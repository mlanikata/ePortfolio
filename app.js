function openMenu(){
const body = document.body

body.classList.add("open")
}

function closeMenu(){
    const body = document.body

   body.classList.remove("open")
}

//template_eb0nrkt
//service_f4jfbvf
//zyNoGk1qjZ0y3lWnH

async function sendEmail(event){
    event.preventDefault();
    const body = document.body;
    const loading = document.querySelector('.contact__form__loading');
const form = document.querySelector('.contact__form')

try{
    // Loading state
loading.classList.remove('hiddnen');

await emailjs.sendForm(
       "service_f4jfbvf", 
       "template_eb0nrkt", 
       event.target, 
       "zyNoGk1qjZ0y3lWnH"
   );

//Success state
form.reset();
loading.classList.add("hidden")
body.classList.add("success-open")
setTimeout(() => {
   body.classList.remove("success-open")
}, 5000)
console.log('hey the email has been sent!')

} catch{
    loading.classList.add("hidden");
    alert(
        "An error has occured. Please try again later or contact me at meoshameka@gmail.com."
    );
   
}

}

