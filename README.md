# promise-then-catch

entire package is:
```ts
const promise_then_catch = <T>(e: Promise<T> | (() => Promise<T>)) =>
  (typeof e === 'function' ? e() : e).catch((err) => console.log(err)) && null;
```

I made this primarily because I have found myself using this function in nearly every node project I was working on.

For e.g., situations like invoking an async application (see below), or not awaiting promises.

```ts

async function main_thing() {
  console.log("does something");
}

if (require.main === module) {
  promise_then_catch(main_thing);
}
```
