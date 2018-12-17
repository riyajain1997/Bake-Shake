var logincontainer=document.getElementById('#logincontainer');
var registercontainer = document.getElementById('#registercontainer');
var registertab = document.getElementById('#register-tab');
var logintab = document.getElementById('#login-tab');
var loginlink = document.getElementById('.loginlink');
var registerlink = document.getElementById('.registerlink');

registertab.addEventListener('click',function(){
	registeractive();
});

logintab.addEventListener('click',function(){
	loginactive();
});

loginlink.addEventListener('click',function(){
	loginactive();
});

registerlink.addEventListener('click',function(){
	registeractive();
})

function loginactive(){
	logincontainer.style.display = "block";
	registercontainer.style.display = "none";
	logintab.classList.add('active');
	registertab.classList.remove('active');
}

function registeractive(){
	logincontainer.style.display = "none";
	registercontainer.style.display = "block";
	registertab.classList.add('active');
	logintab.classList.remove('active');
}