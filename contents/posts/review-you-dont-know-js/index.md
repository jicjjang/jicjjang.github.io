---
title: "[Review] 중급자를 위한 You don't know JS"
date: "2017-08-20"
tags: [review, javascript]
---

오늘은 `[You don't know js]` 도서에 대한 리뷰를 진행해보려 합니다.
책을 읽고 내용을 정리한 적은 있지만 책에 대한 리뷰를 해본적은 없는 것 같은데
한빛미디어에서 진행하는 `[나는 리뷰어다!]` 이벤트를 통해 책을 받아보고 리뷰를 진행을 하려 합니다.
(사실 원래 사려고 했던 서적...)

사실 이 리뷰는 7월 중순까지 진행해야 하던 이벤트였습니다... (제가 메일을 정확히 확이 못한 탓이죠... #한빛미디어 죄송합니다 ㅠㅠ)
하지만 책을 다 읽고 리뷰를 진행하고 싶었고, 두껍지않은 2~300장 내외의 책이었지만 일과 병행하며 읽기에
쉽게 읽히는 책은 아니였습니다. (제가 게이른 탓이겠죠...)

한장 한장을 넘겨가며 깊게 고민해야 하는 부분이 대다수였던 책으로 분명 초보자를 위한 책은 아니었습니다.

---

잡설은 제외하고 책을 읽어본 것에 대한 느낌과 중요하다 생각되는 부분에 대한
간략한 정리로 리뷰를 진행해보려 합니다.

## Chap 4. 강제 변환

엥? 1번은 어디가고 4번부터...

이 책은 부제는 `타입과 문법, 스코프와 클로저` 입니다. Chap1 부터 문법이 나옴에도 불구하고
타입이라는 말이 첫 머리부터 오는데 이유가 있습니다. (제가 갖다 붙인걸수도 있겠네요)

물론 다른 챕터에서도 중요한 부분이 많지만, 간단한 정리와 ES6에 대한 설명들, ES6가 들어오면서
기존에 쓰던 부분이 어떻게 보강이 되는지에 대한 설명이 대다수이고, 강제 변환만큼 중요한 챕터는 없었습니다.

모든 챕터 중에 가장 많은 페이지를 차지하고, 저자가 중요하게 생각한다는게 느껴지는 부분입니다.
이 챕터를 읽으면서 저는 아직 중급자가 되기엔 멀었으며, 그저 자바스크립트의 겉을 핥고있는 너드라는걸
깨달았습니다. (주륵... ㅠㅠ)

명시적 형변환과 암시적 형변환에 대해 깊은 부분까지 파고드는데 형변환의 정의인
ToNumber, ToString, ToPrimitive가 어떤 상황에서 어떤 원리로 적용되는지에 대해 `매우` 자세하게
나와있습니다. (이렇게까지 해야 초급을 벗어날 수 있구나 라는걸 확실히 깨달을 정도로 DEEP하게!)

```javascript
// 형변환 시 특이한 값이 나오는 경우
Number([]); // 0
Number(['test']); // NaN

// falsy
!!undefined;
!!null;
!!0;
!!NaN;
!!'';

// truthly
// 0이 아닌 모든 숫자와 문자열
```

우리가 true/false로 알았던 값들이 사실은 완전한 true/false가 아닌 truthly/falsy였다는 것이
꽤나 신기했습니다. 그 전까지는 아무 생각없이 `'아 이렇게 하면 false가 나왔지?? true가 나왔지??'`
하며 사용했던 부분을 다시 한 번 사용하면서 쓰게 되더군요.

## Chap 5. 문법

가장 멘붕이 왔던 부분! `[] + {} / {} + []` 였습니다. `[] + {}`의 결과는 "[object Object]"
이며, `{} + []`의 결과는 0입니다. 강제 변환과 연관이 있는 부분으로 블록의 문법이 어떤 식으로 사용되는지
나오며 보통은 사용하지 않으나, 한번 즈음은 사용될 일이 있는 문법이고 그 문법이 ES6를 만나 어떻게
발전되는지에 대한 얘기들이 주를 이룹니다. 그리고 사용을 지향하는지 지양하는지를 알려주는데 노력합니다.

## 단점과 장점

제가 느낀 명확한 단점은 `"사용자들이 어려워하는 부분을 알려주거나 ES6를 알려주거나... 하나에 집중하는 편이 좋지 않을까"` 하는 점입니다. 저자가 사용자들이 어려워 하는 부분에 대해 알려주고 싶고,
ES6도 알려주고 싶고... 많은 것을 전달해주고 싶어하는 것을 알 수 있으나, 하나에 집중하지 못해 초보에서
중급으로 넘어가고자 하는 사용자 (특히 ES6 문법을 모르는)들은 어려움에 봉착할 여지가 있다고 느꼈습니다.
하지만, ES6에 대해서 어느정도 알기만 한다면 기초의 꽤나 깊은 부분까지 알 수 있는 것 같습니다.
이 책을 읽고 You don't know JS의 다른 시리즈들도 확실히 읽어야겠다는 확신했습니다.

결국 드리고 싶은 말은 `[이 책을 읽기 전에 ES6만 어느정도 공부하고 보자]` 입니다. 그러면 확실히
중급 이상으로 올라갈 수 있으며, 다른 시리즈까지 읽는다면 고급단계로 올라갈 수 있지 않을까 생각합니다.

---

## 마지막으로...

자바스크립트 서적을 공부하면서 한 계단을 올랐다고 느꼈던 책은 더글라스 크락포드의
`자바스크립트 핵심 가이드`를 제외하고 처음이었습니다. 그 다음단계로 넘어가기가 힘들었는데 그 다음 계단을
올라갈 수 있게 도와준 책이라 생각됩니다.

![hanbit](./hanbit.jpg)

중고급 개발자로 올라갈 수 있게 도와주는 (번역된)서적이 적은 국내시장에서 한단계 올라갈 수 있는
발판이 될 수 있는 책이라 확신합니다.
