export function observe(receive) {
  setInterval(() => receive([
    Math.floor(Math.random() * 3),
    Math.floor(Math.random() * 3)
  ]), 500);
}