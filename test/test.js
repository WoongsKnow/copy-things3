const 청약제품 = {
  옵션들: {
    옵션1: {
      key: '컬러',
      value: '빨강,파랑,노랑,초록'
    },
    옵션2: {
      key: '사이즈',
      value: 's,m,l,xl'
    },
    옵션3: null
  },
  optionResultList: [
    {
      옵션1: '빨강', 옵션2: 's', 옵션3: '', 사용여부: true, 재고: 20
    },
    {
      옵션1: '빨강', 옵션2: 'm', 옵션3: '', 사용여부: true, 재고: 20
    },
    {
      옵션1: '빨강', 옵션2: 'l', 옵션3: '', 사용여부: false, 재고: 20
    },
    {
      옵션1: '빨강', 옵션2: 'xl', 옵션3: '', 사용여부: true, 재고: 20
    },
    {
      옵션1: '파랑', 옵션2: 's', 옵션3: '', 사용여부: true, 재고: 20
    },
    {
      옵션1: '파랑', 옵션2: 'm', 옵션3: '', 사용여부: true, 재고: 20
    },
  ]
};

let amount = 0;
for (let i = 1; i < 3660; i++) {
  amount += i;
  amount += 200;
}
console.log(amount)
// 세후 이자 1.692% / 365
// 하루 이자 0.004635%
let won = 20000;
for (let i = 1; i < 3660; i++) {
  won += won * 0.00004635;
  won += 200;
}
console.log(won);