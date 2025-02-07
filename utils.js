export function getRandomColor() {
  const max = 255;
  const min = 0;
  const randomColor_RR = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomColor_GG = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomColor_BB = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomColor_BB, randomColor_GG, randomColor_RR);
  const rgb = `rgb(${randomColor_RR}, ${randomColor_GG}, ${randomColor_BB})`;
  document.body.style.backgroundColor = rgb;
}
