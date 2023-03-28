var romanToInt = function (s) {
  const numeric = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };

  const str = s.length;
  let result = 0;


  for (let i = 0; i < str; i++) {
      
      if (i < str - 1 && numeric[s[i + 1]] > numerals[s[i]]) {
         
        result = result - numeric[s[i]];
      } 
      else 
      {
         
           result = result+ numeric[s[i]];
      }
  }

  return result;
};