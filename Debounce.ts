export default function debounce(func: Function, wait: number): Function {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any) {
    const context = this;
    clearTimeout(timeoutID ?? undefined);
    timeoutID = setTimeout(() => func.apply(context, args), wait);
  };
}
