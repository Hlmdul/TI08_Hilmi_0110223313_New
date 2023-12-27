let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('login');
let status = document.getElementById('status');

const account1 = {
  username : 'hlmdul',
  password : 'hlmdul',
  email : 'hilmi@gmail.com'
};
const account2 = {
  username : 'ahmad2017',
  password : 'integrity',
  email : 'ahmad@email.com'
};

login.addEventListener('click', function(){
  let username_list = [account1.username , account2.username];
  let password_list = [account1.password , account2.password];
  if(username_list.includes(username.value) && password_list.includes(password.value)){
    status.innerHTML = 'Login Success';
    window.location.href = 'index.html';
  
  }else{
    status.innerHTML = 'Login failed, try again';
    document.getElementById('status').style.color = 'red';
  }
});
