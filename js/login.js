/* Step 1 :  */
document.getElementById('btn-submit').addEventListener('click',function(){
    /* Step 2 : Get the email address inside the email input field */
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    /* Step 3 : Get the Password inside the password input field */
    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;
    /* Step 4 : Varify User email and password */
    if (email === 'bank@gmail.com' && pass === 'admin'){
        console.log('Valid User');
        window.location.href="baperbank.html";
    }
    else{
        alert('Invalid Uesr name and Password');
        }
        
})