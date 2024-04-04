const a = [
  "pretty - romantic: 0.8 (의미적 유사성과 어휘적 유사성이 있으나, 문맥적으로는 조금 다를 수 있음)",
  "pretty - clean: 0.2 (의미적 유사성이 없음)",
  "pretty - natural: 0.4 (유사성이 있지만, 명확한 관련성은 없음)",
  "pretty - casual: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "pretty - cool-casual: 0.7 (비슷한 느낌을 주는 단어)",
  "pretty - elegant: 0.8 (의미적, 어휘적 유사성이 있음)",
  "pretty - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "pretty - chic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "pretty - modern: 0.5 (비슷한 느낌을 주는 단어)",
  "pretty - formal: 0.3 (의미적 유사성이 없음)",
  "pretty - dandy: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "pretty - classic: 0.3 (의미적 유사성이 없음)",
  "pretty - wild: 0.3 (의미적 유사성이 없음)",
  "pretty - dynamic: 0.4 (의미적 유사성이 없음)",
  "romantic - clean: 0.2 (의미적 유사성이 없음)",
  "romantic - natural: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "romantic - casual: 0.6 (비슷한 느낌을 주는 단어)",
  "romantic - cool-casual: 0.7 (비슷한 느낌을 주는 단어)",
  "romantic - elegant: 0.8 (의미적, 어휘적 유사성이 있음)",
  "romantic - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "romantic - chic: 0.7 (비슷한 느낌을 주는 단어)",
  "romantic - modern: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "romantic - formal: 0.3 (의미적 유사성이 없음)",
  "romantic - dandy: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "romantic - classic: 0.3 (의미적 유사성이 없음)",
  "romantic - wild: 0.3 (의미적 유사성이 없음)",
  "romantic - dynamic: 0.4 (의미적 유사성이 없음)",
  "clean - natural: 0.6 (의미적 유사성이 있음)",
  "clean - casual: 0.7 (비슷한 느낌을 주는 단어)",
  "clean - cool-casual: 0.8 (비슷한 느낌을 주는 단어)",
  "clean - elegant: 0.8 (의미적, 어휘적 유사성이 있음)",
  "clean - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "clean - chic: 0.7 (비슷한 느낌을 주는 단어)",
  "clean - modern: 0.6 (비슷한 느낌을 주는 단어)",
  "clean - formal: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "clean - dandy: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "clean - classic: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "clean - wild: 0.3 (의미적 유사성이 없음)",
  "clean - dynamic: 0.4 (의미적 유사성이 없음)",
  "natural - casual: 0.8 (비슷한 느낌을 주는 단어)",
  "natural - cool-casual: 0.9 (비슷한 느낌을 주는 단어)",
  "natural - elegant: 0.9 (의미적, 어휘적 유사성이 있음)",
  "natural - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "natural - chic: 0.8 (비슷한 느낌을 주는 단어)",
  "natural - modern: 0.7 (비슷한 느낌을 주는 단어)",
  "natural - formal: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "natural - dandy: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "natural - classic: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "natural - wild: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "natural - dynamic: 0.5 (의미적 유사성이 없음)",
  "casual - cool-casual: 0.9 (비슷한 느낌을 주는 단어)",
  "casual - elegant: 0.8 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "casual - chic: 0.8 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - modern: 0.8 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - formal: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - dandy: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - classic: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - wild: 0.4 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "casual - dynamic: 0.5 (의미적 유사성이 없음)",
  "cool-casual - elegant: 0.8 (비슷한 느낌을 주는 단어)",
  "cool-casual - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "cool-casual - chic: 0.9 (비슷한 느낌을 주는 단어)",
  "cool-casual - modern: 0.9 (비슷한 느낌을 주는 단어)",
  "cool-casual - formal: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "cool-casual - dandy: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "cool-casual - classic: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "cool-casual - wild: 0.5 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "cool-casual - dynamic: 0.6 (의미적 유사성이 없음)",
  "elegant - gorgeous: 0.9 (비슷한 느낌을 주는 단어)",
  "elegant - chic: 0.9 (비슷한 느낌을 주는 단어)",
  "elegant - modern: 0.8 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "elegant - formal: 0.9 (비슷한 느낌을 주는 단어)",
  "elegant - dandy: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "elegant - classic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "elegant - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "elegant - dynamic: 0.6 (의미적 유사성이 없음)",
  "gorgeous - chic: 0.9 (비슷한 느낌을 주는 단어)",
  "gorgeous - modern: 0.8 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "gorgeous - formal: 0.9 (비슷한 느낌을 주는 단어)",
  "gorgeous - dandy: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "gorgeous - classic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "gorgeous - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "gorgeous - dynamic: 0.6 (의미적 유사성이 없음)",
  "chic - modern: 0.9 (비슷한 느낌을 주는 단어)",
  "chic - formal: 0.9 (비슷한 느낌을 주는 단어)",
  "chic - dandy: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "chic - classic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "chic - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "chic - dynamic: 0.6 (의미적 유사성이 없음)",
  "modern - formal: 0.9 (비슷한 느낌을 주는 단어)",
  "modern - dandy: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "modern - classic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "modern - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "modern - dynamic: 0.6 (의미적 유사성이 없음)",
  "formal - dandy: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "formal - classic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "formal - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "formal - dynamic: 0.6 (의미적 유사성이 없음)",
  "dandy - classic: 0.7 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "dandy - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "dandy - dynamic: 0.6 (의미적 유사성이 없음)",
  "classic - wild: 0.6 (의미적 유사성이 있으나, 문맥적으로는 다를 수 있음)",
  "classic - dynamic: 0.6 (의미적 유사성이 없음)",
  "wild - dynamic: 0.5 (의미적 유사성이 없음)",
];

const b = [
  "pretty - clean: 0.2 (의미적으로 상반된 의미를 가짐)",
  "pretty - natural: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - casual: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - cool-casual: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - elegant: 0.8 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - gorgeous: 0.9 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - chic: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - modern: 0.5 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - formal: 0.3 (의미적으로 상반된 의미를 가짐)",
  "pretty - dandy: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - classic: 0.3 (의미적으로 상반된 의미를 가짐)",
  "pretty - wild: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "pretty - dynamic: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - clear: 0.2 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - pretty: 0.2 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - casual: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - cool-casual: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - natural: 0.5 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - elegant: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - dynamic: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - wild: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - gorgeous: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - chic: 0.5 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - modern: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - formal: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - dandy: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - classic: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - gorgeous: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - chic: 0.5 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - modern: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - formal: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - dandy: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - classic: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - wild: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - dynamic: 0.3 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - clear: 0.2 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - pretty: 0.2 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - casual: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - cool-casual: 0.4 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - natural: 0.5 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "romantic - elegant: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - chic: 0.9 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - modern: 0.8 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - formal: 0.9 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - dandy: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - classic: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - wild: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "gorgeous - dynamic: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "chic - modern: 0.9 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "chic - formal: 0.9 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "chic - dandy: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "chic - classic: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "chic - wild: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "chic - dynamic: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "modern - formal: 0.9 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "modern - dandy: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "modern - classic: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "modern - wild: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "modern - dynamic: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "formal - dandy: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "formal - classic: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "formal - wild: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "formal - dynamic: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "dandy - classic: 0.7 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "dandy - wild: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "dandy - dynamic: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "classic - wild: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "classic - dynamic: 0.6 (의미적으로 상반된 의미를 가질 가능성이 있음)",
  "wild - dynamic: 0.5 (의미적으로 상반된 의미를 가질 가능성이 있음)",
];

const similar = [];
const means = [];

a.forEach((data) => {
  let [keyValue, content] = data.split("(");
  content = content.replace(")", "");

  //   console.log(`타겟 : ${keyValue} + ${content}`);

  if (content.includes("비슷한")) similar.push(keyValue);
  else if (content.includes("의미적 유사성이 있으나")) means.push(keyValue);
});

// console.log("비슷한 느낌을 가진 형용사들");
// similar.forEach((data) => {
//   console.log(data);
// });

// console.log("의미적 유사성만 가진 형용사들");
// means.forEach((data) => {
//   console.log(data);
// });

const opposed = [];

b.forEach((data) => {
  let [keyValue, ...rest] = data.split("(");
  const idx = keyValue.indexOf("0");
  const score = keyValue.substring(idx, idx + 3);
  const res = keyValue.substring(0, idx - 2);
  if (score > 0.6) opposed.push(res);
});

console.log("상반되는 느낌을 가진 형용사들");
opposed.forEach((data) => {
  console.log(data);
});
