const rgbColors = ["red", "green", "blue"];
const isRgbColor = (color) => {
  return rgbColors.includes(color);
};

console.log("isRgbColor", isRgbColor("red"));
