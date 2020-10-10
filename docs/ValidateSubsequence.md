---
id: ValidateSubsequence
title: Validate Subsequence
---

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

<Highlight color="#25c2a0">Difficulty: Easy</Highlight>

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers

<Highlight color="#1877F2">Tip</Highlight>

Iterate through the main array, and look for the first integer in the potential subsequence. If you find that integer, keep on iterating through the main array, but now look for the second integer in the potential subsequence. Continue this process until you either find every integer in the potential subsequence or you reach the end of the main array.

```jsx live
function twoSumNum() {
  let answer = [];
  //Write code below

  let array = [1, 2, 3, 5, 6, 7, 8];
  const target = 10;

  //Dont change the button
  return (
    <div>
      <h2>{target}</h2>
    </div>
  );
}
```

<Highlight color="#3f2dff">Solution</Highlight>

```jsx
function twoSumBest(array, target) {
  const numsMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (numsMap.has(target - array[i])) {
      return [numsMap.get(target - array[i], i)];
      // get() returns a specified element associated with the specified key from the Map object.
    } else {
      numsMap.set(array[i], i);
      //  set() adds or updates an element with a specified key and value to a Map object.
    }
  }
}
```
