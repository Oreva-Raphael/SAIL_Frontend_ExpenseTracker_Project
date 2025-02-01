
function SignUp () {
  return (

  document.getElementById('signupBtn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/sign%20up.html'; 
  });
  
  document.getElementById('loginBtn').addEventListener('click', function () {
    window.location.href = '/login'; // Replace '/login' with your actual login page URL
  });
)
}

 export default SignUp
  