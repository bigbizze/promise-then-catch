export const promise_then_catch = <T>(e: Promise<T> | (() => Promise<T>)) =>
    (typeof e === "function" ? e() : e).catch(err => console.log(err)) && null;
