// Some random colors
const colors = ["#3c6478", "#43abc9", "#cd594a", "#f58b4c", "#b5c689"];

const numBalls = 75;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("hopper-ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.floor(Math.random() * 100);
  const top = Math.floor(Math.random() * 100);
  console.log('i:', i, 'left:', left, 'top:', top);
  ball.style.left = `${left}%`;
  ball.style.top = `${top}%`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${2}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i) => {
  const x = Math.floor(Math.random() * 1000);
  const y = Math.floor(Math.random() * 1000);
  console.log('i:', i, 'x:', x, 'y:', y);
  let to = {
    x: x,
    y: y
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}%, ${to.y}%)` }
    ],
    {
      duration: (Math.random() + 1) * 250, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );


});
