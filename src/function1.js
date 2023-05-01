function combineAndRemoveZ(arr) {
  const combinedString = arr.join("");
  const withoutZ = combinedString.replace(/[z,Z]/g, "");
  return withoutZ;
}
module.exports = combineAndRemoveZ;
