module.exports = function zeros(expression) {
  debugger;
  let res = {
    twos: 0,
    fives: 0,
  }
  expression.split('*').forEach(element => {
    let num = parseInt(element);
    if (element.includes('!!')) {
      if (num % 2 === 0) {
        for (let i = 2; i <= num; i *= 2) {
          res.twos += Math.floor(num / i);
        }
        for (let i = 10; i <= num; i *= 5) {
          res.fives += Math.floor(num / i);
        }
      } else for (let i = 5; i <= num; i *= 5) {
        res.fives += Math.floor(num / i);
      }
    } else {
    for (let i = 5; i <= num; i *= 5) {
      res.fives += Math.floor(num / i);
    }
    for (let i = 2; i <= num; i *= 2) {
      res.twos += Math.floor(num / i);
    }
  }
  });
  return Math.min(res.twos, res.fives);
}

//zeros('11!!*22!!*33!!');