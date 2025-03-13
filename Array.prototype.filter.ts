// Problem link: https://www.greatfrontend.com/interviews/study/three-months/questions/javascript/array-filter

interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): T[];
}

Array.prototype.myFilter = function <T>(
  this: T[],
  callbackFn: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any
): T[] {
  let filteredArray: T[] = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(thisArg, this[i], i, this)) filteredArray.push(this[i]);
  }

  return filteredArray;
};
