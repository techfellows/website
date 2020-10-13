/*
export default global.navigator = {
  userAgent: "node",
};
*/
export default function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    const renderedVal = navigator.userAgent.match(toMatchItem);
    return renderedVal;
  });
}
