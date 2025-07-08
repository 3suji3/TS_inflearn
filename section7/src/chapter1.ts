/**
 * 첫번째 사례
 */

function swap<T>(a: T,b: T) {
  return [b, a]
}

const [a, b] = swap(1, 2);