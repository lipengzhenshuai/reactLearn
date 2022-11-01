import effectRunnerMap from './effectRunnerMap';

export default function proc(env, iterator) {
  next();
  function next(arg, isErr) {
    let result;
    if (isErr) {
      result = iterator.throw(arg);
    } else {
      result = iterator.next(arg);
    }
    if (!result.done) {
      runEffect(result.value, next)
    }
  }

  function runEffect(effect, next) {
    if (effect) {
      const effectRunner = effectRunnerMap[effect.type]
      effectRunner(env, effect.payload, next,{runEffect});
    } else {
      next();
    }
  }
}