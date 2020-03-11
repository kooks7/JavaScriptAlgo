/*
collectStrings
Write a function called collectStrings which accepts an object and returns
an array of all the values in the object that have a typeof string
*/

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

const collectStrings = obj => {
  let arr = [];
  const help = obj => {
    for (let k in obj) {
      if (typeof obj[k] === 'string') {
        arr.push(obj[k]);
      } else if (typeof obj[k] === 'object') {
        // console.log(obj[k]);
        help(obj[k]);
      }
    }
  };
  help(obj);
  return arr;
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
