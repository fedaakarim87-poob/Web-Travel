/*_____________________بدايه كود فداء _________________*/
// 🔍 تحديد جميع العناصر التي تحتوي على الكلاس 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// 📦 دالة لفحص موقع العناصر عند التمرير
function checkScroll() {
  hiddenElements.forEach(el => {
    const rect = el.getBoundingClientRect(); // 📐 موقع العنصر بالنسبة للنافذة
    if (rect.top < window.innerHeight - 100) { // ✅ إذا كان قريب من الظهور
      if (el.classList.contains('vision')) {
        el.classList.add('show-right'); // ➡️ تأثير من اليمين
      } else {
        el.classList.add('show-bottom'); // ⬇️ تأثير من الأسفل
      }
    }
  });
}

// 🖱️ تنفيذ الدالة عند التمرير
window.addEventListener('scroll', checkScroll);

// 🚀 تنفيذ الدالة عند تحميل الصفحة
window.addEventListener('load', checkScroll);

/* 🎌 اللعبة الأولى: لعبة الأعلام */
const questions = [
  { image: "https://flagcdn.com/w320/vn.png", options: ["كوريا الجنوبية", "الصين", "فيتنام", "تايلاند"], answer: "فيتنام" },
  { image: "https://flagcdn.com/w320/cl.png", options: ["الأرجنتين", "تشيلي", "كولومبيا", "المكسيك"], answer: "تشيلي" },
  { image: "https://flagcdn.com/w320/za.png", options: ["كينيا", "جنوب أفريقيا", "نيجيريا", "غانا"], answer: "جنوب أفريقيا" },
  { image: "https://flagcdn.com/w320/no.png", options: ["فنلندا", "النرويج", "السويد", "الدنمارك"], answer: "النرويج" },
  { image: "https://flagcdn.com/w320/tn.png", options: ["المغرب", "تونس", "السودان", "الجزائر"], answer: "تونس" }
];

let score = 0, current = 0;

// 📤 عرض السؤال الحالي في اللعبة الأولى
function showQuestion() {
  if (current >= questions.length) {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("finalScore").innerText = `✅ انتهت اللعبة! نتيجتك: ${score} من ${questions.length}`;
    setTimeout(startSecondGame, 3000); // ⏱️ بعد 3 ثوانٍ تبدأ اللعبة الثانية
    return;
  }

  const q = questions[current];
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
  document.getElementById("quiz").innerHTML = html;
}

// ✅ التحقق من الإجابة في اللعبة الأولى
function checkAnswer(selected) {
  const correct = questions[current].answer;
  const resultDiv = document.getElementById(`result${current}`);
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");

  if (selected === correct) {
    score++;
    resultDiv.innerText = "✔️ إجابة صحيحة!";
    correctSound.play();
  } else {
    resultDiv.innerText = `❌ خطأ! الإجابة الصحيحة: ${correct}`;
    wrongSound.play();
  }

  setTimeout(() => {
    current++;
    showQuestion();
  }, 1500);
}

// 🚀 بدء اللعبة الأولى عند تحميل الصفحة
showQuestion();

/* 🌍 اللعبة الثانية: أسئلة صعبة */
const questions2 = [
  { q: "ما هي الدولة التي لا تملك جيشًا رسميًا؟", options: ["كوستاريكا", "سويسرا", "آيسلندا", "نيوزيلندا"], answer: "آيسلندا" },
  { q: "أي دولة تملك أكبر عدد من الجزر؟", options: ["اليابان", "السويد", "إندونيسيا", "الفلبين"], answer: "السويد" },
  { q: "ما هي الدولة التي تقع فيها مدينة 'تيمفو'؟", options: ["بوتان", "نيبال", "الهند", "بنغلاديش"], answer: "بوتان" },
  { q: "أي دولة تُعرف باسم أرض النار والجليد؟", options: ["كندا", "النرويج", "آيسلندا", "روسيا"], answer: "آيسلندا" },
  { q: "ما هي الدولة التي تحتوي على أكبر صحراء غير قطبية؟", options: ["أستراليا", "الجزائر", "الصين", "السعودية"], answer: "أستراليا" }
];

let score2 = 0, current2 = 0;

// 🚀 بدء اللعبة الثانية
function startSecondGame() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalScore").style.display = "none";
  document.getElementById("quiz2").style.display = "block";
  showQuestion2();
}

// 📤 عرض السؤال الحالي في اللعبة الثانية
function showQuestion2() {
  if (current2 >= questions2.length) {
    document.getElementById("questionBox2").innerHTML = "";
    document.getElementById("finalScore2").innerText = `✅ انتهت اللعبة الثانية! نتيجتك: ${score2} من ${questions2.length}`;
    document.getElementById("restartBtn2").style.display = "inline-block";
    return;
  }

  const q = questions2[current2];
  const html = `
    <div class="question">
      <p>السؤال ${current2 + 1}: ${q.q}</p>
      <div class="options">
        ${q.options.map(opt => `<button onclick="checkAnswer2('${opt}')">${opt}</button>`).join("")}
      </div>
      <div class="result" id="result2${current2}"></div>
    </div>
  `;
  document.getElementById("questionBox2").innerHTML = html;
}

// ✅ التحقق من الإجابة في اللعبة الثانية
function checkAnswer2(selected) {
  const correct = questions2[current2].answer;
  const resultDiv = document.getElementById(`result2${current2}`);
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");

  if (selected === correct) {
    score2++;
    resultDiv.innerText = "✔️ إجابة صحيحة!";
    correctSound.play();
  } else {
    resultDiv.innerText = `❌ خطأ! الإجابة الصحيحة: ${correct}`;
    wrongSound.play();
  }

  setTimeout(() => {
    current2++;
    showQuestion2();
  }, 1500);
}
