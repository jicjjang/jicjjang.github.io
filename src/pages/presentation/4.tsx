import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import PresentationLayout from '~/components/layout/Presentation';
import { Query } from '~/gatsby-graphql-types';

export default function howToUseRxjs({ location: pLocation, data }: PageProps) {
  const linkedinUrl = (data as Query).site!.siteMetadata!.social!.linkedin || undefined;

  return (
    <PresentationLayout pathname={pLocation.pathname}>
      <div className="slides">
        <section>
          <h2>How to use RxJs</h2>
          <h3>NHN Bugs</h3>
          <p>
            <small>
              Created by{' '}
              <a href={linkedinUrl} target="_blank">
                Junseok, Choi
              </a>
            </small>
          </p>
          <aside className="notes">
            안녕하세요. 최준석입니다.
            <br />
            RxJs에 대한 정의와 원리, 사용법 등에 대해 간단히 조사한 내용으로 발표를 진행해보겠습니다.
          </aside>
        </section>

        <section>
          <div>
            <h2>순서</h2>
            <ul style={{ listStyle: 'none', margin: '0' }}>
              <li className="fragment">1. Rx란 뭔가요?</li>
              <li className="fragment">2. 간단한 예제</li>
              <li className="fragment">3. 우리의 현재와 미래</li>
              <li className="fragment">Q &amp; A</li>
            </ul>
          </div>
        </section>

        <section>
          <section>
            <h2>1. Rx란 뭔가요?</h2>
            <h3 className="fragment">Rx에 대한 정의</h3>
            <div className="fragment" style={{ width: '70%', margin: '0 auto' }}>
              <img style={{ display: 'block', margin: '5px auto' }} src="/img/presentation/rxjs/intro1.jpg" />
              <img style={{ display: 'block', margin: '5px auto' }} src="/img/presentation/rxjs/intro1_trans.jpg" />
            </div>
            <aside className="notes">
              Rx라는건 ReactiveX의 약자입니다. 요즘 많이들 사용한다는 반응형 프로그래밍, 함수형 프로그래밍을 일컫는
              말인데요. 자바스크립트에만 있는게 아니고 대부분의 언어가 있다고 보시면 됩니다.
            </aside>
          </section>
          <section>
            <h3>반응형이란건</h3>
            <div className="fragment" style={{ width: '100%', margin: '0 auto' }}>
              <img
                style={{ display: 'block', width: '60%', margin: '0 auto' }}
                src="/img/presentation/rxjs/example.jpg"
              />
            </div>
            <aside className="notes">
              반응형이란건 이 코드와 같습니다. 뒤에 수정된 결과 값에 앞에서 정의되었던 수식이 수정되기도 하죠.
            </aside>
          </section>
          <section>
            <h3>가장 대표적인 예제</h3>
            <div className="fragment" style={{ maxWidth: '100%', margin: '0 auto' }}>
              <img
                style={{ display: 'block', width: '60%', margin: '0 auto' }}
                src="/img/presentation/rxjs/excel.jpg"
              />
            </div>
            <aside className="notes">
              가장 대표적인 예제는 엑셀입니다. 앞에서 정의된 수식도 뒤에 수정된 엑셀 한 칸의 값에 결과들이 바뀌기도
              하니까요.
            </aside>
          </section>
          <section>
            <h3>자세하게 알아보겠습니다</h3>
          </section>
          <section>
            <h3>Reactive Programming</h3>
            <div style={{ display: 'inline-block', margin: '0 20px' }} className="fragment">
              <img
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                src="/img/presentation/rxjs/arrow_left_down.png"
              />
              <div style={{ textAlign: 'left' }}>Observable</div>
            </div>
            <div style={{ display: 'inline-block', margin: '0 20px' }} className="fragment">
              <img
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                src="/img/presentation/rxjs/arrow_right_down.png"
              />
              <div style={{ textAlign: 'right' }}>Data Flow</div>
            </div>
            <aside className="notes">
              reactive programming은 기본적으로 Observable과 Data Flow로 나뉩니다. 이 둘을 하나씩 살펴보겠습니다.
            </aside>
          </section>
          <section>
            <h3>Observer Pattern</h3>
            <div className="fragment">
              <div className="fragment fade-out" style={{ position: 'absolute' }}>
                <div style={{ display: 'inline-block', width: '40%', margin: '0 1%' }}>
                  <img
                    style={{ display: 'block', width: '100%', margin: '0 auto' }}
                    src="/img/presentation/rxjs/observer.jpg"
                  />
                  <div style={{ fontSize: '15px' }}>
                    <a
                      href="https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4"
                      target="_blank"
                      style={{ wordBreak: 'break-all' }}>
                      출처 - https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4
                    </a>
                  </div>
                </div>
                <div style={{ display: 'inline-block', width: '40%', margin: '0 1%', verticalAlign: 'top' }}>
                  <img
                    style={{ display: 'block', width: '100%', margin: '0 auto' }}
                    src="/img/presentation/rxjs/rx_observer.jpg"
                  />
                </div>
              </div>
              <div className="fragment fade-in">
                <div style={{ display: 'inline-block', margin: '0 20px' }}>
                  <img
                    style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                    src="/img/presentation/rxjs/arrow_left_down.png"
                  />
                  <div style={{ textAlign: 'left' }}>Observable</div>
                </div>
                <div style={{ display: 'inline-block', margin: '0 20px' }} className="fragment">
                  <img
                    style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                    src="/img/presentation/rxjs/arrow_down.png"
                  />
                  <div style={{ textAlign: 'center' }}>Observer</div>
                </div>
                <div style={{ display: 'inline-block', margin: '0 20px' }} className="fragment">
                  <img
                    style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                    src="/img/presentation/rxjs/arrow_right_down.png"
                  />
                  <div style={{ textAlign: 'right' }}>Subscribe</div>
                </div>
              </div>
            </div>
            <aside className="notes">
              옵저버 패턴은 위키피디아에도 정의가 되어있지만, 이벤트 기반 프로그래밍에서 대표적으로 쓰이느 패턴입니다.
              Observer가 Rx에서 말하는 Observable을 바라보는데, 구독(Subscribe)을 하면 등록되어있는 해당 Observable을
              받아 볼 수 있는 구조입니다. Rx에서는 Observable에 등록한 이벤트들에 대해 구독과 구독 취소들로 이루어졌다고
              할 수 있습니다.
            </aside>
          </section>
          <section>
            <h3>Observable</h3>
            <div style={{ display: 'inline-block', maxWidth: '400px', verticalAlign: 'top', margin: '0 20px' }}>
              <div className="fragment" data-fragment-index="0" style={{ textAlign: 'center' }}>
                Hot Observable
              </div>
              <img
                className="fragment"
                data-fragment-index="3"
                style={{ display: 'block', margin: '0 auto' }}
                src="/img/presentation/rxjs/youtube_live.jpg"
              />
            </div>
            <span className="fragment" data-fragment-index="1" style={{ color: 'red', verticalAlign: 'top' }}>
              vs
            </span>
            <div style={{ display: 'inline-block', maxWidth: '400px', verticalAlign: 'top', margin: '0 20px' }}>
              <div className="fragment" data-fragment-index="2" style={{ textAlign: 'center' }}>
                Cold Observable
              </div>
              <img
                className="fragment"
                data-fragment-index="4"
                style={{ display: 'block', margin: '0 auto' }}
                src="/img/presentation/rxjs/youtube.jpg"
              />
            </div>
            <aside className="notes">
              Observable은 Hot과 Cold로 나뉩니다. Observable은 기본적으로 구독자, 즉 Subscriber가 있을 경우에는
              Observable의 이벤트가 발생할 경우 구독자들에게 이벤트를 전달합니다. 그런데 구독자가 없는경우, Hot
              Observable은 구독자 여부와 상관없이 이벤트를 구독자들에게 전달하고, Cold Observable은 구독자들에게
              이벤트를 전달하지 않습니다. Hot Observable은 Youtube Live, Cold Observablesms Youtube VOD 서비스를 예로 들
              수 있습니다.
            </aside>
          </section>
          <section>
            <h3>Data Flow</h3>
            <div style={{ display: 'inline-block', verticalAlign: 'top', width: '30%', margin: '0 20px' }}>
              <img
                className="fragment"
                data-fragment-index="0"
                style={{
                  display: 'block',
                  width: '30%',
                  margin: '0 auto',
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }}
                src="/img/presentation/rxjs/arrow_left_down.png"
              />
              <div className="fragment" data-fragment-index="0" style={{ textAlign: 'left' }}>
                Control Flow
              </div>
              <img
                className="fragment"
                data-fragment-index="2"
                style={{
                  display: 'block',
                  width: '30%',
                  margin: '0 auto',
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }}
                src="/img/presentation/rxjs/arrow_down.png"
              />
              <ul className="fragment" data-fragment-index="2" style={{ display: 'block' }}>
                <li>if / else if / else</li>
                <li>for / for-each / for-in</li>
                <li>while / switch</li>
                <li>...</li>
              </ul>
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'top', width: '30%', margin: '0 20px' }}>
              <img
                className="fragment"
                data-fragment-index="1"
                style={{
                  display: 'block',
                  width: '30%',
                  margin: '0 auto',
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }}
                src="/img/presentation/rxjs/arrow_right_down.png"
              />
              <div className="fragment" data-fragment-index="1" style={{ textAlign: 'right' }}>
                Data Flow
              </div>
              <img
                className="fragment"
                data-fragment-index="3"
                style={{
                  display: 'block',
                  width: '30%',
                  margin: '0 auto',
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }}
                src="/img/presentation/rxjs/arrow_down.png"
              />
              <ul className="fragment" data-fragment-index="3" style={{ display: 'block' }}>
                <li>recursion</li>
                <li>pipe(. 연산자)</li>
                <li>...</li>
              </ul>
            </div>
            <aside className="notes">
              이제 앞으로 돌아가서 Data Flow에 대해 알아보겠습니다. 프로그래밍에서의 로직은 Control Flow와 Data Flow로
              나뉩니다. 기존에 주로 사용하는 연산자들이 Control Flow에 속하고, 물론 많이 사용하지만, Control Flow 보다는
              적게 사용하는 Data Flow는 보통 리턴 값들의 체이닝에 의해 진행됩니다.
              <br />
              <br />
              Iterable 에서 Observable로 변하게 된 것입니다.
            </aside>
          </section>
          <section>
            <h3>요약하자면</h3>
            <ul>
              <li className="fragment">Rx는 Event stream과 Data를 쉽게 컨트롤하도록 도와줌</li>
              <li className="fragment">가독성 좋은 비동기 코드를 체이닝으로 쉽게 작성 가능</li>
              <li className="fragment">초기 진입장벽이 어느 정도 존재한다는 단점이 있음</li>
            </ul>
            <aside className="notes">
              기존에 사용하던 명령형 구조에서 데이터의 흐름을 이해해야하는 반응형 프로그래밍으로의 개념 전환이 초기의
              진입 장벽이 될 수 있습니다. 실시간은 아니지만, IE같은 장벽을 차치하고 벅스같은 스트리밍 서비스에 충분히
              도움이 될거라 생각합니다.
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h2>2. 간단한 예제</h2>
            <h3 className="fragment">Rx의 종류</h3>
            <div>
              <span className="fragment">RxJava, </span>
              <span className="fragment">RxJs, </span>
              <span className="fragment">Rx.Net, </span>
              <span className="fragment">RxScala, </span>
              <span className="fragment">Etc...</span>
            </div>
            <aside className="notes">
              처음 자료를 찾아보게 된 것도 안드로이드팀에선 RxJava 스터디를 하고있더라고요. 기존에도 RxJs라는걸 알고는
              있었지만 한번 더 찾아보게 된 계기가 되었습니다.
            </aside>
          </section>
          <section>
            <h2>RxJs 예제</h2>
            <div>
              <a href="https://jsfiddle.net/junseokchoi/Lsm48mpd/10/" target="_blank">
                https://jsfiddle.net/junseokchoi/Lsm48mpd/
              </a>
            </div>
          </section>
        </section>

        <section>
          <section>
            <h2>3. 우리의 현재와 미래</h2>
            <h3 className="fragment">왜 RxJs로 눈을 돌리게 되었나?</h3>
            <ul>
              <li className="fragment">Callback hell이 일어나는 부분이 많음</li>
              <li className="fragment">Promise와 Async/Await에 대한 부재 (ECMA 버전 이슈)</li>
              <li className="fragment">
                jQuery에 있는 Deffered라도... <br />
                (보안상 이슈가 생길 수 있어서 X)
              </li>
            </ul>
            <aside className="notes">
              RxJs를 찾아보게 된건 CallBack Hell에 대한 이슈가 가장 컸습니다. setTimeout으로 처리하는 부분이 많은데, 이
              부분들에 대해 해결해야 하나 생각해봤습니다. 그러던 찰나에 RxJs를 찾게 되었고, Promise나 Async/Await가 아닌
              새로운 해결책이었습니다.
            </aside>
          </section>
          <section>
            <h3>그럼 이제 우리도 RxJs를 쓰자!!!</h3>
            <div className="fragment" style={{ width: '100%', margin: '0 auto' }}>
              <img
                style={{
                  display: 'block',
                  width: '50%',
                  margin: '0 auto',
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }}
                src="/img/presentation/rxjs/support.jpg"
              />
            </div>
            <aside className="notes">
              하지만 쉬울리 없죠 ㅠㅠ... 지원하는 버전이 Promise나 Async/Await를 사용할 수 있는 환경과 거의 유사하기
              때문에 지금 당장 벅스 서비스에 도입할 순 없을 것 같습니다.
              <br />
              <br />
              저의 발표는 여기까지고요. 간단한 rxjs에 대한 소개 마치겠습니다.
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h2>Q&amp;A</h2>
          </section>
          <section>
            <h3>참고하면 좋은 사이트 모음</h3>
            <div>
              <div>
                <a
                  style={{ fontSize: '30px' }}
                  href="https://www.slideshare.net/sunhyouplee/vuejs-reactive-programming-vuetiful-korea-2nd"
                  target="_blank">
                  https://www.slideshare.net/sunhyouplee/vuejs-reactive-programming-vuetiful-korea-2nd
                </a>
              </div>
              <div>
                <a
                  style={{ fontSize: '30px' }}
                  href="http://sculove.github.io/blog/2016/06/22/Reactive-Programming/"
                  target="_blank">
                  http://sculove.github.io/blog/2016/06/22/Reactive-Programming/
                </a>
              </div>
              <div>
                <a
                  style={{ fontSize: '30px' }}
                  href="https://github.com/CoderK/What-I-Learned-About-RP/blob/master/README.md#rx와-리액티브-프로그래밍2016"
                  target="_blank">
                  https://github.com/CoderK/What-I-Learned-About-RP/blob/master/README.md#rx와-리액티브-프로그래밍2016
                </a>
              </div>
              <div>
                <a
                  style={{ fontSize: '30px' }}
                  href="https://github.com/studye/rxjs/wiki/Chapter-1.-The-Reactive-Way"
                  target="_blank">
                  https://github.com/studye/rxjs/wiki/Chapter-1.-The-Reactive-Way
                </a>
              </div>
            </div>
          </section>
        </section>

        <section>
          <h1>끝</h1>
          <div>감사합니다.</div>
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
