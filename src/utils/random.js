const randomX = () => {
  return Math.floor(Math.random() * 10);
};

const randomY = () => {
  return Math.floor(Math.random() * 10);
};

const randomDirection = () => {
  let number = Math.floor(Math.random() * 2);
  if (number === 0) return "horizontal";
  if (number === 1) return "vertical";
};

export { randomX, randomY, randomDirection };
