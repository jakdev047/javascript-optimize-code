const assets = [
  { id: 1, title: "V-1", type: "video" },
  { id: 2, title: "A-1", type: "audio" },
];
const hasVideoAsset = assets.some((asset) => asset.type === "video");
console.log(hasVideoAsset);
