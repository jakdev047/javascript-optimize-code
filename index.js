const loadingFunc = () => {
  console.log("Loading...");
};
const loadFunction = (loadingFunc) => {
  loadingFunc?.();
};

loadFunction(loadingFunc);
