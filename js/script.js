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
//   الصفحه الرئيسيه
const modal = document.getElementById('bookingModal');
const destinationName = document.getElementById('destinationName');
const bookingForm = modal.querySelector('form');


let confirmMessage = document.getElementById("confirmBookingMessage");
if (!confirmMessage) {
    confirmMessage = document.createElement("p");
    confirmMessage.id = "confirmBookingMessage";
    confirmMessage.style.marginTop = "10px";
    confirmMessage.style.fontWeight = "bold";
    modal.querySelector(".modal-content").appendChild(confirmMessage);
}
function openBookingModal(destination) {
    destinationName.textContent = destination;
    modal.style.display = 'block';
    confirmMessage.textContent = "";
    bookingForm.reset();
}
function closeBookingModal() {
    modal.style.display = 'none';
    confirmMessage.textContent = "";
    bookingForm.reset();
}

window.onclick = function(event) {
    if (event.target == modal) {
        confirmMessage.textContent = "تم إرسال طلبك ";
        confirmMessage.style.color = "blue";
        setTimeout(() => {
            confirmMessage.textContent = "";
        }, 3000);
        bookingForm.reset();
    }
}
bookingForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    confirmMessage.textContent = "تم تأكيد الطلب بنجاح ";
    confirmMessage.style.color = "blue";
    setTimeout(() => {
        bookingForm.reset();
        confirmMessage.textContent = "";
    }, 3000);
}); 
