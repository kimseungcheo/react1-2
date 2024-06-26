# 김승철 201630240
### 15.2 styled-components
CSS 문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어 주는 오픈소스 라이브러리 입니다.
컴포넌트의 개념을사용하고 있어 리액트 개발에 많이 사용됩니다.
styled-components 설치하기
npm install --save styled-components
교재에는 위와 같이 나와있지만 npm v5부터는 사용하지 앟아도 됩니다 자동추가가 됨
import해서 사용

styled-components 기본 사용법
태그드 템플릿 리터럴을 사용하여 구성요소의 스타일을 지정합니다.
태그드 템플릿 리터럴은 자바스크립트에서 제공하는 문법 중 하나로 리터럴을 템플릿 형태로 사용하는 것입니다.
styled.<HTML tag>`...`의 형태로 정의한후 컴포넌트를 사용해서 사용합니다.

styled-components
### 15.1 CSS
##  CSS란?
CSS는 Cascading Style Sheets의 약자로 스타일링을 위한 언어 입니다.
Cascading이란 계단식이라는 뜻으로 한 엘리먼트에 여러 스타일이 적용 될 경우 스타일간의 충돌을 막기 위해 계단식으로 스타일을 적용시키는 규칙을 갖고 있습니다.
즉하나의 스타일이 여러개의 엘리먼트에 적용될 수도 있고, 하느ㅏ의 엘리먼트에도 여러개의 스타일이 적용될 수도 있습니다.
엘리먼트에 스타일이 적용되는 규칙을 selector(선택자)라고 합니다. CSS는 이 선택자와 스타일로 이루어 집니다.
이번장에서는 선택자와 스타일을 카테고리 별로 나누어 학습합니다.

##  CSS문법과 선택자
선택자를 먼저 쓰고 다음에 적용할 스타일을 중괄호 한에 세미콜론으로 구분하여 하나씩 작성합니다.
선택자는 HTML엘리먼트를 직접 넣어도 되고, 엘리먼트의 조합 혹은 class의 형태로 작성가능합니다.
스타일은 property(속성)과 key Value(키값)으로 이루어 지며, 이들은 콜론 으로 구분하고, 각 스타일은 세미콜론으로 구분합니다
몇가지 선택자의 예가 있습니다
# 첫번째는 태그를 직접 사용하는 것 입니다.
`
h1{
  color: green;
}
`
# 두번쨰는 id선택자를 설명하는데 사용하지 않습니다 id선택자는 javascript에서 id선택자를 사용하기 때문에 css의 id값인지 javascript의 id값인지 구분하기 힘들기 때문입니다.

# 세번째는 class선택자입니다. HTML태그로 특정할수없는 스타일은모두 class로 정의합니다.
`
<span class="medium">
  ...
</span>

.medium {
  font-size: 20px;
}
`
# 네번째 자손 선택자 (Descendant Selector)

특정 요소 내에 있는 다른 특정 요소에 스타일을 적용합니다.


div p {
    margin: 10px;
}
<div> 요소 내의 모든 <p> 요소에 10픽셀의 여백을 줍니다.

# 다섯번째 자식 선택자 (Child Selector)

특정 요소의 직계 자식 요소에 스타일을 적용합니다.


ul > li {
    list-style-type: none;
}
모든 <ul> 요소의 직계 자식인 <li> 요소의 리스트 스타일을 제거합니다.

# 여섯번째 속성 선택자 (Attribute Selector)

특정 속성을 가진 요소에 스타일을 적용합니다.

input[type="text"] {
    border: 1px solid black;
}

# 일곱번째는 상태 선택자입니다.
:hover
:active
:focus
:checked
:first-child, :lastchild 
:hover

사용자가 요소 위에 마우스를 올렸을 때 적용됩니다.
css


a:hover {
    color: green;
}
사용자가 링크에 마우스를 올렸을 때 글자 색상이 초록색으로 변경됩니다.

:active

사용자가 요소를 클릭하는 순간에 적용됩니다.
css


button:active {
    background-color: blue;
}
사용자가 버튼을 클릭하는 동안 버튼의 배경 색상이 파란색으로 변경됩니다.

:focus

요소가 포커스를 받을 때 적용됩니다. 주로 입력 필드에 사용됩니다.
css


input:focus {
    border: 2px solid red;
}
입력 필드가 포커스를 받을 때 테두리가 빨간색으로 변경됩니다.

:checked

체크박스나 라디오 버튼이 선택된 상태일 때 적용됩니다.

input[type="checkbox"]:checked {
    background-color: yellow;
}
체크박스가 선택되었을 때 배경 색상이 노란색으로 변경됩니다.

:first-child

부모 요소의 첫 번째 자식 요소에 스타일을 적용합니다.

p:first-child {
    font-weight: bold;
}
부모 요소의 첫 번째 <p> 요소의 글자를 굵게 만듭니다.

:last-child

부모 요소의 마지막 자식 요소에 스타일을 적용합니다.

p:last-child {
    font-style: italic;
}
부모 요소의 마지막 <p> 요소의 글자를 이탤릭체로 만듭니다.

이와 같은 상태 선택자들은 웹 페이지 요소의 상호작용성 및 동적 스타일링을 가능하게 해줍니다.

## 레이아웃과 관련된 속성

# 화면에 엘리먼트를 어떻게 배치할 것인지를 정의합니다
가장 중요한 속성은 display입니다.
모든 엘리먼트는 기본 display속성을 갖고 있지만 이 기본값을 변경해 줄 수 있습니다.
div{
  display:none | block | inline | flex;
}
none는 존재는 하지만 화면에 보이지 않는 것으로 자바스크립트를 넣을때 많이 사용합니다
block은 세로로 정렬되며, width의 height를 가질수 있다 크기와 상관없이 한 줄을 점유합니다
inline은 가로로 정렬되면 width의 height를 가질수 없으며 컨텐츠의 크기만큼 공간을 점유합니다
inline-block은 기본적으로 inline의 특성을 갖기만, width와 height등 block의 특성을 사용할 수 있습니다.

# 대표적인 block과 inline태그는 다음과 같습니다.
블록 요소 (Block Elements)
블록 요소는 항상 새로운 줄에서 시작하며, 가로 방향으로 가능한 모든 공간을 차지합니다. 일반적으로 콘텐츠의 구조를 형성하는 데 사용됩니다.

대표적인 블록 요소:

<div>: 문서 내의 구획을 정의합니다.
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: 제목을 정의합니다.
<p>: 단락을 정의합니다.
<ul>, <ol>, <li>: 목록을 정의합니다.
<table>, <tr>, <td>, <th>: 표를 정의합니다.
<header>: 문서의 머리말을 정의합니다.
<footer>: 문서의 꼬리말을 정의합니다.
<section>: 문서의 구역을 정의합니다.
<article>: 독립적인 콘텐츠를 정의합니다.
<nav>: 네비게이션 링크를 정의합니다.
인라인 요소 (Inline Elements)
인라인 요소는 같은 줄에 다른 요소와 나란히 위치할 수 있으며, 콘텐츠의 일부를 강조하거나 스타일링하는 데 사용됩니다.

대표적인 인라인 요소:

<span>: 텍스트를 구획화하여 스타일을 적용합니다.
<a>: 하이퍼링크를 정의합니다.
<img>: 이미지를 삽입합니다.
<strong>: 텍스트를 굵게 표시합니다.
<em>: 텍스트를 이탤릭체로 표시합니다.
<br>: 줄바꿈을 삽입합니다.
<input>: 사용자 입력 필드를 정의합니다.
<label>: 폼 요소에 대한 레이블을 정의합니다.
<code>: 짧은 코드 조각을 정의합니다.
<abbr>: 약어를 정의합니다.

flex는 컨테이너의 형태로 엘리먼트를 관리합니다 Mozilla참고 
http://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox

최근 들어서는 Grid를 많이 사용하며 Flex가 1차원적이라면 Grid는 2차원 적으로 관리가 가능합니다.
http://developer.mozilla.org/ko/play

visibility속성은 엘리먼트의 가시성을 정의합니다.

<style>
div{
  visibility:visible|hidden;
}
</style>

display: none과 visibility: hidden의 차이

display: none: 요소를 화면에서 완전히 제거합니다. 요소가 차지하는 공간도 사라지고, 해당 요소는 렌더링 트리에서 제외됩니다.
visibility: hidden: 요소가 화면에 보이지 않지만, 여전히 그 자리를 차지합니다. 요소의 공간은 유지되지만, 시각적으로는 보이지 않습니다.
position 속성 (http://developer.mozilla.org/en-US/docs/Web/CSS/position)
position 속성은 요소의 위치를 어떻게 지정할지를 정의합니다. 각 값의 의미는 다음과 같습니다:

static: 기본값으로, 요소는 문서의 정상적인 흐름에 따라 배치됩니다. top, right, bottom, left 속성은 적용되지 않습니다.
relative: 요소는 문서의 정상적인 흐름에 따라 배치되지만, top, right, bottom, left 속성을 사용하여 자신의 원래 위치에서 상대적으로 이동할 수 있습니다.
absolute: 요소는 문서의 흐름에서 제거되고, 가장 가까운 position이 relative, absolute, fixed 또는 sticky로 설정된 조상 요소를 기준으로 배치됩니다. 조상 요소가 없다면 body 요소를 기준으로 합니다.
fixed: 요소는 화면(viewport)을 기준으로 고정됩니다. 스크롤을 하더라도 요소는 항상 같은 위치에 고정되어 있습니다.
sticky: 요소는 스크롤 위치에 따라 relative와 fixed 사이에서 전환됩니다. 요소가 특정 스크롤 위치에 도달하면 고정(fixed)되고, 그전까지는 상대적(relative)으로 위치합니다.
추가 설명

fixed와 sticky의 차이점:
fixed: 요소가 항상 뷰포트에 고정되어 있습니다. 스크롤해도 위치가 변하지 않습니다.
sticky: 요소가 스크롤에 따라 고정 위치로 변합니다. 예를 들어, 요소가 뷰포트의 상단에 도달할 때까지는 relative로 위치하고, 그 이후에는 fixed로 위치하게 됩니다.
아래는 예시 코드입니다:

<style>
  .static {
    position: static;
  }
  .relative {
    position: relative;
    top: 10px; /* 원래 위치에서 10px 아래로 이동 */
  }
  .absolute {
    position: absolute;
    top: 20px; /* 가장 가까운 조상 요소 또는 body를 기준으로 20px 아래로 이동 */
  }
  .fixed {
    position: fixed;
    top: 0; /* 뷰포트의 상단에 고정 */
  }
  .sticky {
    position: sticky;
    top: 30px; /* 뷰포트의 상단에서 30px에 도달할 때까지 relative로 위치, 이후 fixed로 고정 */
  }
</style>

<div class="static">Static Position</div>
<div class="relative">Relative Position</div>
<div class="absolute">Absolute Position</div>
<div class="fixed">Fixed Position</div>
<div class="sticky">Sticky Position</div>



## 폰트와 관련된 속성
1. font-family
텍스트에 사용할 폰트의 종류를 지정합니다. 여러 폰트를 쉼표로 구분하여 나열할 수 있으며, 브라우저는 나열된 순서대로 폰트를 적용하려 시도합니다.

css


p {
  font-family: "Arial", "Helvetica", sans-serif;
}
2. font-size http://nekocalc.com
텍스트의 크기를 지정합니다. 단위로는 px, em, rem, % 등을 사용할 수 있습니다.

css


h1 {
  font-size: 24px;
}

p {
  font-size: 1.5em;
}
3. font-weight
텍스트의 굵기를 지정합니다. 값으로는 normal, bold, bolder, lighter, 또는 숫자(100, 200, ..., 900)를 사용할 수 있습니다.

css


strong {
  font-weight: bold;
}

p {
  font-weight: 600; /* 중간 굵기 */
}
4. font-style
텍스트의 스타일을 지정합니다. 값으로는 normal, italic, oblique를 사용할 수 있습니다.

css


em {
  font-style: italic;
}
5. font-variant
텍스트를 작은 대문자(small-caps)로 변환합니다. 값으로는 normal과 small-caps가 있습니다.

css


p {
  font-variant: small-caps;
}
6. line-height
텍스트의 줄 높이를 지정합니다. 단위로는 숫자, px, em, % 등을 사용할 수 있습니다. 텍스트의 가독성을 높이기 위해 사용됩니다.

css


p {
  line-height: 1.5; /* 1.5배 높이 */
}
7. letter-spacing
텍스트의 글자 간 간격을 지정합니다. 단위로는 px, em 등을 사용할 수 있습니다.

css


p {
  letter-spacing: 2px; /* 글자 사이에 2px 간격 */
}
8. word-spacing
텍스트의 단어 간 간격을 지정합니다. 단위로는 px, em 등을 사용할 수 있습니다.

css


p {
  word-spacing: 4px; /* 단어 사이에 4px 간격 */
}
9. text-transform
텍스트의 대소문자를 제어합니다. 값으로는 none, capitalize, uppercase, lowercase가 있습니다.

css


p {
  text-transform: uppercase; /* 모든 텍스트를 대문자로 변환 */
}
10. text-align
텍스트의 정렬을 지정합니다. 값으로는 left, right, center, justify가 있습니다.

css


p {
  text-align: center; /* 텍스트를 가운데 정렬 */
}
11. font
font 속성을 사용하여 여러 폰트 관련 속성을 한 번에 설정할 수 있습니다. 순서를 지켜야 하며, font-style, font-variant, font-weight, font-size, line-height, font-family 순으로 작성합니다.

css


p {
  font: italic small-caps bold 16px/1.5 "Arial", sans-serif;
}

글꼴 분류 serif,sans-serif,cursive등등..

기타 속성
투명도 컬러값 #ff000055 
rgb컬러값 rgb(255 ,0, 0)
HSL 컬러값 hsl(120, 100%, 50%, 0.3)
미리 정의된 색상의 이름: red
currentcolor 키워드: 현재 지정된 색상 값을 사용
*HUE: hsl(hue, saturation, lightness)

# 14.6 useContext
함수형 컴포넌트에서 컨텍스트를 사용하기 위해 컴포넌트를 매번 Consumer컴포넌트로 감싸주는 것보다 더 좋은 방법이 있습니다

useContext() 혹은 React.createContext()함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴합니다.
이방법도 가장 가까운 상위 Provider로부터 컨텍스트의 값을 받아옵니다
만일 값이 변경되면 useContext()혹은 사용하는 컴포넌트가 재 렌더링 됩니다.
또한 useContext()훅을 사용할 때에는 파라미터로 컨텍스트 객체를 넣어줘야 한다는 것을 기억해야 합니다.

# 14.5 여러개의 컨텍스트 사용하기 
여러개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용합니다.
예제에서는 ThemeContext와 UserContext를 중첩해서 사용하고 있습니다.
이런 방법으로 여러개의 컨텍스트를 동시에 사용할 수 있습니다.
하지만 두개 또는 그이상의 컨텍스트 값이 자주 함꼐 사용될경우 모든 값을 한번에 제공해주는 별도의 render prop컴포넌트를 직접 만드는것을 고려하는 것이 좋습니다.

# 14.4 컨텍스트 API
이절에서는 리액트에서 제공하는 컨텍스트 API를 통해 컨텍스트를 어떻게 사용하는지에 대해 알아 봅니다,

[1]React.createContext
컨텍스트를 생성하기 위한 함수입니다.
파라메타에는 기본값을 넣어주면 됩니다
하위컴포넌트는 가장 가까운 상위 레벨의 Provider로부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을수 없다면 설정한 기본값을 사용하게 됩니다.
`const MyContext = React.createContext(기본값);`


[2]Context.Provider
Context.Provider컴포넌트를 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됩니다.

<MyContext.Provider value= {/* some value */}>
Provider컨포넌트에는 value라는 prop이 있고 이것은 Provider컴포넌트 하위에 있는 컴포넌트들에게 전달이 됩니다.
하위 컴포넌트를 consumer컴포넌트라고 부릅니다

# Provider value에서 주의해야 할 사항
1. 불필요한 리렌더링 방지:
Provider의 value가 변경될 때마다 해당 Provider를 구독하고 있는 모든 컴포넌트가 다시 렌더링됩니다. 따라서 value가 자주 변하지 않도록 관리하는 것이 중요합니다.
value 속성에 직접 객체를 할당하면, React는 객체의 참조가 변경된 것으로 인식하여 매번 리렌더링을 유발할 수 있습니다. 이를 방지하기 위해 useMemo를 사용해서 메모이제이션을 적용할 수 있습니다.
jsx
import React, { useMemo, useState } from 'react';
const MyContext = React.createContext();
const MyProvider = ({ children }) => {
  const [state, setState] = useState({});

  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
2. 값의 안정성 유지:
value로 전달하는 객체나 함수가 불필요하게 변경되지 않도록 주의해야 합니다. 이는 특히 함수형 컴포넌트에서 상태 업데이트 시 함수나 객체가 새로 생성되지 않도록 해야 합니다.
useCallback과 useMemo를 활용하여 함수나 객체를 메모이제이션하여 불필요한 참조 변경을 막을 수 있습니다.
jsx

const updateValue = useCallback(() => {
  // 업데이트 로직
}, [/* dependencies */]);

const value = useMemo(() => ({ state, updateValue }), [state, updateValue]);

3. Context 분할:

하나의 Context에 너무 많은 상태나 로직을 담지 않도록 주의합니다. 필요에 따라 여러 개의 Context로 분리하여 관리하는 것이 좋습니다. 이렇게 하면 특정 상태 변화에 의해 불필요한 컴포넌트 리렌더링을 방지할 수 있습니다.
jsx


const UserContext = React.createContext();
const ThemeContext = React.createContext();

const App = () => (
  <UserProvider>
    <ThemeProvider>
      <YourComponent />
    </ThemeProvider>
  </UserProvider>
);

4. 디버깅과 유지보수:

Context를 사용하여 상태를 관리할 때, 상태의 흐름과 데이터 변경을 추적하기 어려울 수 있습니다. 디버깅과 유지보수를 쉽게 하기 위해 상태 관리 라이브러리(예: Redux, Zustand 등)를 사용하는 것도 고려해볼 수 있습니다.
이러한 주의 사항들을 염두에 두고 Context.Provider를 사용하면, 애플리케이션의 성능과 유지보수성을 높일 수 있습니다.

[3] Class.contextType
provider하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용합니다.
Class 컴포넌트는 더 이상 사용하지 않으므로 참고만 합니다

[4] Context.Consumer
함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구동할 수 있습니다.
<MyContext.Consumer>
  {value = > /* 컨텍스트의 값에 따라서 컴포넌트들을 렌더링*/}
</MyContext.Consumer>

컴포넌트의 자식으로 함수가 올수 있는데 이것을 function as a child라고 합니다
Context.Consumer로 감싸주면 자식으로 들어간 함수가 현재 컨텍스트의 value를 받아서 리액트노드로 리턴합니다.
함수로 전달되는 value는 Provider의 value prop와 동일 합니다.

[5] Context.displayName
컨텍스트 객체는 displaName이라는 문자열 속성을 갖습니다.
크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시 할 떄 displayName을 함께 표시해 줍니다
`const MyContext = React.createContext(some value)
MyContext.displayName= 'MyDisplayName';

//개발자 도구에 "MyDisplayName.Provider로 표시됨
<MyContext.Provider>
//개발자 도구에 "MyDisplayName.Consumer로 표시됨
<MyContext.Consumer>
`

 # 14.3 컨텍스트를 사용하기 전에 고려할점
컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용합니다.
하지만 무조건 컨텍스트를 사용하는 것이 좋은 것은 아닙니다.
왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문입니다.
따라서 다른 레벨의 많은 컴포넌트가 데이터를 필요로하는 경우가 아니면 PROPS를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합합니다.

실제 USER와 avatarSize를 사용하는 것은 Avatar컴포넌트 뿐인데 여러 단계에 걸쳐 props를 전달하는 경우 컨텍스트를 사용하지 않고 문제를 해결할 수 있는 방법은 Avatar컴포넌트를 변수에 저장하여 직접 넘겨주는 것입니다.
이렇게 하면 중간 단계의 컴포넌트들은 user와 avatarSize에 대해 몰라도 됩니다.
하지만 방금의 예제가 모든 상황에서좋은 것은 아닙니다.
데이터가 많아질수록 상위 컴포넌트가 점점 더 복잡해지기 떄문입니다.
이런경우 하위 컴포넌트를 여러 개의 변수로 나눠서 전달하면 됩니다.

하지만 어떤 경우에는 하나의 데이터에 다양한 레벨에 있는 중첩된 컴포넌트들의 접근이 필요할 수 있습니다
이런 경우에는 컨텍스트가 유리합니다
컨텍스트는 해당 데이터와 변경사항을 모두 하위 컴포넌트들에게 broadCast해주기 때문입니다.
컨텍스트를 사용하기에 적합한 데이터의 대표적인 예로는 지역정보 UI테마 그리고 캐싱된 데이터 등이 있습니다.

# 14.2 언제 컨텍스트를 사용해야 할까?

여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI테마 현재 선택된 언어 등이 있습니다.
이런 데이터들을 기존의 방식대로 컴포넌트의 props를 통해 넘겨주는 예를 페이지 392에서 보여주고 있습니다
예제에서 처럼 props를 통해 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해 집니다.
또한 반복적인 코드를 계속해서 작성해주어야 하기 때문에 비효율적이고 가독성이 떨어집니다
컨텍스트를 사용하면 이러한 방식을 깔끔하게 개선할 수 있습니다.
페이지 393의 예제는 컨텍스트를 사용한 예입니다.Reacct.createContext()함수를 사용해서 ThemeContext라는 이름의 컨텍스트를 생성합니다.
컨텍스트를 사용하려면 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 합니다.

# 14.1 컨텍스트란 무엇인가?
기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달되었습니다.
컴텐스트는 리액트 ㅁ컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방싣 대신컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식을 제공합니다
이 것을 통해 곧바로 컴포넌트에 전달하는 새로운 방식으로 제공합니다
이것을 통해 어떤 컴포넌트 라도 쉽게 데이터에 접근할 수 있습니다.
컨텍스트를 사용하면 일일이 props로 전달할 필요없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 접근 할수 있습니다.

# 13.3 Card컴포넌트 만들기
Card.jsx 컴포넌트 만들기 / 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트.

# 13.2상속에 대해 알아보기
합성과 대비되는 개념으로 상속(Inheritence)이 있습니다
자식 클래스는 부모클래스가 가진 변수나 함수 등의 속성을 모두 갖게되는 개념입니다.
하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생셩합니다.

복잡한 컴포넌트를 쪼개 여러개의 컴포넌트로 만들고 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자

# 13.1 합성에 대해 알아보지

합성은 여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것입니다
조합 방법에 따라 합성의 사용기법은 다음과같이 나눌수 있습니다.

[1] Containment (담다, 포함하다, 격리하다)
특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법입니다.
컴포넌트에따라서는 어떤 자식 엘리먼트감들어올지 미리 예상할 수 없는 경우가 있습니다
범용적인 박스 역할을 하는 sidevar혹은 dialog와 같은 컴포넌트에서 특히 자주 볼수 있습니다
이런 컴포넌트에서느는children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는것이 좋습니다
이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용합니다.
리액트에서는 props.children을 통해 하위 컴포넌트를 하나로 모아서 제공해 줍니다
만일 여러개의 children집합이 필요한 경우는 별도로 props를 정의해서각각 원하는 컴포넌트를 넣어줍니다
예와 같이 SPitPane은 화면을 왼쪽과 오른쪽으로 분할해 주고 App에서는 SpitPane을 사용해서 left, right두개의 props를 정의하고 있습니다
즉 App에서 left, right를 props를 받아서 화면을 분할하게 됩니다 이처럼 여러개의 Children집합이 필요한경우 분할해서 사용

[2] Specialization(특수화, 전문화)
웰컴 다이얼로그는 다이얼로그의 특별한 케이스입니다
범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 합니다
객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다
리액트에서는 합성을 사용하여 특수화를 구현합니다.
Dialog.jsx 와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 합성방식입니다.

[3]Containment와 Specialization을 같이 사용하기
Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다.
페이지 376의 코드를 참고합니다
Dialog컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props.children을 추가 했습니다
Dialog컴포넌트를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기 위해 <input>과 <button>을 사용합니다.
이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시됩니다.

이러한 형태로 Containment와 Specialization을 동시에 사용할 수 있습니다.

# 12.1 Shared State 
Shared State는 state의 공유를 의미합니다

같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것입니다.
부모 컴포넌트가 섭씨 온도의 state를 갖고 있고, 이것을 컴포넌트 C와 컴포넌트 F가 공유해서 사용하는 것을 보여줍니다.
//
컴포넌트 {degree: 25}->컴포넌트 C(온도를 섭씨로 표현){degree: 25}->컴포넌트 F(온도를 화씨로 표현){degree: 77}

정리하면 상위 컴포넌트인 Calculator에서 온도와 단위를 state로 갖고 두개의 하위 컴포넌트는 각각섭씨와 화씨로 변환된 온도와 단위 그리고 온도를 업데이트하기위해 함수를 props로 갖고 있으며 이렇게 모든ㄴ 컴포넌트가 state를 갖지 않고 상위 컴포넌트로 올려서 공유하면 리액트를 더욱 간결하고 효율적으로 개발할 수 있습니다.
# select 태그

select 태그도 textarea와 동일

`function FruitSelect(props) {
   const [value, setValue] = useState('grape')
}
<select>
<option value = "apple"> 사과</option>
<option value = "banana"> 바나나</option>
<option selected value = "grape"> 포도</option>
<option value = "watermelon"> 수박</option>
</select>
`

# File input 태그

File input 태그는 그값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다
`
<input type="file"/>
`

# Input Null Value

제어 컴포넌트에 value prop 을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀수 없습니다.
만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.
 # 7.6 useRef
 useRef()혹은 레퍼런스를 사용하기 위한 훅입니다.
 레퍼런스란 특정 컴포넌트에 접근할수 있는 객체를 의미합니다
 useRef()훅은 바로 이 레퍼런스 객체를 반환합니다
 레퍼런스 객체에는 .current라는 속성이 있는데 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
 const refContainer = useRef(초기값);
### State
1. state란?
* state는 리액트 컴포넌트의 상태를 의미합니다.
* 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
* 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
* state가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.

2. state의 특징
* 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.
* state는 변경은 가능하다고 했지만 직접 수정해서는 안됩니다.
* 불가능하다고 생각하는 것이 좋습니다.
* state를 변경하고자 할 때에는 setstate()함수를 사용합니다.

## 생명주기에 대해 알아보기
* 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.
* constructor가 실행 되면서 컴포넌트가 생성됩니다.
* 생성 직후 componentDidMount() 함수가 호출됩니다.
* 컴포넌트가 소멸하기 전까지 여러 번 랜더링 합니다.
* 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.
* 그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출됩니다.
* 마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount()함수가 호출됩니다.

# 7.4 useMemo

 useMemo()또는 Memoized value 를 리턴하는 훅입니다

 이전 계산값을 갖고 있디 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다,
 이 훅은 렌더링이 일어나는동안 실행됩니다.
 따라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안됩니다.
 예를들면 useEffect에서 실행되어애 할 사이드 이팩트 같은 것입니다.
 const memoizedValue = useMemo( =>
 {
    //연산량이 높은 작업을 수행하여 결과를 반환
    return computerExpensiveValue(의존성변수1, 의존성변수2);
 },
 [의존성변수1, 의존성변수2]
 );
 
 다음 코드와 같이 배열을 넣지 않는경우 렌더링이 일어날때마다 매번 함수가 실행됩니다.
 따라서 의존성배열을 넣지 않는 것은 의미가 없음
 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.
 const memoizedValue = useMemo(
    () => computeExpensiveValue(a,b)
 );

 # 7.5 useCallBack

useCallback은 React Hooks 중에서 함수 메모이제이션을 위해 사용되는 훅입니다. 이를 이해하기 위해 몇 가지 지침을 살펴보겠습니다:

함수 메모이제이션: useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용됩니다. 예를 들어, 리액트 컴포넌트 안에 함수가 선언되어 있을 때, 이 함수는 해당 컴포넌트가 렌더링될 때마다 새로운 함수가 생성됩니다. useCallback을 사용하면 해당 컴포넌트가 렌더링되더라도 그 함수가 의존하는 값 (deps)들이 바뀌지 않는 한 기존 함수를 재사용할 수 있습니다.
사용법: useCallback을 다음과 같이 사용합니다:
JavaScript

const memoizedCallback = useCallback(
  function,
  deps
);
AI가 생성한 코드입니다. 신중하게 검토하고 사용하세요. FAQ의 자세한 정보.
첫 번째 인자로 넘어온 함수를, 두 번째 인자로 넘어온 배열 형태의 함수 실행 조건의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해 줍니다.
예제:
JavaScript

// 예시 함수
const add = () => x + y;

// useCallback을 사용하여 함수 재사용
const add = useCallback(
  () => x + y,
  [x, y]
);
AI가 생성한 코드입니다. 신중하게 검토하고 사용하세요. FAQ의 자세한 정보.
위와 같이 deps 배열에 의존하는 값들을 지정하면 해당 함수를 재사용할 수 있습니다.
성능 최적화: useCallback은 React.memo와 함께 자식 컴포넌트의 불필요한 렌더링을 최적화할 수 있습니다. 이를 활용하여 조명을 켜고 끄는 예제를 살펴보겠습니다:
JavaScript

// Light 컴포넌트
function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <div>
      <button onClick={toggle}>
        {room} {on ? "💡" : "⬛"}
      </button>
    </div>
  );
}

// SmartHome 컴포넌트
function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = useCallback(() => {
    setMasterOn(!masterOn);
  }, [masterOn]);

  // ... (toggleKitchen, toggleBath도 동일하게 적용)

  return (
    <div>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      {/* ... */}
    </div>
  );
}
AI가 생성한 코드입니다. 신중하게 검토하고 사용하세요. FAQ의 자세한 정보.
Light 컴포넌트에 React.memo를 적용하여 불필요한 렌더링을 최적화할 수 있습니다.
toggleMaster, toggleKitchen, toggleBath 함수에 useCallback을 적용하여 함수를 재사용합니다.
useCallback은 React의 렌더링 최적화를 위해 함께 사용되는 다른 훅들과 함께 사용할 때 더욱 효과를 발휘합니다

# 7.1 훅이란 무엇인가?

클래스형 컴포넌트에서는 생성자에서 state를 정의하고 setState()함수를 통해 state를 업데이트합니다 
예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나 컴포넌트의 생명주기에 맞춰서 어떤코드가 실행되도록 할수 없었습니다
함수형 컴포넌트에서도 state나 생명주기함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅입니다
함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을모두 동일하게 구햔할수 있게 되었음

훅이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수를 의미합니다

훅의 이름은 모두'use'로 시작합니다
사용자 정의 훅을 만들수 있으며 이경우에 이름은 자유롭게 할수있으나'use'로 시작할것을 권장합니다.

# 7.2 useState
useState는 함수형 컴포넌트에서 state를 사용하기 위한 훅입니다
useStae()함수의 사용봅은 const ['변수명', set함수명] = useState(초기값);

# 7.3 useEffect
useState와 함께 가장 많이 사용되는 훅입니다
이함수는 사이드 이팩트를 수행하기 위한 것입니다
영어로 sideEffect는 부작용을 의미합니다 일반적으로 프로그래밍에서 사이드이펙트는 '개발자'가 의도하지 않은 코드가 실행되면서 버그가 발생하는것 입니다.

하지만 리액트에서는 효과 또는 영향을 뜻하는 effect를 의미하는것에 가깝습니다

예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다

이작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠수 있으며 렌더링중에는 작업이 완료될 수 없기 때문입니다 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.
클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.

결국 sideEffect는 렌더링외에 실행되어야 하는 부수적인 코드를 의미합니다

예를 들면 네트워크 리퀘스트 DOM수동조작 로깅 등은 정리가 필요없는 경우들입니다

useEffect()함수는 다음과 같이 사용합니다

첫번째 파라미터느 이펙트 함수가 들어가고 두번쨰 파라미터로는 의존성 배열이 들어갑니다
useEffect(이펙트 함수, 의존성배열);
의존성 배열은 이펙트가 의존하고 있는 배열로 배열 안에 있는 변수 중에 하나라도 값이 변경되었을때 이펙트 함수가 실행됩니다
이펙트 함수는 처음 컴포넌트가 렌더링 된 이후 그리고 재 렌더링 이후에 실행됩니다
만약 이펙트 함수가 마운트와 언마운트 될때만 한번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다
 이경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러번 실행되지 않습니다.
{
 useEffect(() => {
    //컴포넌트가  마운트 된 이후,
    의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 시에  실행됨 의존성 배열에 빈 배열을 넣으면 마운트아 언마운트시에 단 한번씩만 실행됨 
    의존성 배열 생략시 컴포넌트 업데이트 시마다 실행됨
    })
 return () => {
    //컴포넌트가 마운트 해제되기 전에 실행됨
 }
 },[의존성 변수1,의존성 변수2]
# 6.2 생명주기에 대해 알아보기
생명주기는 컴포넌트의 생성 시점, 사용시점 종료시점을 나타내는 말입니다
constructor이 실행되면서 컴포넌트가 생성됩니다.
생성직후 componentDidMount()함수가 호출됩니다.
컴포넌트가 소멸하기 전까지 여러번 랜더링합니다.
렌더링은 props, setState() , forceUpdate()에 의해 상태가 변경되면 이루어 집니다.
그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출됩니다.
마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount()함수가 호출됩니다.
 # 0501강의
 훅은 함수형 컴포넌트 혹은 직접만든 커스텀 훅에서만 호출가능
 
### Arguments 전달하기
* 함수를 정의할 때는 파라미터 혹은 매개변수, 함수를 사용할 때는 아규먼트 혹은 인수라고 부릅니다.
* 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.
<button onClick={(event) => this.deleteItem(id,event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>

* 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했습니다.
* event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.
* 두 방법 모두 첫번쨰 매개변수는 id이고 두 번째 매개변수로 event가 전달 됩니다.
* 첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고 두 번쨰 코드는 id 이후 두 번째 매개변수로 event가 자동 전달 됩니다.(이 방법은 클래스형에서 사용됨)

### 인라인 조건
* 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.
1. 인라인 if
* if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다.
* && 는 and 연자로 모든 조건이 참일때만 참이 됩니다.
* 첫 번쨰 조건이 거짓이면 두번쨰 조건은 판단할 필요가 없습니다. 단축평가
* 판단만 하지 않는 것이고 결과 값은 그대로 리턴됩니다.

2. 인라인 if-else
* 상항 연산자를 사용합니다.
* 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.

* 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다.


### 훅의 규칙
* 첫 번쨰 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것입니다.
* 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됩니다
* 이 규칙에 따라 혹은 컴포넌트가 렌더링 될 떄마다 같은 순서로 호출되어야 합니다
* 두 번째 규칙은 함수형 컴포넌트에서만 훅을 호출해야 한다는 것 입니다.
+ 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됩니다.
* 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

### 나만의 훅 만들기
* 필요하다면 직업 훅을 만들어 쓸 수도 있습니다. 이것을 커스텀 훅 이라고 합니다.

### 커스텀 훅 추출하기
* use로 시작하는 훅을 만들고
* 한가지 주의할 점은 일반 컴포넌트와 마찬가지로 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만 해야 합니다.
* 이름은 use로 시작해야 합니다. 그렇지 않으면 다른 훅을 불러올 수 없습니다.
* useUserStatus() 훅의 목적은 사용자의 온라인/오프라인 상태를 구독하는 것입니다.
* 파라메터로 userID를 받아 사용자의 온라인 상태를 반환하고 있습니다.

## 4월 17일 강의

### 훅이란 무엇인가?

* 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState()함수를 통해 state를 업데이트합니다.
* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook)입니다.
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.
* Hook이란 'State와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수' 를 의미합니다.
* 훅의 이름은 모두 'use'로 시작합니다.
* 사용자 정의 훅 (custom hook) 을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작할 것을 권장합니다.

### use state

* useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook 입니다.
* 첫번째 항목은 state의 이름(변수명)이고,
* 두번쨰 항목은 state의 set함수입니다. 즉 state를 업데이트 하는 함수입니다.

### useEffect
 
* useState와 함꼐 가장 많이 사용하는 Hook입니다.
* 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
* 영어로 side effect는 부작용을 의미합니다. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되며 버그가 발생하는 것' 을 말합니다.
* 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가깝습니다.
* 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.
* 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 떄문입니다. 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.
* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
* 저자는 useEffect가 side Effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작요으이 의미를 잘못 해석해서 생긴 오해이다. 부작용의 부를 不로 생각했기 떄문입니다.
* side effect는 副作用으로 '원래의 용도 혹은 목적의 효과 외에 부수적으로 다른 효과가 있는 것' 을 뜻하는 것입니다.
* 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말합니다.
* 예를들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들입니다.
* useEffect()는 다음과 같이 사용합니다.
* 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
useEffect(이펙트 함수, 의존성 배열);
* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 떄 이펙트 함수가 실행됩니다.
* 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됩니다.
* 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 떄문에 여러 번 실행되지 않습니다.
* 의존성 배열을 생략하는 경우는 업데이트 될 떄마다 호출됩니다.

### useMemo
* useMemo() 혹은 Memoized value를 리턴하는 훅입니다.
* 이전 계산값을 갖고 있기 떄문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
* 이 훅은 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
* 예를 들면 useEffect에서 실행되어야 할 사이드 이펙트 같은 것 입니다.

* 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 떄마다 매번 함수가 실행됩니다.
* 따라서 의존성 배열을 넣지 않는 것은 의미가 없습니다.
* 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.
const memoizedValue = useMemo(
   () => computeExpensiveValue(a, b)
);

### useCallback
* useCallback() 혹은 useMemo() 와 유사한 역할을 합니다.
* 차이점은 값이 아닌 함수를 반환한다는 점입니다.
* 의존성 배열을 파라미터로 받는 것은 useMemo와 동일하빈다.
* 파라미터로 받은 함수를 콜백이라고 부릅니다
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 

### useRef
* useRef() 혹은 레퍼런스를 사용하기 위한 훅입니다.
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
* useRef() 혹은 바로 이 레퍼런스 객체를 반환합니다.
* 레퍼런스 객체에는 .current라는 속성이 있는데 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
const refContainer = useRef(초깃값);
* 이렇게 반환된 레퍼런스 객체는 컴포넌트 라이프타임 전체에 걸쳐서 유지
* 즉 , 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미


## 4월 3일 강의

3. Props 사용법
* JSX에서는 key-value쌍으로 props를 구성합니다.
1. Profile컴포넌트로 name, introduction, viewCount Props를 전달한다.
2. 이때 전달되는 props는 다음과 같은 자바스크립트 객체입니다.
* JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다고 배웠습니다.
* JSX를 사용하지 않는 경우 props의 전달 방법은 createELement()함수를 사용하는 것입니다.
* createElement()함수의 두번쨰 매개변수가 바로 props입니다.

### 컴포넌트 만들기
1. 컴포넌트의 종류 
* 리액트 초기 버전을 사용할 떄는 클래스형 컴포넌트를 주로 사용했습니다.
* 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
* 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.

2. 함수형 컴포넌트
* Welcome컴포넌트는 props를 받아 받은 props중 name키의 값을 "안녕" 뒤에 넣어 반환합니다.

3. 클래스형 컴포넌트
* Welcome컴포넌트는 React

4. 컴포넌트 이름 짓기
* 이름은 항상 대문자로 시작합니다.
* 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다. html tag.
* 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

5. 컴포넌트의 렌더링
* 렌더링의 과정은 다음 코드와 같습니다.

<!-- function Welcome(props) {
   return <h1> 안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(
   element,
   document.getElementById('root')
) -->

### 컴포넌트의 합성
* 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
* 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다.

### 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.
* comment는 댓글 표시 컴포넌트입니다.
* 내부에는 이미지, 이름, 댓글, 작성일 포함되어 있습니다


## 2024 04 03 강의
3. Props 사용법
* JSX 에서는 key-value쌍으로 props를 구성합니다.
1. Profile컴포넌트로 name, introduction, viewCount Props를 전달한다.
2. 이때 전달되는 props는 다음과 같은 자바스크립트 객체입니다.
* JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다고 배웠습니다.
* JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용하는 것입니다
create Element()함수의 두번쨰 매개변수가 바로 props입니다
# 5.3 컴포넌트 만들기
1. 컴포넌트의 종류 
* 리액트 초기버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다
* 이 후 HOOK이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다
* 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에
* 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.
2. 함수형 컴포넌트
* Welcome컴포넌트는 props를 받아 , 받은 props중 name의 키 값을 "안녕, 뒤에 넣어 반환합니다.
3.

4. 컴포넌트 이름 짓기 
이름은 항상 대문자로 시작합니다
왜냐하면 리액트는 소문자로 시작하는 컴포넌트를DOM 태그로 인식하기 때문입니다.
Html tag 
컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다

5. 컴포넌트 렌더링
렌더링의 과정은 다음 코드와 같습니다.
```js
function Welcome(props) {
    return <h1> 안녕, {props.name}</h1>

}
const element = <Welcome name="인제"/>;
ReactDOM.render(
    element, 
    document.getElementById('root')
);
```
# 5.5 컴포넌트 추출
복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 나눌수도 있습니다.
큰 컴포넌트애서 일부를 추출해서 새로운 컴포넌트를 만드는것입니다,
실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는것이 좋습니다.
Comment는 댓글표시 컴포넌트입니다.
내부에는 이미지, 이름 댓글과 작성일이 포함되어 있습니다
첫번쨰로 이미지 부분을 AVATAR컴포넌트로 출력 해보겠습니다.

두번째로 사용자 정보 부분을 추출합니다.
컴포넌트 이름은 UserInfo로 합니다. React컴포넌트 이름은 Camel notation을 사용합니다
UserInfo안에 Avatar컴포넌트를 넣어서 완성시킵니다.
# 6.1 state
1. state란 
state는 리액트 컴포넌트의 상태를 의미합니다
상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트 데이터를 의밀합니다
정확히는 컴포넌트의 변경가능한 데이터를 의미합니다
state가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함 시켜야 됩니다.
2. state의 특징
리액트만의 특별한 형태가 아닌 단지 자바스크립트 객체일뿐입니다
예의 LikeButton은 class컴포넌트입니다
constructor은 생성자이이고 그안에있는 this.state가 현 컴포넌트의 state입니다
함수형에서는 useState()라는 함수 사용합니다.
state는 변경이 불가능합니다.
불가능 하다고 생각하는것이 좋습니다
state를 변경하고자 할때는 setstate()함수를 사용합니다.
```js
//state를 직접 수정(잘못된 사용법)
this.state = {
    name: 'Inje'
}

//setstate 사용 수정
this.setstate = {
    name: 'Inja'
}
```
## 20240327 강의내용  
## JSX의 역할
1. JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
2. React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
3. JS로 작업할 경우 직접 createElement 함수를 사용해야 합니다.

## JSX의 장점
* 코드가 간결해진다
* 가독성이 향상된다
* Injection Attack이라 불리는 해킹 방법을 방어함으로서 보안에 강하다

## JSX 사용법
* 모든 자바스크립트 문법을 지원함
* 자바스크립트 문법에 XML과 HTml을 섞어서 사용한다
* 만약 HTML이나 XML에 자바스크립트 코드를 사용하고 싶다면 {} 괄호를 사용한다

## 엘리먼트 알아보기
1. 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미
* 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명하고 이씅ㅁ
* 웹사이트의 경우는 DOM 엘리먼트이며 HTMl 요소를 의미
2. 리액트 엘리먼트와 DOM 엘리먼트의 차이점
* 리액트 엘리먼트는 virtual Dom의 속성을 가지고 있음
* Dom 엘리먼트는 페이지의 모든 정보를 가지고 있어 무겁다.
* 반면 리액트 엘리먼트는 변화한 부분만 가지고 있어 가볍다.
3. 엘리먼트의 생김새 
* 리액트 엘리먼트는 자바스크릡트 객체의 형태로 존재함
* 컴포넌트(Button 등), 속성(color 등)및 내부의 모든 children을 포함하는   
일반 JS 객체이다.
* 이 객체는 마음대로 변경할수 없는 불변성을 가지고 있음.
4. 엘리먼트의 특징
* 리액트 엘리먼트의 가장 큰 특징은 불변성, 즉 한번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없습니다.

## 컴포넌트에 대해 알아보기
* 리액트는 컴포넌트 기반의 구조
* 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미
* 컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용을 줄일 수 있음
* 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서는 유사함
* 다만 입력은 Props가 담당하고 출력은 리액트 엘리먼트의 형태로 출력됨
* 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷
## Props 알아보기
1. Props의 개념
* Props는 property의 줄임말
* Props가 컴포넌트의 속성
* 컴포넌트에 어떤 속성, Props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됨
* Props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체
2. Props의  특징
* 읽기 전용임, 변경 할 수 없음
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달해야함

### react란 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
웹 및 앱 유저 인터페이스를 위한 라이브러리
https://www.react.dev

### 다양한 자바스크립트 UI프레임워크 :
Stack Overflow trends
https://insights.stackoverflow.com/trends/

### 리액트 개념 정리 
    -복잡한 사이트를 쉽고 빠르게 만들고 관리하기위해 만들어진 것이 바로 리액트
    -다른표현으로는SPA를 쉽고 빠르게 만들수 있도록 해주는 도구

### 리액트의 장점
1. 빠른 업데이트와 렌더링 속도 
    - 이것을 가능하게 하는것이 바로 Virtual DOM
    -DOM(document Object Model) 이란 XML ,HTML문서의 각 항목을계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스 입니다. W3C의 표준
    -Virtual DOM은 DOM조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법입니다.
    -DOM은 동기식 Virtual DOM은 비동기식 방법으로 렌더링을 합니다.
https://codingmedic.wordpress.com/2020/11/10/the-virtual-dom/

브라우저의 동작 원리 ,Gecko와는 조금 차이가 있지만 개념은 동일
https://web.dev/howbrowserswork

2. 컴포넌트 기반 구조
    -리액트의 모든 페이지는 컴포넌트로 구성된다.
    -하나의 컴포넌트는 다른여러개의 컴포넌트의 조합으로 구성할 수 있습니다
    -그래서 리액트로 개발을 하다보면 레고블록을 조립하는것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다
    -아래그림은 에어비앤비 사이트 화면의 컴포넌트 구조입니다. 재사용성이 뛰어납니다.
https://www.airbnb.co.kr/

3. 재사용성
    -반복적인 작업을 줄여주기 때문에 생산성을 높여줍니다.
    -또한 유지보수가 용이합니다.
    -재사용이 가능하려면 해당 모듈의 의존성이 없어야 합니다.

4. 든든한 지원군
    -메타(구 페이스북)에서 오픈소스로 관리하고 있음

5. 활발한 지식 공유 & 커뮤니티

6. 모바일 앱 개발가능
    -리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발할수 있습니다.

### 리액트의 단점

1. 방대한 학습량 
    -자바스크리브를 공부한 경우 빠르게 학습할 수 있습니다.

2. 높은 상태 관리 복잡도
    -state, component life cycle 등의 개념이 있지만 그리 어렵지 않음

### JSX란?
* JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
* React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
* 만일 JS로 작업할 경우 직접 createElement함수를 사용해야 합니다.
* 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여 주는 역할을 합니다.

### JSX의 장점
* 코드가 간결해 집니다.
* 가독성이 향상 됩니다.
* Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.

### JSX 사용법
* 모든 자바스크립트 문법을 지원합니다.
* 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
* 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.


### 엘리먼트
1. 엘리먼트의 정의
* 엘리먼트는 이랙트 앱을 구성하는 요소를 의미합니다.
* 공식페이지에는 "엘리먼트는 이랙트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있습니다.
* 웹사이트의 경우는 DOM 엘리먼트이며, HTML요소를 의미합니다

그렇다면 리액트 엘림너트와 DOM 엘리먼트는 어떤 차이가 있을까요?
* 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.
* DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
* 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

2. 엘리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
* 컴포넌트(Button등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS 객체입니다.
* 이 객체는 마음대로 변경할 수 없는 불변성을 가지고 있습니다.

3. 엘리먼트의 특징
* 리액트 엘리먼트의 가장 큰 특징은 불변성입니다. 즉, 한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없습니다.
* 만약 내용이 바뀐다면?
* 컴포넌트를 사용해 

4. 엘리먼트 렌더링하기
* 엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요.
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root'))
* 이 떄 render함수를 사용하게 되며 이 함수의 첫 번쨰 파라메터는 출력할 엘리먼트, 두 번째 파라메터는 출력할 타겟을 나타냅니다.

### 컴포넌트 대해 알아보기
* 리액트는 컴포넌트 기반의 구조를 갖는다.
* 컴포넌트 구조는 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
* 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.
* 컴포넌트는 자바스크립트 함수와 임력과 출력이 있다는 면에서는 유사합니다.
* 다만 입력은 props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력된다.
* 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷하다.

### props에 대해 알아보기
1. 개념
* props는 prop(property:속성, 특성)의 준말입니다.
* props가 바로 컴포넌트의 속성이다.
* 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력된다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
* 에어비엔비의 예또 마찬가지다.

2. 특징
* 읽기 전용이다. 변경할 수 없음.
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

pure함수 vs impure함수
* pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 안흔 함수이다.
* impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수이다.

## 3월 20일 강의
### 리액트는 무엇인가?
1. 리액트의 정의
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
* 2023 - 웹 및 앱 유저 인터페이스를 위한 라이브러리

2. 다양한 자바스크립트 UI 프레임워크: [Stack OVerFlow trends](https://insights.stackoverflow.com/trends?tags=r%2Cstatistics)

3. 리액트 개념 정리
* 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트입니다.
* 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면 됩니다.

### 리액트의 장점
1. 빠른 업데이트와 렌더링 속도
* 이 것을 가능하게 하는 것이 바로 Virtual DOM입니다.
* DOM(Document Object Model)이란, XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스입니다. 이 것은 W3C의 표준입니다.
* Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 떄문에 고안된 방법입니다.
* DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 합니다.

2. 컴포넌트 기반 구조
* 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
* 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
* 그래서 리액트로 개발을 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.
* 아래 그림은 에어비앤비 사이트 화면의 컴포넌트 구조 입니다. 재사용성이 뛰어납니다.

3. 재사용성
* 반복적인 작업을 줄여주기 떄문에 생산성을 높여 줍니다.
* 또한 유지보수가 용이합니다.
* 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합ㄴ니다.

4. 든든한 지원군
* 메타(구 페이스북) 에서 오픈솟스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.

5. 활발한 지식 공유 & 커뮤니티

6. 모바일 앱 개발기능
* 리액트 네이티브라는 모바일 환경 UI 프레임워크를 사용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발할 수 있습니다.

### 리액트의 단점
1. 방대한 학습량
* 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

2. 높은 상태 관리 복잡도
* state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.


## 3월 13일 강의

# HTML 살펴보기
1. HTML이란 무엇인가?  
[HTML](https://namu.wiki/w/HTML)

2. 웹사이트의 뼈대를 구성하는 태그들

3. SPA(Single Page Application)  
[SPA](https://www.startupcode.kr/company/blog/archives/11)

# CSS란 무엇인가?
[CSS](https://namu.wiki/w/CSS)

# 자바스크립트
1. 자바스크립트란 무엇인가?
* var - 중복 선언 가능, 재할당 가능
* let - 중복 선언 불가능, 재할당 가능
* const - 중복 선언 불가능, 재할당 불가능
* Array type - 배열
* Object type
2. ES6 (ECMAScript6)  
   [표준 ECMA-262]() (ECMA스크립트는 ECMA-262에 의해 표준화된 언어의 이름)
3. 자바스크립트의 자료형
4. 자바스크립트의 연산자
5. 자바스크립트 함수
* function statement 형: 일반적 함수의 형태
* Arrow function expression 형: 화살표 함수

