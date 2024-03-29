import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import PresentationLayout from '~/components/layout/Presentation';
import { Query } from '~/gatsby-graphql-types';

export default function reactBasic({ location: pLocation, data }: PageProps) {
  const linkedinUrl = (data as Query).site!.siteMetadata!.social!.linkedin || undefined;

  return (
    <PresentationLayout pathname={pLocation.pathname}>
      <div className="slides">
        <section>
          <h1>React.js</h1>
          <h3>Javascript View Framework</h3>
          <p>
            <small>
              Created by{' '}
              <a href={linkedinUrl} target="_blank">
                Junseok, Choi
              </a>
            </small>
          </p>
        </section>

        <section>
          <p>시작은 페이스북 &amp; 인스타그램 개발자들의 View에만 집중된 프레임워크를 블라블라....(생략)</p>
          <br />
          <h2 className="fragment">
            <a href="https://facebook.github.io/react/2013/06/05/why-react.html">
              "지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기" 용도
            </a>
          </h2>
          <aside className="notes">물론 data, routing, action에 대한 기능들 사용 가능합니다.</aside>
        </section>
        <section>
          <section>
            <h2>React의 특징</h2>
            <aside className="notes">
              맨날 사람들이 React, React하는데 왜 그런지 장점에 대해서 한번 살펴보겠습니다.
            </aside>
          </section>
          <section>
            <h2>Components</h2>
            <p style={{ width: '60%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/component.png" />
            </p>
            <small>출처 - http://www.slideshare.net/taggon/react-js-46357445</small>
            <aside className="notes">
              Component란, 재사용 가능한 UI 구성 단위입니다. React는 컴포넌트 구조로 이루어져 있으며 컴포넌트를 만들때
              JSX문법이 사용됩니다. 상위에서 하위 컴포넌트로 연결되어 서로 결합됩니다. 컴포넌트 별로 데이터가
              사용됩니다.
            </aside>
          </section>
          <section>
            <h2>Components</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/component_example.png" />
            </p>
            <aside className="notes">
              제가 예전에 공부했던 코드입니다. 데이터는 state와 prop를 이용하는데, props는 불변하는 객체, state 변하는
              객체 입니다. 뒤에서 더 자세히 설명드리겠습니다.
            </aside>
          </section>
          <section>
            <h2>Virtual DOM</h2>
            <p>
              <span>DOM?</span> No..., <span>Virtual DOM?</span> Yes!
            </p>
            <aside className="notes">
              SPA앱에서 사용자가 끊임없이 data를 가져오고, 현재 상태를 확인해서 data-binding을 해줘야 하는데 이 과정은
              프로젝트가 커질수록 복잡해집니다.
              <br />
              React에서는 가상의 DOM을 사용합니다. Virtual DOM에서는 Reactive Rendering 기법을 이용해 DOM에 변경사항이
              생기면 이를 감지하고 변경된 부분만 Re-Rendering을 합니다. 브라우저에 의존적이지 않고 / 빠르다는 장점이
              있습니다.
            </aside>
          </section>
          <section>
            <h2>단반향 데이터 흐름</h2>
            <p>상위 컴포넌트 (Parent) to 하위 컴포넌트 (Children)</p>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/tree.png" />
            </p>
            <aside className="notes">
              앞서 보여드린 코드와 같이 CardList, CardItem, CardDetail 과 같이 상위 -&gt; 하위 로 진행되는 구조를
              나타냅니다. 이러한 컴포넌트 구조를 따라가며 데이터 또한 단방향으로 진행되게 됩니다.
            </aside>
          </section>
          <section>
            <h2>JSX</h2>
            <p>Javascript + XML</p>
            <aside className="notes">
              XML의 문법을 차용하여 사용합니다. 자바스크립트 자체로도 만들 수 있고, 처음엔 불편하기도 하지만 조금만
              사용해 보면 훨씬 간단하고 쉽게 Comopnent를 만들 수 있습니다. JSX문법으로 만든 후 JSXTransformer로 JS코드
              컴파일링을 합니다.
            </aside>
          </section>
          <section>
            <h2>Flux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/mvc.png" />
            </p>
            <aside className="notes">
              flux 패턴의 사용은 필수는 아닙니다. 웹의 구조에서 양방향 데이터 바인딩 형식인 mvc 패턴의 사진입니다.
            </aside>
          </section>
          <section>
            <h2>Flux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/flux.png" />
            </p>
            <aside className="notes">
              flux 패턴은 MVC와는 다르게 단방향 데이터 통신에 맞게 나온 새로운 패턴입니다. Dispatcher, Stores, View 로
              구성되어 있는데, action을 실행하고, 저장하고, 보여줄 수 있는 구조로 구성되어 있습니다.
            </aside>
          </section>
          <section>
            <h2>Flux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/flux1.png" />
            </p>
            <aside className="notes">
              state는 액션마다 재기록 되는데, 각각의 액션 전, 후로 state를 구분해줘야 합니다.
            </aside>
          </section>
          <section>
            <h2>Flux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/flux2.png" />
            </p>
            <aside className="notes">그리고 middleware를 쉽게 붙일 수 있어야 하는데, 이 또한 쉽지 않습니다.</aside>
          </section>
          <section>
            <h2>Redux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/redux1.png" />
            </p>
            <aside className="notes">
              이를 해결하기 위해 Flux 기반의 Redux 라이브러리를 사용합니다. 액션 전, 후로 state를 구분하지 못하는 문제는
              액션 마다 상태를 수정하지 않는 대신 상태를 복사하여 각각의 복사본을 수정해주는 방식을 택했습니다.
            </aside>
          </section>
          <section>
            <h2>Redux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/redux2.png" />
            </p>
            <aside className="notes">
              그리고 연결하기 힘든 middleware는 액션에만 적용하여 데이터와는 관심사를 분리시켰습니다.
            </aside>
          </section>
        </section>
        <section>
          <h2>기타 등등...</h2>
          <p>기타 등등이라고 중요하지 않은 것은 아닙니다.</p>
          <ul>
            <li className="fragment">es6</li>
            <li className="fragment">webpack</li>
            <li className="fragment">npm</li>
            <li className="fragment">...</li>
          </ul>
          <aside className="notes">
            React로 개발을 시작하면 무조건 만날 수 밖에 없는 요소들이지만 지금 세미나에선 생략하겠습니다.
          </aside>
        </section>
        <section>
          <h2>환경 설정</h2>
          <p className="fragment fade-out" style={{ position: 'absolute' }}>
            이제 npm으로 babel와 react, 부가적인 라이브러리를 설치하고 babel로 JSX를 JS로 컴파일 하는 환경과
            webpack.config.js로 개발환경 전용 서버를 돌아가게 하는 세팅을 하고...
          </p>
          <h3 className="fragment fade-in">
            이 모든 것을 간단하게!
            <br />
            <a href="https://github.com/facebookincubator/create-react-app">create-react-app!</a>
          </h3>

          <aside className="notes">
            초반에는 설정이 꽤나 복잡했습니다. React의 컨트리뷰터인 Dan Abramov 이런 문제를 인지하고 있었는데, (제가
            듣기론 Vue.js였던 것 같습니다.) 컨퍼런스의 Framework 내장 shell 환경을 보고 자동으로 세팅을 해주는 환경을
            만들었다고 합니다. 이 환경을 install해주고, run만 해주면 바로 React 전용 서버가 켜지게 됩니다. dev환경에서
            사용하는 서버이기 때문에, 개발이 끝난 후 build를 하면 개발 시 사용되었던 라이브러리들이 한꺼번에 build되어
            나타납니다.
          </aside>
        </section>
        <section data-markdown={true}>
          <h2>환경 설정</h2>
          <p style={{ width: '80%', margin: '0 auto' }}>
            <img src="/img/presentation/react-basic/code1.png" />
          </p>
          <h4>끝</h4>
        </section>
        <section>
          <h2>개발</h2>
          <p style={{ width: '60%', margin: '0 auto' }} className="fragment">
            <img src="/img/presentation/react-basic/develop.png" />
          </p>
          <aside className="notes">이제 실제 개발에 대해 알아보겠습니다.</aside>
        </section>
        <section>
          <section data-markdown={true} style={{ fontSize: '28px' }}>
            <h2 id="data-">Data를 사용하기 위한 필요 요소</h2>
            <h3 id="2-state">1. props</h3>
            <p style={{ width: '80%', margin: '0 auto' }} className="fragment">
              <img src="/img/presentation/react-basic/code2.png" />
            </p>
            <aside className="notes">
              props는 부모 컴포넌트에서 자식 컴포넌트로 넣어준 데이터로, 상수처럼 변하지 않는 값 입니다. 위 예제처럼
              호출하면서 넣어준 데이터를 하위 컴포넌트에서 사용할 수 있습니다.
            </aside>
          </section>
          <section data-markdown={true} style={{ fontSize: '28px' }}>
            <h2 id="data-">Data를 사용하기 위한 필요 요소</h2>
            <h3 id="2-state">2. state</h3>
            <p style={{ width: '80%', margin: '0 auto' }} className="fragment">
              <img src="/img/presentation/react-basic/code3.png" />
            </p>
            <aside className="notes">
              state는 변수처럼 변할 수 있는 데이터를 들고있습니다. 여러 이벤트에 사용할 수 있습니다. 상위컴포넌트의
              state를 자식에게 준다면 어떻게 될까요? 자식에서는 props로 사용하게 됩니다. 하지만 부모 요소의
              this.state.a가 바뀐다고 하면 Re-Rendering이 되기 때문에 자식 또한 바뀌게 됩니다.
            </aside>
          </section>
          <section style={{ fontSize: '28px' }}>
            <h2>Data를 사용하기 위한 필요 요소</h2>
            <h3>3. Life Cycle</h3>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/lifecycle.png" />
            </p>
            <small>출처 - https://www.reddit.com/r/javascript/comments/45khex/reactjs_life_cycle_diagram_oc/</small>
            <aside className="notes">
              생명주기 입니다. 만들어 질 때, 업데이트 될 때, 없어질 때 3가지 케이스로 나눠져 rendering이 되는데
              rendering이 되는 과정에 거쳐가는 메서드 들입니다. 이 메서드 들을 이용해 컴포넌트가 생성이나 업데이트 전에
              데이터를 가져오거나 초기화 하는 기능, 지워지기 직전에 어떠한 행동 등을 할 수 있습니다.
            </aside>
          </section>
        </section>
        <section>
          <h2>Think about it</h2>
          <h3 className="fragment">어라?</h3>
          <p className="fragment">
            그렇다면 state와 props는
            <br />
            각각의 컴포넌트가 모두 들고있는 건가?
          </p>
          <h2 className="fragment">ㅇㅇ</h2>
          <aside className="notes">
            네. 모든 컴포넌트는 각각의 state와 props를 가지고 있습니다. 그렇기에 data가 어디에서 어떻게 사용되는지
            주의깊게 살피고 사용해야 합니다.
          </aside>
        </section>
        <section>
          <section>
            <h2>이쯤에서 다시보는 Redux</h2>
            <p style={{ width: '80%', margin: '0 auto' }} className="fragment">
              <img src="/img/presentation/react-basic/withRedux.png" />
              <small>출처 - https://css-tricks.com/learning-react-redux/</small>
            </p>
            <aside className="notes">
              Flux 패턴은 꼭 있어야 하는 것은 아니지만 거의 필수처럼 자리잡고 있습니다. Redux가 없는 Flux에서는 왼쪽과
              같이 각각의 데이터가 어지럽게 사용됩니다. 그러나 Redux는 Store를 공유하기때문에 어디서든 자유롭게 사용할
              수 있습니다.
            </aside>
          </section>
          <section data-markdown={true} style={{ fontSize: '28px' }}>
            <h2>이쯤에서 다시보는 Redux</h2>
            <p style={{ width: '80%', margin: '0 auto' }}>
              <img src="/img/presentation/react-basic/code4.png" />
            </p>
            <aside className="notes">이런식으로 코드가 나오는데 자세한 것은 코드를 보면서 진행하겠습니다.</aside>
          </section>
        </section>
        <section>
          <h2>이제 코드를 보며 이해해 보겠습니다.</h2>
          <a href="localhost:3000">localhost:3000</a>
        </section>
      </div>
    </PresentationLayout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          linkedin
        }
      }
    }
  }
`;
