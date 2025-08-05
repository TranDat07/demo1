const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const additionalMessage = document.querySelector(".additional-message");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yêu em lắm lắm <3";
  gif.src =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQzb3I2ZnllcHc5M2gxOHN2dzRmaDdzYTFrN2duMHYzOG15bWNsNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LOXAmVhFOdo0BmP9n6/giphy.gif";
  // Ẩn cả hai nút "Yes" và "No"
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

});
