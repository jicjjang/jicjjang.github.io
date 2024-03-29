import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import PresentationLayout from '~/components/layout/Presentation';
import { Query } from '~/gatsby-graphql-types';

export default function graphqlStartServer({ location: pLocation, data }: PageProps) {
  const linkedinUrl = (data as Query).site!.siteMetadata!.social!.linkedin || undefined;

  return (
    <PresentationLayout pathname={pLocation.pathname}>
      <div className="slides">
        <section>
          <h2>GraphQL 시작하기 1</h2>
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
            주제를 시작하기 1로 정한것은, 서버와 클라이언트 모두 적용해야 하기 때문인데, 금일 발표는 서버를 위주로
            발표를 진행하고, 추후 발표에서 Vue에 적용한 클라이언트 위주의 발표를 진행하겠습니다.
          </aside>
        </section>

        <section>
          <div>
            <h2>순서</h2>
            <ul style={{ listStyle: 'none', margin: '0' }}>
              <li className="fragment">1. About GraphQL</li>
              <li className="fragment">2. Example GraphQL</li>
              <li className="fragment">3. Stable GraphQL</li>
              <li className="fragment">Q &amp; A</li>
            </ul>
          </div>
        </section>

        <section>
          <section>
            <h2>1. About GraphQL</h2>
            <div style={{ width: '90%', margin: '0 auto' }}>
              <span style={{ display: 'inline-block', width: '58%', margin: '5px', verticalAlign: 'top' }}>
                <img className="fragment" data-fragment-index="1" src="/img/presentation/graphql-start/about1.jpg" />
                <div className="fragment" style={{ fontSize: '20px' }} data-fragment-index="3">
                  필요한 것만 정확히 물어볼 수있는 기능을 제공하며 시간이 지남에 따라 API를 쉽게 개발할 수 있도록...
                </div>
              </span>
              <span style={{ display: 'inline-block', width: '38%', margin: '5px' }}>
                <img className="fragment" data-fragment-index="2" src="/img/presentation/graphql-start/about2.jpg" />
                <div className="fragment" style={{ fontSize: '20px' }} data-fragment-index="4">
                  GraphQL은 단독 버전 관리를 통해 기존 코드 수정없이 보다 깨끗하고 유지보수가 쉽게 사용이 가능...
                </div>
              </span>
            </div>
            <aside className="notes">
              4/4
              <br />
              이러한 장점이 있는데요, 저희 서비스에 적용한다면 어떤 도움이 될지, 어떤 점을 미리 살펴봐야 할 지
              알아보겠습니다.
            </aside>
          </section>
          <section>
            <h2>들어가기에 앞서...</h2>
            <div style={{ display: 'inline-block', width: '45%', verticalAlign: 'top' }}>
              <img className="fragment" data-fragment-index="1" src="/img/presentation/graphql-start/apollo1.png" />
              <div className="fragment" data-fragment-index="3">
                <a
                  href="https://graphql-kr.github.io/code/#apollo-server-https-www-apollographql-com-docs-apollo-server-github-https-github-com-apollographql-apollo-server-npm-https-www-npmjs-com-package-apollo-server-express"
                  target="_blank">
                  Apollo를 사용합니다.
                </a>
              </div>
            </div>
            <div style={{ display: 'inline-block', width: '50%' }}>
              <img className="fragment" data-fragment-index="2" src="/img/presentation/graphql-start/apollo2.png" />
            </div>
            <aside className="notes">
              3/3
              <br />
              그 전에, GraphQL은 Apollo와 함께 사용하겠습니다. 기본적으로 `GraphQL은 API를 위한 쿼리언어` 이므로 서버만
              지원을 합니다. 서버에 GraphQL을 적용하고, 클라이언트에서는 데이터만 호출할 수도 있지만 프론트와 서버 사이
              GraphQL 데이터를 편리하게 교환할 수 있도록 Apollo가 도와줍니다.
              <br />
              <br />
              Apollo는 JavaScript 서버 프레임워크들에 대해서 클라이언트와의 더욱 쉬운 연결을 위해 별도의 지원 또한
              하고있습니다.
              <br />
              <br />
              또한, GraphQL에서도 공식적으로 Apollo를 사용하라고 가이드를 제공해줍니다. (물론 서버까지 커버해줍니다.)
            </aside>
          </section>
          <section>
            <h3>
              <a
                href="https://github.com/seouldrinker/seoulDrinkerGraphql/blob/master/api/graphql/typeDefs.js"
                target="_blank">
                Type 정의
              </a>
            </h3>
            <div>
              <img
                className="fragment"
                style={{ display: 'inline-block', width: '15%', margin: '0 10px' }}
                src="/img/presentation/graphql-start-server/type1.jpg"
              />
              <img
                className="fragment"
                style={{ display: 'inline-block', width: '15%', margin: '0 10px', verticalAlign: 'top' }}
                src="/img/presentation/graphql-start-server/type2.jpg"
              />
              <span
                className="fragment"
                style={{ display: 'inline-block', width: '65%', marginTop: '20%', verticalAlign: 'top' }}>
                MVC 모델에서의 Model과 동일
              </span>
            </div>
            <aside className="notes">
              2/3
              <br />
              MVC 모델에서의 Model과 동일하게 DB의 필드가 아닌,
              <br />
              3/3
              <br />
              가져올 데이터에 대해 사전에 정의를 해놓습니다.
            </aside>
          </section>
          <section>
            <h3>
              <a
                href="https://github.com/seouldrinker/seoulDrinkerGraphql/blob/master/api/graphql/typeDefs.js"
                target="_blank">
                Query &amp; Mutation 정의
              </a>
            </h3>
            <div>
              <img
                className="fragment"
                style={{ display: 'inline-block', width: '25%', margin: '0 10px' }}
                src="/img/presentation/graphql-start-server/query_mutation.jpg"
              />
              <span
                className="fragment"
                style={{ display: 'inline-block', width: '65%', marginTop: '20%', verticalAlign: 'top' }}>
                데이터를 가져올 수 있는 조합인 Query 및 Mutation을 정의합니다.
              </span>
            </div>
            <aside className="notes">
              1/2
              <br />
              저희가 기존에 만들던 Query와 동일합니다. Mutation은 Get이 아닌 Post, Put, Delete, Options 요청들이며,
              <br />
              2/2
              <br />
              정의에 있어서 Get과 큰 차이는 없습니다.
            </aside>
          </section>
          <section>
            <h3>Interface 정의</h3>
            <div>
              <div className="fragment" style={{ width: '48%', margin: '0 auto' }}>
                <img src="/img/presentation/graphql-start-server/code1.png" />
              </div>
              <div className="fragment">interface를 상속하여 타입 구현</div>
            </div>
            <aside className="notes">
              1/2
              <br />
              React, Vue에 Flow나 Typescript로 타입에 강제성을 부여는 것과 마찬가지로
              <br />
              2/2
              <br />
              GraphQL에 Interface를 정의 후, type에서 implements 한 값을 정의합니다.
            </aside>
          </section>
          <section>
            <h3>Resolver</h3>
            <div className="fragment" style={{ display: 'inline-block', width: '55%', verticalAlign: 'top' }}>
              <img src="/img/presentation/graphql-start-server/resolvers1.png" />
            </div>
            <div className="fragment" style={{ display: 'inline-block', width: '40%', margin: '0 10px' }}>
              <img src="/img/presentation/graphql-start-server/resolvers2.png" />
            </div>
            <div className="fragment">정의한 Query와 Mutation에 대한 내용을 구현합니다.</div>
            <aside className="notes">
              2/3
              <br />
              type으로 정의한 모델에 맞게 기능들을 구현합니다.
              <br />
              3/3
              <br />
              모델들이 구현되어있는 이유는, 해당 모델에서 조인하여 가져오는 값들을 어떻게 가져올지에 대해 정의한
              것입니다. `pubDetail` Query를 실행한다고 하였을 때, return 값은 Pub 모델과 같은데 Pub 에는 Feed의 배열인
              `_feedList` 값이 있습니다. 이 값을 구현해줍니다. 또한, Feed에서 연결된, 연결된, 연결된.... 값들을 모두
              정의해주면 필요할 경우, 원하는 쿼리에 대한 결과를 가져올 수 있습니다.
            </aside>
          </section>
        </section>

        <section>
          <h3>2. Example GraphQL</h3>
          <div className="fragment" style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
            <div style={{ fontSize: '20px' }}>
              <a href="https://github.com/seouldrinker/seoulDrinkerGraphql" target="_blank">
                &lt; 예제를 보면서 확인해봅시다! &gt;
              </a>
            </div>
          </div>
        </section>

        <section>
          <section>
            <h3>3. Stable GraphQL</h3>
            <div className="fragment" style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
              <img src="/img/presentation/graphql-start-server/stable1.png" />
              <div style={{ fontSize: '20px' }}>
                <a href="https://www.apollographql.com/docs/#client-section" target="_blank">
                  &lt; Apollo 클라이언트 &gt;
                </a>
              </div>
            </div>
            <div className="fragment" style={{ display: 'inline-block', width: '40%' }}>
              <img src="/img/presentation/graphql-start-server/stable2.png" />
              <div style={{ fontSize: '20px' }}>
                <a href="http://graphql.org/code/#server-libraries" target="_blank">
                  &lt; GraphQL 서버 &gt;
                </a>
              </div>
            </div>
            <div className="fragment">서버와 클라이언트 각종 언어 및 라이브러리에 대응</div>
            <aside className="notes">
              3/3
              <br />
              GraphQL가 만들어진 12년도 이후로 서버는 각종 언어에 대한 지원을 시작했습니다. Apollo는 16년 2월 경
              시작하였지만 현재 스타 6,500여개에 contributor가 700명 이상입니다.
            </aside>
          </section>
          <section>
            <h3>사용하면서 발견한 이슈?!</h3>
            <div className="fragment">는 아직까지 없습니다.</div>
            <aside className="notes">
              1/1
              <br />
              아직까지 만들어보면서 발견한 이슈는 없고, Get, Post 등 동작은 확인했지만 파일이나 이미지 업로드에 대한
              구현을 해보지 못했습니다.
            </aside>
          </section>
          <section>
            <h3>벅스에 도움이 될만한 부분</h3>
            <div className="fragment">클라이언트 &amp; 웹, 지금의 API로 한번에!!</div>
            <aside className="notes">
              1/1
              <br />
              클라이언트와 웹 모두 API를 사용한다고 하면, 서로 다른 API를 가져오는 이슈가 있는데 이를 GrapghQL로 해결이
              가능합니다.
            </aside>
          </section>
          <section>
            <h3>사용 중인 기업</h3>
            <div className="fragment" style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
              <img src="/img/presentation/graphql-start/users.png" />
              <div style={{ fontSize: '20px' }}>
                <a href="http://graphql.org/users/" target="_blank">
                  &lt; 더 많은 기업들 &gt;
                </a>
              </div>
            </div>
            <aside className="notes">
              1/1
              <br />
              많은 기업에서 사용중이지만, 대표적으로 이미지와 같이 페이스북, 깃헙, 핀터레스트, 코세라 등등의 기업들에서
              사용 중입니다.
            </aside>
          </section>
          <section>
            <h3>컨퍼런스</h3>
            <div className="fragment" style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
              <img src="/img/presentation/graphql-start/conference.png" />
              <div style={{ fontSize: '25px' }}>
                <a href="https://summit.graphql.com/" target="_blank">
                  &lt; 발표자 - 페이스북, 깃헙, 트위치, oauth, IBM 등등 기업 직원들... &gt;
                </a>
              </div>
            </div>
            <aside className="notes">
              1/1
              <br />
              2016, 2017년도에 Apollo의 주도로 컨퍼런스가 이루어졌으며 매년 개최될 예정입니다.
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h1>Q &amp; A</h1>
          </section>
          <section>
            <h1>끝</h1>
            <div>감사합니다.</div>
          </section>
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
