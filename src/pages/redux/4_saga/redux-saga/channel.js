export function stdChannel() {
  let currentTakers = [];
  function take(cb, matcher) {
    cb['MATCH'] = matcher;
    cb.cancel = ()=>{
      currentTakers = currentTakers.filter(item=>item!==cb);
    }
    currentTakers.push(cb);
  }

  function put(input) {
    const takers = currentTakers;
    for (let i = 0, len = takers.length; i < len; i++) {
      const taker = takers[i]
      if (taker['MATCH'](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }

  return {
    take,
    put
  }
}