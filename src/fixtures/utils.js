export const makeEntity = (spec, id) => {
  const base = id ? spec.seed(id) : spec;
  return stripPrivateProperties(base.generate());  
}

export const makeEntities = (spec, num) =>
  Array(num)
    .fill(0)
    .map((_, index) => makeEntity(spec, index + 1));

function stripPrivateProperties(obj = {}) {
  return Object.keys(obj).reduce((publicObj, key) => {
    if (key.indexOf('_') === 0) {
      return publicObj;
    }
    return {
      ...publicObj,
      [key]: obj[key],
    };
  }, {});
}
