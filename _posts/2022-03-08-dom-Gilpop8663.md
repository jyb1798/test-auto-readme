---
title: 'DOM (The Document Object Model)'
date: '2022-03-09'
---

<img src="https://user-images.githubusercontent.com/80146176/157282333-55f28b16-3b4c-4fa6-8440-1a4ece79ade4.png">

문서 객체 모델(The Document Object Model, 이하 DOM) 은 HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 nodes와 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

예를 들어서 자바스크립트가 HTML을 이용할 수 있게 DOM이 자바스크립트와 HTML을 서로 이어주는 역할을 합니다.

<h2>돔은 어떻게 생성될까요?</h2>

아래의 HTML 예시에서,
<img src="https://user-images.githubusercontent.com/80146176/157275328-aa88cf35-c5ef-447a-aa51-14976da79eeb.png">
이 문서는 아래와 같은 노드 트리로 표현됩니다.

<img src="https://user-images.githubusercontent.com/80146176/157277989-ee47f236-dbad-4e0b-ad2d-79964a6f0863.png">

웹 페이지는 일종의 문서(document)다. 이 문서는 웹 브라우저를 통해 그 내용이 해석되어 웹 브라우저 화면에 나타나거나 HTML 소스 자체로 나타나기도 한다. 동일한 문서를 사용하여 이처럼 다른 형태로 나타날 수 있다는 점에 주목할 필요가 있다. DOM 은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다. DOM 은 웹 페이지의 객체 지향 표현이며, 자바스크립트와 같은 스크립팅 언어를 이용해 DOM 을 수정할 수 있다.

<h1>DOM이 아닌 것</h1>
위 예제 혹은 DevTools에서 DOM은 마치 HTML 문서와 1 대 1 매핑이 되는 것처럼 보입니다. 그러나 둘 간에는 몇 가지 차이점이 있습니다.
DOM이 무엇인지 완전히 이해하기 위해, 어떤 것이 DOM이 아닌지 살펴보겠습니다.

<h2>1. DOM은 HTML이 아닙니다.</h2>
   <div>DOM은 HTML 문서로부터 생성되지만 항상 동일하지 않습니다. DOM이 원본 HTML 소스와 다를 수 있는 두 가지 케이스가 있습니다.</div>

<h3>작성된   HTML 문서가 유효하지 않을 때</h3>

DOM은 유효한 HTML 문서의 인터페이스 입니다. DOM을 생성하는 동안, 브라우저는 유효하지 않은 HTML 코드를 올바르게 교정합니다.  
아래 예시를 살펴보시면,
<img src="https://user-images.githubusercontent.com/80146176/157279788-1a270089-a7c3-49a7-971f-dbe5c6f119eb.png">

문서에 유효한 HTML 규칙의 필수 사항인 `<head>` 와 `<body>` 요소가 빠져있습니다. 그렇지만 생성된 DOM 트리에는 올바르게 교정되어 나타납니다.
<img src="https://user-images.githubusercontent.com/80146176/157279951-e0acc623-3b94-4fe7-a634-32c4b7c1ffd7.png">

<h3>자바스크립트에 의해 DOM이 수정될 때</h3>
<div>
DOM은 HTML 문서의 내용을 볼 수 있는 인터페이스 역할을 하는 동시에 동적 자원이 되어 수정될 수 있습니다.
예를 들어, 자바스크립트를 사용해 DOM에 새로운 노드를 추가할 수 있습니다.
</div>
<img src="https://user-images.githubusercontent.com/80146176/157280361-afc86506-879b-46da-811f-4bd29ceb7fb7.png">

이 코드는 DOM을 업데이트합니다. 하지만 HTML 문서의 내용을 변경하진 않습니다.

<h2>2. DOM은 브라우저에서 보이는 것이 아닙니다.</h2>
<div>브라우저 뷰 포트에 보이는 것은 렌더 트리로 DOM과 CSSOM의 조합입니다. 렌더 트리는 오직 스크린에 그려지는 것으로 구성되어 있어 DOM과 다릅니다.
달리 말하면, 렌더링 되는 요소만이 관련 있기 때문에 시각적으로 보이지 않는 요소는 제외됩니다.
예를 들어, display: none 스타일 속성을 가지고 있는 요소입니다.</div>

<img src="https://user-images.githubusercontent.com/80146176/157280743-c5cbe81b-8ae2-4033-a4f5-51f6f5c492e8.png">

DOM은 <p> 요소를 포함시킵니다.

<img src="https://user-images.githubusercontent.com/80146176/157280860-e8b7a80f-1fd2-43b5-9656-e1ead471328f.png">

그러나 렌더 트리에 해당하는 뷰 포트에 표시되는 내용은 <p> 요소를 포함하지 않습니다.

<img src="https://user-images.githubusercontent.com/80146176/157280912-7f622188-6408-4abc-8801-49b7ec0f09fc.png">

<h2>3. DOM은 개발도구에서 보이는 것이 아닙니다.</h2>

<div>개발도구의 요소 검사기는 DOM과 가장 가까운 근사치를 제공합니다. 그러나 개발도구의 요소 검사기는 DOM에 없는 추가적인 정보를 포함합니다.
가장 좋은 예는 CSS의 가상 요소입니다. ::before 과 ::after 선택자를 사용하여 생성된 가상 요소는 CSSOM과 렌더 트리의 일부를 구성합니다.
하지만, 기술적으로 DOM의 일부는 아닙니다. DOM은 오직 원본 HTML 문서로부터 빌드 되고, 요소에 적용되는 스타일을 포함하지 않기 때문입니다.
가상 요소가 DOM의 일부가 아님에도 불구하고, 요소 검사기에서는 아래와 같이 확인됩니다.</div>

<img src="https://user-images.githubusercontent.com/80146176/157281191-b0da70fe-7632-4bda-b86b-ff8321ed211d.png">

이러한 이유로 가상 요소는 DOM의 일부가 아니기 때문에 자바스크립트에 의해 수정될 수 없습니다.

<h2>요약정리</h2>
DOM은 HTML 문서에 대한 인터페이스입니다. 첫째로 뷰 포트에 무엇을 렌더링 할지 결정하기 위해 사용되며,
둘째로는 페이지의 콘텐츠 및 구조, 그리고 스타일이 자바스크립트 프로그램에 의해 수정되기 위해 사용됩니다.
DOM은 원본 HTML 문서 형태와 비슷하지만 몇 가지 차이점이 있습니다.

- 항상 유효한 HTML 형식입니다.
- 자바스크립트에 수정될 수 있는 동적 모델이어야 합니다.
- 가상 요소를 포함하지 않습니다. (Ex. ::after)
- 보이지 않는 요소를 포함합니다. (Ex. display: none)

<h2>참고 문서</h2>

- MDN - <a href="https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction#what_is_the_dom" target="_blank">DOM 소개</a>
- <a href="https://wit.nts-corp.com/2019/02/14/5522" target="_blank">(번역) DOM은 정확히 무엇일까?</a> 작성자 : Ire Aderinokun , 번역자 :고 우영
