let i = 0;
function increment() {
  i++;
  document.getElementById('counter').innerText = i;
}
let interval = setInterval('increment()', 1000);

document.addEventListener("DOMContentLoaded", () => {

  let minus = document.getElementById("minus");
  minus.addEventListener("click", function(e) {
    counter.innerHTML--;
    i--;
  });
  let plus = document.getElementById("plus");
  plus.addEventListener("click", function(e) {
    i = counter.innerHTML++;
  });

  let pause = document.getElementById("pause");
  pause.addEventListener("click", function(e) {
    clearInterval(interval);
  });

  let heart = document.getElementById("heart");
  heart.addEventListener("click", function(e) {
    document.querySelector("ul").innerHTML += `<li>Liked ${counter.innerText} times</li>`;
  })

  let commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let commentOut = document.createElement('p');
    commentOut.innerText = document.getElementById("comment-input").value;
    document.getElementById("list").appendChild(commentOut);
  });
});