document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.hash) { // Only handle anchor links
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});



// form validation

const form = document.getElementById('form');
const errorMsg=document.getElementById('error')


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const name=document.getElementById('name').value.trim();
    const Email=document.getElementById('Email').value.trim();
  
    if(name.length < 3){
        errorMsg.innerText = "Name must be atleast 3 charecters."
        return;
    }
    if(!Email.includes('@') || !Email.includes('.')){
        errorMsg.innerText = "Email is not valid."
        return;
    }

    //success alert message
    errorMsg.innerText = "";
    alert(" Your form looks good!, Submitting.");
})

