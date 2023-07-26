export const convertToHex = (str) => {
  let hexString = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i).toString(16);
    hexString += charCode.padStart(4, '0');
  }
  return hexString;
};

export const convertFromHex = (hex) => {
  let str = '';
  for (let i = 0; i < hex.length; i += 4) {
    const hexCharCode = hex.substr(i, 4);
    const charCode = parseInt(hexCharCode, 16);
    str += String.fromCharCode(charCode);
  }
  return str;
};
