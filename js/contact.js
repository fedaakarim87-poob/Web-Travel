// صفحه تواصل معنا
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!name.value || !email.value || !message.value) {
      formMessage.textContent = "❌ يرجى ملء جميع الحقول المطلوبة.";
      formMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      formMessage.textContent = "❌ البريد الإلكتروني غير صالح.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "✅ تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا.";
    formMessage.style.color = "green";
    form.reset();

    setTimeout(() => {
      formMessage.textContent = "";
    }, 5000);
  });
});
