const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".title-question");
  btn.addEventListener("click", () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
