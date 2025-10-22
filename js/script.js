// صفحه تسجيل الدخول 
    const loginform = document.getElementById("loginform");
    const logoutbtn = document.getElementById("logoutbtn");
    const message = document.getElementById("message");

    loginform.addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "1234") {
        message.textContent = "تم تسجيل الدخول بنجاح ";
        message.style.color = "blue";
        logoutbtn.style.display = "block";
        setTimeout(() => {
    window.location.href = "mainpage.html";
}, 2000); 

      } else {
        message.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة ❌";
        message.style.color = "red";
      }
    });

    logoutbtn.addEventListener("click", function() {
      message.textContent = "تم تسجيل الخروج بنجاح";
      message.style.color = "orange";
      logoutbtn.style.display = "none";
      loginform.reset();
    });
    document.getElementById("loginBtn").addEventListener("click", function () {
  this.classList.add("clicked");
});
