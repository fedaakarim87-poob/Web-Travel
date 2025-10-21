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


// 🔍 تحديد جميع العناصر التي تحتوي على الكلاس 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// 📦 دالة لفحص موقع العناصر عند التمرير
function checkScroll() {
  hiddenElements.forEach(el => {
    const rect = el.getBoundingClientRect(); // 📐 الحصول على موقع العنصر بالنسبة للنافذة
    if (rect.top < window.innerHeight - 100) { // ✅ إذا كان العنصر قريبًا من الظهور في الشاشة
      if (el.classList.contains('vision')) { // 👉 إذا كان العنصر يحتوي على كلاس 'vision'
        el.classList.add('show-right'); // ➡️ أضف تأثير الظهور من اليمين
      } else {
        el.classList.add('show-bottom'); // ⬇️ أضف تأثير الظهور من الأسفل
      }
    }
  });
}

// 🖱️ تنفيذ الدالة عند التمرير
window.addEventListener('scroll', checkScroll);

// 🚀 تنفيذ الدالة عند تحميل الصفحة
window.addEventListener('load', checkScroll);

// 🎌 تعريف أسئلة لعبة الأعلام
const questions = [
  { image: "https://flagcdn.com/w320/vn.png", options: ["كوريا الجنوبية", "الصين", "فيتنام", "تايلاند"], answer: "فيتنام" },
  { image: "https://flagcdn.com/w320/cl.png", options: ["الأرجنتين", "تشيلي", "كولومبيا", "المكسيك"], answer: "تشيلي" },
  { image: "https://flagcdn.com/w320/za.png", options: ["كينيا", "جنوب أفريقيا", "نيجيريا", "غانا"], answer: "جنوب أفريقيا" },
  { image: "https://flagcdn.com/w320/no.png", options: ["فنلندا", "النرويج", "السويد", "الدنمارك"], answer: "النرويج" },
  { image: "https://flagcdn.com/w320/tn.png", options: ["المغرب", "تونس", "السودان", "الجزائر"], answer: "تونس" }
];

// 🧮 تعريف المتغيرات الخاصة بالنقاط والسؤال الحالي
let score = 0, current = 0;

// 📤 عرض السؤال الحالي في اللعبة الأولى
function showQuestion() {
  if (current >= questions.length) { // ✅ إذا انتهت الأسئلة
    document.getElementById("quiz").innerHTML = ""; // 🧹 إفراغ محتوى اللعبة
    document.getElementById("finalScore").innerText = `✅ انتهت اللعبة! نتيجتك: ${score} من ${questions.length}`; // 📊 عرض النتيجة
    setTimeout(startSecondGame, 3000); // ⏱️ بدء اللعبة الثانية بعد 3 ثوانٍ
    return;
  }

  const q = questions[current]; // 📦 الحصول على السؤال الحالي
  const html = `
    <div class="question">
      <p>السؤال ${current + 1}:</p>
      <img src="${q.image}" alt="علم الدولة">
      <div class="options">
        ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("")}
      </div>
      <div class="result" id="result${current}"></div>
    </div>
  `;
  document.getElementById("quiz").innerHTML = html; // 🖥️ عرض السؤال في الصفحة
}

// ✅ التحقق من الإجابة المختارة في اللعبة الأولى
function checkAnswer(selected) {
  const correct = questions[current].answer; // 🎯 الإجابة الصحيحة
  const resultDiv = document.getElementById(`result${current}`); // 📍 مكان عرض النتيجة
  const correctSound = document.getElementById("correctSound"); // 🔊 صوت الإجابة الصحيحة
  const wrongSound = document.getElementById("wrongSound"); // 🔊 صوت الإجابة الخاطئة

  if (selected === correct) {
    score++; // ➕ زيادة النقاط
    resultDiv.innerText = "✔️ إجابة صحيحة!";
    correctSound.play(); // ▶️ تشغيل صوت صحيح
  } else {
    resultDiv.innerText = `❌ خطأ! الإجابة الصحيحة: ${correct}`;
    wrongSound.play(); // ▶️ تشغيل صوت خطأ
  }

  setTimeout(() => {
    current++; // ⏭️ الانتقال للسؤال التالي
    showQuestion(); // 🔁 عرض السؤال الجديد
  }, 1500);
}

// 🚀 بدء اللعبة الأولى عند تحميل الصفحة
showQuestion();

// 🌍 تعريف أسئلة اللعبة الثانية (الأسئلة الصعبة)
const questions2 = [
  { q: "ما هي الدولة التي لا تملك جيشًا رسميًا؟", options: ["كوستاريكا", "سويسرا", "آيسلندا", "نيوزيلندا"], answer: "آيسلندا" },
  { q: "أي دولة تملك أكبر عدد من الجزر؟", options: ["اليابان", "السويد", "إندونيسيا", "الفلبين"], answer: "السويد" },
  { q: "ما هي الدولة التي تقع فيها مدينة 'تيمفو'؟", options: ["بوتان", "نيبال", "الهند", "بنغلاديش"], answer: "بوتان" },
  { q: "أي دولة تُعرف باسم أرض النار والجليد؟", options: ["كندا", "النرويج", "آيسلندا", "روسيا"], answer: "آيسلندا" },
  { q: "ما هي الدولة التي تحتوي على أكبر صحراء غير قطبية؟", options: ["أستراليا", "الجزائر", "الصين", "السعودية"], answer: "أستراليا" }
];

// 🧮 تعريف المتغيرات الخاصة باللعبة الثانية
let score2 = 0, current2 = 0;

// 🚀 بدء اللعبة الثانية
function startSecondGame() {
  document.getElementById("quiz").style.display = "none"; // ❌ إخفاء اللعبة الأولى
  document.getElementById("finalScore").style.display = "none"; // ❌ إخفاء نتيجتها
  document.getElementById("quiz2").style.display = "block"; // ✅ عرض اللعبة الثانية
  showQuestion2(); // 📤 عرض أول سؤال
}

// 📤 عرض السؤال الحالي في اللعبة الثانية
function showQuestion2() {
  if (current2 >= questions2.length) { // ✅ إذا انتهت الأسئلة
    document.getElementById("questionBox2").innerHTML = ""; // 🧹 إفراغ الأسئلة
    document.getElementById("finalScore2").innerText = `✅ انتهت اللعبة الثانية! نتيجتك: ${score2} من ${questions2.length}`; // 📊 عرض النتيجة
    document.getElementById("restartBtn2").style.display = "inline-block"; // 🔁 عرض زر إعادة اللعب
    return;
  }

  const q = questions2[current2]; // 📦 الحصول على السؤال الحالي
  const html = `
    <div class="question">
      <p>السؤال ${current2 + 1}: ${q.q}</p>
      <div class="options">
        ${q.options.map(opt => `<button onclick="checkAnswer2('${opt}')">${opt}</button>`).join("")}
      </div>
      <div class="result" id="result2${current2}"></div>
    </div>
  `;
  document.getElementById("questionBox2").innerHTML = html; // 🖥️ عرض السؤال في الصفحة
}

// ✅ التحقق من الإجابة المختارة في اللعبة الثانية
function checkAnswer2(selected) {
  const correct = questions2[current2].answer; // 🎯 الإجابة الصحيحة
  const resultDiv = document.getElementById(`result2${current2}`); // 📍 مكان عرض النتيجة
  const correctSound = document.getElementById("correctSound"); //
