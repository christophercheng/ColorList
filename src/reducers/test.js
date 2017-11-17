import colors from './colors_reducer';
import C from './constants';

const currentColors = [
  {
    id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
    title: 'Berry Blue',
    color: '#000066',
    rating: 0,
    timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
  },
];
const action = {
  type: C.ADD_COLOR,
  id: '5523e7p8-3ab2-1e35-95p4-8001l8yf3036',
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
};

const combine = funcsArray => (firstArg) => {
  const reversedFuncsArray = [...funcsArray].reverse();
  return reversedFuncsArray.reduce((acc, fn) => fn(acc), firstArg);
  // return reversedFuncsArray.reduceRight((acc, fn) => fn(acc), firstArg)
};

const combine2 = fns => (firstArg) => {
  if (fns === undefined) {
    return null;
  }
  return (fns.length > 1) ? combine2(fns.slice(0, -1))(fns.slice(-1)(firstArg))
    : fns[0](firstArg);
};

console.log(colors(currentColors, action));
