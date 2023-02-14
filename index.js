const isRequired = () => {
  throw Error("Argument is required");
};

const setCurrentVideoCode = (videoCode = isRequired()) => {
  console.log(videoCode);
};

setCurrentVideoCode(); // Argument is required
setCurrentVideoCode(""); //
setCurrentVideoCode(null); // null
setCurrentVideoCode("VD098"); // VD098
