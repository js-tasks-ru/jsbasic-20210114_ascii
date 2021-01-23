/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str){
  let lowStr = str.toLowerCase(); 
  if (lowStr.includes('1xbet now')) {
    return true;
  } else if (lowStr.includes('free xxxxx')) {
    return true;
  } else {
    return false;
  }
  }
