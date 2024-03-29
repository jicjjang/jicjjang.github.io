import * as React from 'react';
import { PageProps } from 'gatsby';

import PresentationLayout from '~/components/layout/Presentation';

export default function vuePwaStart({ location: pLocation }: PageProps) {
  return (
    <PresentationLayout pathname={pLocation.pathname}>
      <div className="slides">
        <section data-background="/img/presentation/vue-pwa-start/vuetifulkorea3_background.png">
          <aside className="notes">
            안녕하세요. NHN벅스 최준석입니다. PWA에 대한 정의와 원리, 사용법 등에 대해 간단한 경험기를 발표해보려고
            합니다. 잘부탁드립니다.
          </aside>
        </section>

        <section>
          <div>
            <h2>순서</h2>
            <ul style={{ listStyle: 'none', margin: '0' }}>
              <li className="fragment">1. 지루한 pwa 설명</li>
              <li className="fragment">2. 설치 및 개발</li>
              <li className="fragment">3. 사용하면서 어려웠던 부분</li>
              <li className="fragment">4. Push Notification</li>
              <li className="fragment">Q &amp; A</li>
            </ul>
          </div>
        </section>

        <section>
          <section>
            <h2>1. 지루한 pwa 설명</h2>
            <ul className="fragment" style={{ fontSize: '32px' }}>
              <li>프로그레시브 - 모든 브라우저</li>
              <li>반응형 - 모든 디바이스</li>
              <li>연결 독립적 - Service Worker를 사용. 오프라인, 느린 네트워크에서도 작동</li>
              <li>
                앱과 유사 -{' '}
                <a
                  href="https://github.com/google/WebFundamentals/blob/master/src/content/ko/fundamentals/architecture/app-shell.md"
                  target="_blank">
                  앱 셸
                </a>
                모드에서 작성. 앱 스타일의 동작
              </li>
              <li>
                최신 상태 -{' '}
                <a href="https://b.limminho.com/archives/1384" target="_blank">
                  Service Worker
                </a>
                에 업데이트 프로세스가 있음
              </li>
              <li>안전 - HTTPS를 통해 제공. (개발시 로컬은 http로 가능)</li>
              <li>검색 가능</li>
              <li>재참여 가능 - 푸시 알림과 같은 기능</li>
              <li>설치 가능 - 앱 스토어 사용 없이 설치</li>
              <li>링크 연결 가능 - URL을 통해 손쉽게 공유 및 설치</li>
            </ul>
            <aside className="notes">
              pwa의 특징들입니다. 기본적으로 위와 같은 특징들을 가지는 것이 pwa라고 할 수 있으며 지향하진 않지만 필요에
              따라 몇몇 사항에 대한 지원이 빠질 수 있습니다.
            </aside>
          </section>
          <section>
            <h3>자세하게 알아보겠습니다</h3>
          </section>
          <section>
            <h3>앱 셸이란?</h3>
            <div className="fragment" style={{ fontSize: '32px', textAlign: 'left' }}>
              애플리케이션 셸은 사용자 인터페이스를 지원하는 최소한의 HTML, CSS, 자바스크립트입니다. 애플리케이션 셸의
              특징은 다음과 같습니다.
            </div>
            <br />
            <ul className="fragment" style={{ fontSize: '32px', width: '100%', textAlign: 'left' }}>
              <li>로드 속도가 빠릅니다.</li>
              <li>캐시됩니다.</li>
              <li>콘텐츠를 동적으로 표시합니다.</li>
            </ul>
            <br />
            <div style={{ fontSize: '20px' }} className="fragment">
              참고 - https://support.google.com/partners/answer/7336597?hl=ko
            </div>
            <aside className="notes">
              설명중에 바로 알기 힘든 용어들을 간단히 설명해보겠습니다. 앱 셸이란 것은 UI의 지원을 위한 최소한의 html,
              css, js 입니다. 조직 단위 중에 셸이란 것이 있는 것과 똑같습니다. 캐시가 되서 다른 요소들이 나오지 않을 때,
              기본적으로 나와야 하는 요소들이기 때문에 앱 셸에서의 구조를 잘 다져놓고 개발을 해야합니다.
            </aside>
          </section>
          <section>
            <h3>앱 셸 디자인 시 고려해야할 점</h3>
            <div className="fragment" style={{ fontSize: '32px', textAlign: 'left' }}>
              <ul>
                <li>화면에 나와야 할 기본적인 구성</li>
                <li>필수적으로 들어와야 할 데이터</li>
                <li>필수적으로 들어와야 할 리소스 ex) 이미지, js, css...</li>
              </ul>
            </div>
            <aside className="notes">
              기본적인 요소들을 앱 셸이라고 하기 때문에, 개발 시작 전에 어느정도의 요소까지 보여줄 지 잘 계획하고
              들어가야 합니다.
            </aside>
          </section>
          <section>
            <h3>그렇다면 Service Worker는?</h3>
            <div className="fragment" style={{ fontSize: '32px', textAlign: 'left' }}>
              Service Worker란 브라우저가 웹페이지와 별도로 백그라운드에서 실행하는 스크립트로서, 웹페이지나 사용자
              상호작용 없이도 다양한 기능을 사용할 수 있게 합니다.
            </div>
            <br />
            <div className="fragment">
              <ul style={{ fontSize: '32px', width: '40%', verticalAlign: 'top' }}>
                <li>설치</li>
                <li>푸시 알림</li>
                <li>백그라운드 동기화</li>
                <li>주기적 동기화 (업데이트)</li>
                <li>기타 등등...</li>
              </ul>
              <div style={{ display: 'inline-block', width: '50%' }}>
                <img
                  style={{ border: 'none', margin: '0 auto' }}
                  src="/img/presentation/vue-pwa-start/service-worker.gif"
                />
              </div>
            </div>
            <div style={{ fontSize: '20px' }} className="fragment">
              참고 - https://support.google.com/partners/answer/7336697?hl=ko
            </div>
            <aside className="notes">
              service worker는 설명대로 브라우저와 별도로 실행하기 때문에, 브라우저를 종료한 상태에서 돌아갑니다. 이
              뿐만 아니라, 개발자의 network가 끊킨 상황에서 app에 대한 통제를 할 수 있는 수단이기 때문에 매우 중요한
              개념입니다. 이미지에 나와있는대로 servie worker가 설치되면 install 이벤트가 네트워크를 통해 들어가고, 위에
              말씀드린 웹 셸이나, 부가적으로 설정해놓은 정보들이 caching 된 후 실행됩니다.
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h2>2. 설치 및 개발</h2>
            <div>
              <pre>
                <code data-trim={true} data-noescape={true}>
                  $ vue init pwa my-project $ cd my-project $ npm i
                </code>
              </pre>
            </div>
            <div style={{ fontSize: '20px' }}>
              <a href="https://developers.google.com/web/fundamentals/codelabs/?hl=ko" target="_blank">
                구글 pwa 기본 튜토리얼
              </a>
            </div>
            <div style={{ fontSize: '20px' }}>
              <a href="https://github.com/seouldrinker/seoulDrinkerPwa" target="_blank">
                https://github.com/seouldrinker/seoulDrinkerPwa
              </a>
            </div>
            <aside className="notes">
              기본적인 template을 지원해주기 때문에 pwa template으로 간단하게 설치할 수 있습니다. 아래 url은 구글의 pwa
              튜토리얼과 제가 ppt를 준비하면서 개발했던 자료입니다.
            </aside>
          </section>
          <section>
            <h3>그 다음은...</h3>
            <div className="fragment" style={{ width: '80%', margin: '0 auto' }}>
              <img style={{ display: 'block', margin: '0 auto' }} src="/img/presentation/vue-pwa-start/develop.png" />
            </div>
            <aside className="notes">
              네 그 다음 세팅은 열심히 개발하는겁니다. 기본적으로 template의 vue 코딩하는 부분은 동일하기 때문에
              프로젝트를 진행해주시면 됩니다.
            </aside>
          </section>
          <section>
            <h3>코딩 끝! 다음은 세팅...?</h3>
            <div className="fragment">
              <div style={{ display: 'inline-block', width: '30%', verticalAlign: 'top' }}>
                <img style={{ display: 'block', margin: '0 auto' }} src="/img/presentation/vue-pwa-start/folder1.png" />
              </div>
              <div style={{ display: 'inline-block', width: '30%', verticalAlign: 'top' }}>
                <img style={{ display: 'block', margin: '0 auto' }} src="/img/presentation/vue-pwa-start/folder2.png" />
              </div>
            </div>
            <aside className="notes">
              src 디렉토리에 이전에 vue 프로젝트와 동일하게 프로젝트를 진행하셨다면 위 경로들을 보셔야 합니다. 빌드
              설정과 앱 설치 시의 설정인 manifest 설정입니다. 앞서 링크를 걸어놨던 구글 pwa 튜토리얼와
              vue-pwa-template를 하면서 해결하기에 시간이 조금 소요되었던 내용입니다. 오늘 발표의 내용은 이것에 대한
              내용이 대부분입니다.
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h2>3. 사용하면서 어려웠던 부분</h2>
            <div>
              앱 개발 후{' '}
              <a href="https://developers.google.com/web/fundamentals/codelabs/?hl=ko" target="_blank">
                구글 pwa 튜토리얼
              </a>
              을 참고하여 세팅을 시작
            </div>
            <aside className="notes">
              앱 개발을 마치고 튜토리얼을 보면서 세팅을 시작했습니다. 참고하여 세팅을 시작했습니다. 제가 준비한 예제에선
              production 모드에만 세팅을 했습니다 ^^; 그 이유는 뒤에서 설명드릴게요.
            </aside>
          </section>
          <section>
            <h3>3-1. Service Worker 등록하기</h3>
            <div>기본 방법</div>
            <div>
              <div style={{ display: 'inline-block', width: '48%', verticalAlign: 'top' }}>
                <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code1.png" />
              </div>
              <div style={{ display: 'inline-block', width: '48%' }}>
                <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code2.png" />
              </div>
            </div>
            <aside className="notes">
              service worker는 처음에 말씀드린대로 브라우저와 별개로 돌기 때문에, 현재 브라우저에 등록을 시켜줘야
              합니다. service worker 에서는 여러가지 이벤트를 걸 수 있고 코드에서는 install 했을 때와, caching이 끝나고
              activate가 될 때의 이벤트 리스너 입니다.
            </aside>
          </section>
          <section>
            <h3>3-1. Service Worker 등록하기</h3>
            <div>webpack.dev.conf.js 방법</div>
            <div style={{ display: 'inline-block', width: '48%', verticalAlign: 'top' }}>
              <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code3.png" />
            </div>
            <div style={{ display: 'inline-block', width: '48%' }}>
              <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code4.png" />
            </div>
            <aside className="notes">
              vue-pwa-template dev 모드에서는 webpack에 의해 service-worker-dev.js가 불러져 옵니다. 그런데, register
              부분이 없이 service worker의 event listener만 있습니다. 사실 그래서 dev 모드에서는 바로 사용을 할 수
              없습니다. localhost에서 사용은 할 수 있지만, 이 부분에 대한 설정을 따로 해줘야 합니다.
            </aside>
          </section>
          <section>
            <h3>3-1. Service Worker 등록하기</h3>
            <div>webpack.prod.conf.js 방법</div>
            <div style={{ display: 'inline-block', width: '48%', verticalAlign: 'top' }}>
              <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code5.png" />
            </div>
            <div style={{ display: 'inline-block', width: '48%' }}>
              <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code6.png" />
            </div>
            <aside className="notes">
              production 모드에서는 dev와 마찬가지로 webpack.prod.conf.js에 HtmlWebpackPlugin 라이브러리가 있지만,
              추가적으로 SWPrecacheWebpackPlugin 라이브러리가 있습니다. 그리고 service worker 파일에 register가 있죠.
            </aside>
          </section>
          <section>
            <h3>3-2. Webpack 설정하기</h3>
            <div>SWPrecacheWebpackPlugin 라이브러리는 뭐하는 앤데...</div>
            <br />
            <div className="fragment">=&gt;기본적인 설정 내용에 따라 추가 Service Worker를 자동으로 생성해주는 놈!</div>
            <aside className="notes">
              여기서 혹시 이상한 점을 생각하신 분 있으신가요? 네, production 모드에서는 service worker event listener가
              빠져있네요. 기본적인 설정 내용으로 Service Worker를 생성해줬으니, 제가 원하는 event Listener는 아직
              안붙어있습니다. 그래서 SWPrecacheWebpackPlugin 라이브러리를 뒤져보니 runtimeCaching, importScripts 라는
              놈들이 있더군요.
            </aside>
          </section>
          <section>
            <h3>3-2. Webpack 설정하기</h3>
            <div>
              <div style={{ display: 'inline-block', width: '48%', verticalAlign: 'top' }}>
                <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code7.png" />
              </div>
              <div style={{ display: 'inline-block', width: '48%' }}>
                <img style={{ margin: '0 10px' }} src="/img/presentation/vue-pwa-start/code8.png" />
              </div>
            </div>
            <aside className="notes">
              runtimeCaching은 시작하면서 바로 캐시를 먹일 url에 대해 패턴으로 입력할 수 있는 설정이고 importScripts는
              파일로 service-worker의 추가분을 넣을 수 있게 해주는 설정입니다. 저는 sw.js파일을 만들었구요, 이렇게
              sw.js를 추가해주려면 build 시 sw.js 파일도 dist 디렉토리로 넘어가야 하기 때문에 static 파일을 넘기는
              CopyWebpackPlugin으로 sw.js 파일을 함께 넘겨줍니다. sw.js 파일은 이전 service worker 파일들과 유사합니다.
              이제 딱 service worker가 설정된 pwa 앱을 돌릴 수 있게 되었네요!
            </aside>
          </section>
          <section>
            <h3>3-3. Service Worker 마무으리!</h3>
            <div className="fragment">어후... 너무 복잡하다... 결론이 뭔데??</div>
            <br />
            <div>
              <ol style={{ fontSize: '32px' }}>
                <li className="fragment">
                  기본적으로 자신의 앱 코드 안에 서비스 워커를 등록 시켜주는 register 부분이 있어야 하고, 등록 될
                  Service Worker 파일이 있어야 한다.
                </li>
                <li className="fragment">그러나 vue-pwa-template 의 dev 버전에서는 register 부분이 따로 없다.</li>
                <li className="fragment">
                  Production 모드에서는 register 부분이 있으나, 서비스 워커를 자동으로 생성해주는 부분만 있다. (커스텀
                  시, 설정이 필요)
                </li>
                <li className="fragment">
                  Production 모드에서 사용하려면 webpack설정을 조금 바꿔줘야 하는데 문서가 쪼오금... 친절하진 않음.
                </li>
              </ol>
            </div>

            <aside className="notes">
              service worker에서의 결론은 바로 사용할 수 없다는 점입니다. dev모드, production 모드 상관없이 기본적인
              설정이 필요하다는 점이죠.
            </aside>
          </section>
        </section>

        <section>
          <h2>4. Push Notification</h2>
          <div className="fragment" style={{ textAlign: 'left' }}>
            사실 Vue에서의 세팅을 마치고 튜토리얼대로 하면 끝!
          </div>
          <div className="fragment" style={{ textAlign: 'left' }}>
            튜토리얼에서 알려주는대로 Service Worker에 Event를 등록해주세요.
          </div>
        </section>

        <section>
          <h2>Q&amp;A</h2>
        </section>

        <section>
          <h1>끝</h1>
          <div>감사합니다.</div>
        </section>
      </div>
    </PresentationLayout>
  );
}
