import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import PresentationLayout from '~/components/layout/Presentation';
import { Query } from '~/gatsby-graphql-types';

export default function developerLife({ location: pLocation, data }: PageProps) {
  const linkedinUrl = (data as Query).site!.siteMetadata!.social!.linkedin || undefined;

  return (
    <PresentationLayout pathname={pLocation.pathname}>
      <div className="slides">
        <section>
          <h2>현실적인 개발로 먹고살기</h2>
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
            안녕하세요. NHN벅스 웹서비스팀 최준석입니다.
            <br />
            이런 커뮤니티에서의 발표는 처음이라 많이 떨리네요.
            <br />
            엄청난 기술에 대해 알려드리면 좋겠지만, 그건 저도 잘 모릅니다.
            <br />
            제게 엄청난 기술이 여러분께는 발톱의 때일수도 있잖아요...
            <br />
            여러분께 제가 지금 27살 이 자리까지 오게 된 일련의 과정에 대해
            <br />
            최대한... 동네 형, 오빠가 말하는 것처럼 말씀드리고 싶어요.
            <br />
            제 경험들이 정답은 아니지만, 조금 먼저 개발자가 된 사람으로써
            <br />
            말씀드리고 싶은 부분이나, 주의할 부분들을 설명드리겠습니다.
            <br />
          </aside>
        </section>

        <section>
          <div>
            <h2>소개</h2>
            <div
              style={{
                display: 'inline-block',
                width: '361px',
                verticalAlign: 'top'
              }}>
              <img
                style={{
                  width: '500px',
                  margin: '0'
                }}
                src="/img/presentation/oss/me.jpg"
              />
              <img
                className="fragment fade-up"
                data-fragment-index="3"
                style={{ width: '500px', margin: '0' }}
                src="/img/presentation/oss/conert.jpg"
              />
            </div>
            <ul style={{ listStyle: 'none', margin: '0', fontSize: '30px' }}>
              <li>최준석</li>
              <li>NHN Bugs web-service, 입사 1년차 병아리</li>
              <li>커뮤니티 활동</li>
              <li style={{ margin: '0 0 0 50px' }}>- Nodejs Korea</li>
              <li style={{ margin: '0 0 0 50px' }}>- Vuejs Korea</li>
              <li style={{ margin: '0 0 0 50px' }}>- react Korea</li>
              <li className="fragment" data-fragment-index="0" style={{ margin: '0 0 0 55px' }}>
                (여기까지 쓰고보니 한국그룹 사랑)
              </li>
              <li className="fragment" data-fragment-index="1">
                여행 좋아함
              </li>
              <li className="fragment" data-fragment-index="2">
                페스티벌 좋아함
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h2>목차</h2>
            <ul style={{ listStyle: 'none', margin: '0' }}>
              <li className="fragment">1. 별거없는 발자취</li>
              <li className="fragment">2. 별게 되기 위한 노력</li>
              <li className="fragment">3. 그래서 넌?</li>
              <li className="fragment">4. Q&amp;A</li>
            </ul>
          </div>
        </section>

        <section>
          <section>
            <h2>1. 별거없는 발자취</h2>
            <br />
            <div className="fragment" style={{ display: 'inline-block', verticalAlign: 'top' }}>
              <h4>
                OSS 개발자 포럼에서
                <br />
                만난 여러분의 모습
              </h4>
              <img src="/img/presentation/oss/jjal1.jpg" />
              <div style={{ fontSize: '15px' }}>출처 - 네이버 웹툰 &lt;대학일기&gt;</div>
            </div>
            <div
              className="fragment"
              style={{ display: 'inline-block', verticalAlign: 'top', margin: '220px 50px 0 10px' }}>
              vs
            </div>
            <div className="fragment" style={{ display: 'inline-block' }}>
              <h4>최모씨의 20살</h4>
              <img src="/img/presentation/oss/jjal2.jpg" />
              <div style={{ fontSize: '15px' }}>출처 - 네이버 웹툰 &lt;대학일기&gt;</div>
            </div>
            <aside className="notes">
              이 발표자료는 미리 만들어놓는 것이지만,
              <br />
              OSS 개발자 포럼 여름캠프에 참가했던 1기로써 예상한 여러분의
              <br />
              모습은... 이랬습니다. 앞서 있던 교육에 있어서 조금 힘들었나봐요^^;;
              <br />
              다들 피곤해보여요!! 그치만 저의 시작은... 이랬습니다.
              <br />
              <br />
              대학 와서 처음하는 코딩은 너무 어려웠고, 공부에 흥미도 없던 저에게는
              <br />큰 짐이었죠.
            </aside>
          </section>
          <section>
            <div>
              <h2 className="fragment">Hello World 다음은?</h2>
              <div className="fragment fade-up" style={{ position: 'absolute', width: '100%', margin: '0 auto' }}>
                <img style={{ display: 'block', margin: 'auto' }} src="/img/presentation/oss/billiards.jpg" />
              </div>
              <div className="fragment fade-up" style={{ position: 'absolute', width: '100%', margin: '0 auto' }}>
                <img style={{ display: 'block', margin: 'auto' }} src="/img/presentation/oss/jjal3.jpg" />
                <div className="fragment">3~4시간...</div>
              </div>
            </div>
            <aside className="notes">
              원하는 과에 들어왔지만, 이전까지 코딩을 해본적도 없고, 공부도 엄청 좋아하진 않았어요.
              <br />
              게다가 게임을 엄청 좋아하고, 놀긴 좋아하니 매일 집과 학교만 왔다갔다했죠.
              <br />
              이 시기에 당구를 근 300 가까이 쳤던 것 같아요. 당구장 사장님과 당구를 치기도 했었어요.
              <br />
              코딩은 좋아하긴 하는데, 잘 하지도 못했어요. 잘 못한다고 더 열심히 한 것도 아니고...
              <br />
              별로 탑만드는 과제엔 3 ~ 4시간이 기본이었어요.
              <br />
              심지어, 주식에도 관심을 가지게 된 시기라 어찌저찌하여 경영학과로 복수 전공을 했어요.
              <br />
              코딩과 수치 계산이 다 하면 도움이 될거라고 생각한거였죠.
              <br />
            </aside>
          </section>
          <section>
            <div>
              <h2 className="fragment">도피</h2>
              <div className="fragment" style={{ width: '80%', margin: '0 auto' }}>
                <img style={{ display: 'block', margin: '0 auto' }} src="/img/presentation/oss/mil.jpg" />
              </div>
            </div>
            <aside className="notes">
              전과가 통과되고 나서 친구들이 다 군대에 가는 시기에 맞춰
              <br />
              군대에지원했고 가나보다~ 하면서 입대하게 되었어요.
              <br />
              여기서는 밤 10시에 취침을 하는데, 11시반 ~ 12시까지는 연등이라고 해서,
              <br />
              잠자는 시간 줄여서 공부를 할 수 있게 해줘요. 전공 서적들을 가지고 거기서 공부를 했죠.
              <br />
              그러다 현자타임이 왔습니다. 뭐해야 되는지도 모르고 맨날 똑같은 책 보다보니 재미가 없었죠
              <br />
            </aside>
          </section>
          <section>
            <div>
              <h2 className="fragment">뭐먹고 살지?</h2>
              <div className="fragment" style={{ width: '80%', margin: '0 auto' }}>
                <img style={{ display: 'block', margin: '0 auto' }} src="/img/presentation/oss/jjal4.jpg" />
                <div style={{ fontSize: '15px' }}>출처 - 무한도전</div>
              </div>
            </div>
            <aside className="notes">
              그러다보니 자연스레 생각하는 시간이 많아졌어요. 복수전공이 맞았던걸까?
              <br />
              일년정도 고민하다 답을 찾았죠. 이것 저것 건드리는것 보다는 코딩만 하는걸로.
              <br />
              <br />
              그렇게 정하고 나니, 또 생각할게 많았죠.
              <br />
              학교에서 맞지않았던 코딩은 어떻게 할것이며 복수전공 확정난건 어떻게 하지?
              <br />뭐 이것저것 복잡한 것들이 많았지만 모두 해결하고, 다시 원상태로 돌아왔죠.
            </aside>
          </section>
          <section>
            <div>
              <h2>
                <span className="fragment">창업 </span>
                <span className="fragment"> 동아리</span>
              </h2>
              <div className="fragment fade-out" style={{ position: 'absolute', width: '100%' }}>
                <img
                  style={{ display: 'block', width: ' 80%', margin: 'auto' }}
                  src="/img/presentation/oss/jjal5.jpg"
                />
                <div style={{ fontSize: '15px', marginTop: '10px' }}>출처 - 클리앙</div>
              </div>
              <div className="fragment fade-up">
                <img
                  style={{ width: '20%', margin: '0 5%', display: 'inline-block', verticalAlign: 'top' }}
                  src="/img/presentation/oss/parangsae1.jpg"
                />
                <img
                  style={{ width: '50%', margin: '0 5%', display: 'inline-block' }}
                  src="/img/presentation/oss/parangsae2.jpg"
                />
              </div>
            </div>
            <aside className="notes">
              창업을 했던건 아니고 창업 동아리를 했어요. 제가 창업하자! 했던건 아니고
              <br />
              창업을 하고싶어하던 과 선배와 함께 파랑새라는 교내 창업 동아리를 했었어요.
              <br />
              개발을 하고자 하는 사람들이 모여서 열심히 무언가를 하니까 동기부여가 되더라고요.
              <br />
              다들 안드로이드 앱을 만들고 있었는데, 혼자 예전부터 관심있었던
              <br />
              웹사이트를 만들기 시작했어요. 동아리 소개 페이지를 만들었죠.
              <br />
              발표자료를 만들면서 예전 소스를 한번 봤는데 어휴 끔찍했습니다...
              <br />
              <br />
              어찌보면 이게 시작이었어요. 그 전까지 코딩이란건 별로 재미도 없었는데 말이죠.
              <br />
              이 프로젝트가 제 코딩 인생의 발판이 되었습니다.
              <br />
              <br />
              딱 이 시기에 OSS 개발자 포럼 여름 특강을 들었어요.
              <br />이 때 들었던 특강에서 코딩을 저보다 잘하는 어리신 분들이 많아 많이 좌절했었어요 ㅋㅋ
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>23살 - 창업 동아리</div>
            <h2 className="fragment">졸업 프로젝트...?</h2>
            <div className="fragment">
              <img style={{ width: '80%', margin: '0 auto' }} src="/img/presentation/oss/mypi.png" />
            </div>
            <aside className="notes">
              엥?? 24살에 무슨 졸업 프로젝트???
              <br />
              객원 멤버로 참여하게 되었습니다. 창업 동아리의 사이트를 보고 같이 해보자는 요청을 받았어요.
              <br />
              보통 디자이너들이 참여할 수 있지만, 프론트 개발자로 참여했어요.
              <br />
              주제는 인터넷 검색에서 나오는 개인정보의 양을 보고 위험도를 알려주는... 그런 앱이었고
              <br />
              은상을 타게 되었습니다. 선배들의 프로젝트에 꼽사리 낀건 아닐까 스스로도 자문했지만
              <br />
              저보다 코딩을 안한... 선배들도 있어서 저를 더 많이 챙겨주셨어요^^;;
              <br />
              <br />
              문제는 선배들의 프로젝트를 도와주다 제 학점이 엉망이 된 정도...?
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>23살 - 창업 동아리</div>
            <h2 className="fragment">인생의 터닝포인트</h2>
            <div className="fragment">
              <img style={{ width: '80%', margin: '0 auto' }} src="/img/presentation/oss/tastelab1.jpg" />
            </div>
            <aside className="notes">
              졸업 프로젝트를 3학년 1학기에 마치고, 인턴을 하게 되었습니다. 창업 동아리를 기반으로 했던
              <br />
              졸업 프로젝트가 다시 기반이 되어 스타트업에 합격을 하게 되었고, 여기서의 1년이 정말
              <br />
              웹 개발자로서 해봐야 할 기초를 다 겪게 해주었습니다.
              <br />
              기본적인 웹 프론트, 백엔드, 서버 세팅 및 구동 등등...
              <br />
              돈을 더 주는것도 아닌데 밤을 새면서 정말 즐겁게 일했어요. 스스로 즐거웠으니까요.
              <br />
              이게 정말 중요했던 것 같아요. 내가 즐거운지 아닌지.
              <br />
              <br />
              그렇게 일년여간 지냈던 사람들과는 지금도 연락하고 지냅니다.
              <br />
              같이 프로젝트도 같이 하고요!
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <h2 className="fragment">휴식</h2>
            <div className="fragment">
              <img style={{ width: '80%', margin: '0 auto' }} src="/img/presentation/oss/jjal6.jpg" />
              <div style={{ fontSize: '15px', marginTop: '10px' }}>출처 - 어드벤처 타임</div>
            </div>
            <aside className="notes">
              인턴이 끝나고 조금 쉴까 했더니 스스로 마음이 헤이해지는게 느껴지더라고요...
              <br />
              이대론 안되겠다는걸 느꼈죠. 배운걸 금방 잊을까도 걱정되었고.
              <br />
              <br />
              또, 회사에서 나와서 내가 어떻게, 어떤 것을 얼마나 할 수 있을지도 궁금했어요.
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <h2 className="fragment">공모전</h2>
            <div className="fragment">
              <img style={{ width: '50%', margin: '0 auto' }} src="/img/presentation/oss/competition.jpg" />
            </div>
            <aside className="notes">
              서울시 공공 데이터 앱 개발 공모전에 나가기로 했어요.
              <br />
              혼자하면 하다가 포기할수도 있고, 디자이너도 필요해서 팀원을 구했어요.
              <br />
              주변에 마음맞는 친구들을 모아서 시작했죠. 그렇게 4명이서 시작을 했죠.
              <br />
              대략 3달동안 준비를 했으나 결과는 처참했어요ㅠㅠ. 시장 분석을 잘못했죠.
              <br />
              여기서 시장은 대회에 대한 것이겠죠. 이 대회는 서울시의 open api를 어떻게 사용하는지
              <br />
              보는 것인데, 소셜 어플같은 내용으로 만들었더니 초기 사용자가 부족해 실패했습니다.
              <br />
              DB에는 서울시가 가입한 내역만 덩그러니 있고 아무것도 안해봤더라고요^^;
              <br />
              그래도 공모전을 하면서 시키는 것이 아니라 능동적으로 어떤 기능을 위해
              <br />
              어떤 개발을 해야되는지, DB나 툴 등을 고민하게 되었습니다.
              <br />
              <br />
              이런건 실제로 product를 만들지 않으면 고려할 수 없으니까
              <br />
              실패라도 매우 좋은 경험이 되었다고 생각해요.
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>25살 - 인턴, 공모전</div>
            <h2 className="fragment">졸업 프로젝트 2</h2>
            <div className="fragment">
              <img style={{ width: '50%', margin: '0 auto' }} src="/img/presentation/oss/sosanara.jpg" />
            </div>
            <aside className="notes">
              작년, 4학년일 때 입니다. 방학 1달동안 어학연수를 다녀오고 졸업 전시회을 시작했죠.
              <br />
              2 ~ 3개의 아이디어가 있었지만 교수님이 좋아하시는 주제로^^ 개발을 시작했습니다.
              <br />
              머신러닝으로 학습된 데이터와 촬영한 사진을 비교해 머리 상태가 탈모인지 아닌지,
              <br />
              어떤 탈모 유형인지 알려주는 앱이었어요 ㅋㅋ 남자들!! 지금 어리니까 모르겠지만
              <br />
              교수님이 적극적으로 밀어붙인 이유도 탈모때문이었습니다.
              <br />
              이번엔 동상을 받았습니다. 지난번보단 좋은 성적은 아니었지만 그래도 기분은 좋았죠.
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <div style={{ textAlign: 'right', fontSize: '25px' }}>25살 - 인턴, 공모전</div>
            <h2 className="fragment">NHN 벅스</h2>
            <div className="fragment">
              <iframe
                width="600"
                height="350"
                src="https://www.youtube.com/embed/YCkDy1bj_qM?list=PLHOJzQEtJq9LyzqSwruexQziBgriA50a0"
                frameBorder="0"
                allowFullScreen={true}
              />
            </div>
            <aside className="notes">
              거의 마무리가 되어가네요. 현재 재직중인 NHN 벅스입니다.
              <br />
              졸업 전시회를 준비할 때가 4학년 1학기인데, 그 때 벅스에 지원을 했어요.
              <br />
              사실 지원 가능한 나이는 아니었지만, 왠지 모를 패기가 넘쳤던 때라 무작정 썼습니다.
              <br />
              서류에서 덜컥 붙었다는 말을 듣고 주변인들에게 물어봤었죠. 괜히 설레발쳐서 올라갔다가
              <br />
              면접에서 떨어지면 기대만큼 실망이 클테니까요. 그런데 서류합격, 필기시험, 1차면접을 지나
              <br />
              최종면접까지 갔습니다. 걱정하던 대답은 여기서 나왔습니다. 대표님께서 물어보셨죠
              <br />
              하지만 `회사일에 영향 주지만 않으면 상관없어요.` 라는 말에 안심하였죠.
              <br />
              막학기를 사이버 강의로만 채워서 듣고, 올 2월에 졸업했습니다.
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h2>2. 별게 되기위한 노력</h2>
            <h3 className="fragment">와 졸업도 하고 취직도 하고 짝짝짝</h3>
            <div className="fragment">
              <img style={{ width: '40%', margin: '0 auto' }} src="/img/presentation/oss/jjal11.jpg" />
            </div>
            <aside className="notes">
              ㅋㅋㅋ 여러분 지금 방학이죠? 방학이 없습니다... 네....
              <br />
              취직을 했으니 이제 시작입니다. 지금까진 준비운동있던 거잖아요. 실제로 개발을 하기 위한 준비.
              <br />
              취직을 해서 뭔가 새로운 것을 배우고, 학습하니 내가 재밌을만한 것들을 만들어 봅시다.
              <br />
              그러기 위해 돈을 버는거죠... 물론 학생일 때보단 시간이 조금 부족하긴 해요.
              <br />
              학생때 했으면 좋았을 것을...
              <br />
              근데 취직하고 놀면 커리어 관리가 안되겠죠 ㅎㅎㅎ!
              <br />
              취직하고도 쉬지 않는게 좋아요. 퇴근한다고 집에가서 자는건...ㅠㅠ
            </aside>
          </section>
          <section>
            <h3>
              <a href="http://115.71.238.136" target="_blank">
                Mclang
              </a>
            </h3>
            <div style={{ display: 'inline-block', width: '40%', margin: '0 2%', verticalAlign: 'top' }}>
              <img className="fragment" src="/img/presentation/oss/mclang1.jpg" />
              <img className="fragment" src="/img/presentation/oss/mclang3.jpg" />
            </div>
            <div className="fragment" style={{ display: 'inline-block', width: '40%', margin: '0 2%' }}>
              <img src="/img/presentation/oss/mclang2.jpg" />
            </div>
            <aside className="notes">
              맥랑이라는 프로젝트를 시작합니다. 인턴십을 함께 했던 디자이너의 졸업 프로젝트였는데요,
              <br />
              이 프로젝트를 하면서 리액트라는 라이브러리를 처음 사용합니다. 원래 프론트 엔지니어를 하고 싶었기 때문에
              <br />
              회사를 다니며 프론트엔드 개발을 주로 하게 됩니다. 물론 회사에선 불가능해요.
              <br />
              IE8 이하를 사용하는 사용자를 버릴 수 없기 때문이죠. 심지어 IE7도 어느정도 지원을 합니다.
              <br />
            </aside>
          </section>
          <section>
            <h3>
              <a href="https://github.com/jicjjang/archiver" target="_blank">
                Archiver
              </a>
            </h3>
            <div>
              <img
                className="fragment"
                style={{ width: '50%', margin: '0 auto' }}
                src="/img/presentation/oss/archiver.gif"
              />
            </div>
            <aside className="notes">
              Vuejs에 관심이 생겨 공부합니다. electron까지 한번에 같이하게 되었어요.
              <br />
              todo리스트를 정리하는 mac 데스크탑 앱을 만들게 됩니다.
              <br />
              가장 핫한 두개의 프론트엔드 라이브러리를 사용해보고 둘의 명확한 장단점을 깨닫게 됩니다.
              <br />
              하면 할수록 역시 얻는게 많은 것 같아요.
              <br />
            </aside>
          </section>
          <section>
            <h3>
              <a href="https://github.com/jicjjang/vue-card-layer" target="_blank">
                vue-card-layer
              </a>
            </h3>
            <div>
              <img
                className="fragment"
                style={{ width: '50%', margin: '0 auto' }}
                src="/img/presentation/oss/vue-card-layer.gif"
              />
            </div>
            <aside className="notes">
              react보다는 vue가 사용하기 쉽고, 사용에 있어서 명확함, 개인적인 의견으로 페이스북에서 만든
              <br />
              flux 패턴을 잘 적용했다고 느끼기에 vue를 전폭적으로 사용합니다.
              <br />
              ppt에는 적지 않았지만 vue의 SSR 프로젝트인 NuxtJS의 번역에도 참여했었어요.
            </aside>
          </section>
          <section>
            <h3 className="fragment" data-fragment-index="0">
              <a href="https://github.com/jicjjang/DoorayHooker" target="_blank">
                Dooray bot
              </a>
            </h3>
            <div className="fragment fade-out" data-fragment-index="2" style={{ position: 'absolute', width: '100%' }}>
              <img
                className="fragment"
                data-fragment-index="1"
                style={{ display: 'inline-block', width: '30%', margin: '0 1%' }}
                src="/img/presentation/oss/dooray1.jpg"
              />
              <img
                className="fragment"
                data-fragment-index="1"
                style={{ display: 'inline-block', width: '30%', margin: '0 1%' }}
                src="/img/presentation/oss/dooray2.jpg"
              />
              <img
                className="fragment"
                data-fragment-index="1"
                style={{ display: 'inline-block', width: '30%', margin: '0 1%' }}
                src="/img/presentation/oss/dooray3.jpg"
              />
            </div>
            <div className="fragment fade-up" style={{ width: '100%' }} data-fragment-index="3">
              <img src="/img/presentation/oss/dooray4.jpg" />
            </div>
            <div className="fragment">여기서 알 수 있는 사실!</div>
            <div className="fragment">"아 이 회사 사람들은 밥 메뉴가 정말 중요하구나...!"</div>
            <aside className="notes">
              사내 메신저 봇 프로젝트입니다. 기본적으로 봇을 관리하는 스케쥴러 서버를 만들고,
              <br />
              주로 동기들로 이루어진 사용자들이 컨트롤할 수 있도록 프론트 페이지를 만들었습니다.
              <br />
              지금 여기 메신지에 있는 3가지 내용인 메뉴봇, 커밋봇, 위크리스트는
              <br />
              라이브러리로 메신저에 어떤 내용을 줄 지에 대한 선택지 입니다.
              <br />
              또한, 대부분 같인 회사 사람들이겠지만 근 한, 두달 사이에
              <br />
              진행한 이 3가지 라이브러리로 npm 다운로드 1,000을 달성했습니다.
              <br />
              <br />
              써놓은대로 라이브러리에서도 관심사가 극명히 갈립니다 ㅋㅋ
            </aside>
          </section>
        </section>

        <section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>25살 - 인턴, 공모전</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>26살 - 졸업 프로젝트2, 취업</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>27살 - 공모전, Mclang, Dooray 봇...</div>
            <h2>3. 그래서 넌?</h2>
            <h3>너가 그렇게 했구나... 근데?</h3>
            <div className="fragment" style={{ width: '100%' }}>
              <img
                className="fragment fade-out"
                style={{ position: 'absolute', width: '30%', margin: '0 33%' }}
                src="/img/presentation/oss/jjal7.jpg"
              />
              <img
                className="fragment fade-up"
                style={{ width: '60%', margin: '0 auto' }}
                src="/img/presentation/oss/jjal8.jpg"
              />
            </div>
            <aside className="notes">
              운좋게 졸업 전에 취직을 해서 다니고 있습니다.
              <br />
              이게 정답이라는 말, 절대절대 아닙니다. 하지만 스스로 불안하지 않을 만큼의 노력은 필요합니다.
              <br />
              어릴때 다들 원피스 한 번이라도 보셨을 겁니다. 원피스에서의 목표는
              <br />
              위대한 항로를 모두 거쳐가서 라프텔에서 어쩌구저쩌구 하는건데, 이런 지도가 나옵니다
              <br />
              시작점은 모두 달라도, 도착은 모두 같다는건데요, 이게 사실 저희한테 마찬가지인 거잖아요.
              <br />
              조금이라도 더 좋은 개발자. 취직은 아닐꺼에요 ㅋㅋ 취직은 저 지도로 치면, 중간 부분의 대륙정도?
              <br />
              취직은 지나가는 길목일 뿐이니까요.
              <br />
              <br />
              제가 지금 위치에서 만족하고 있을까요? 절대 아닙니다. 지금도 프로젝트를 진행하고있고
              <br />
              취직 후에서 3개? 정도는 진행했던 것 같습니다. 저는 여러분보다 대륙 하나 더 넘은
              <br />
              조금 먼저 출발한 사람이라고 해두면 좋을 것 같아요.
              <br />
            </aside>
          </section>
          <section>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>25살 - 인턴, 공모전</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>26살 - 졸업 프로젝트2, 취업</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>27살 - 공모전, Mclang, Dooray 봇...</div>
            <div>
              <h3 className="fragment">결국 제가 하고싶은 말은...</h3>
              <div className="fragment">
                <img
                  style={{ display: 'block', width: '50%', margin: '0 auto' }}
                  src="/img/presentation/oss/jjal9.jpg"
                />
                <div style={{ fontSize: '15px' }}>출처 - 어드벤처 타임</div>
              </div>
            </div>
            <aside className="notes">
              네, 결국 제가 드리고 싶은 말은 포기하지 말라는 겁니다. 라프텔에 도착할 때 까지는
              <br />
              크고 작은 일들이 어마무시하게 생길꺼고, 항상 포기하고 싶을꺼에요. 조금 쉬어갈 땐 쉬어가고
              <br />
              열심히 해야할 땐 열심히 하면 됩니다. 열심히 하다보면 언젠가 라프텔에 도착할껍니다.
            </aside>
          </section>
          <section style={{ paddingTop: '0', top: '130.5px' }}>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>23살 - 창업 동아리</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>24살 - 졸업 프로젝트, 인턴</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>25살 - 인턴, 공모전</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>26살 - 졸업 프로젝트2, 취업</div>
            <div style={{ textAlign: 'right', fontSize: '22px' }}>27살 - 공모전, Mclang, Dooray 봇...</div>
            <div className="fragment" data-fragment-index="3" style={{ textAlign: 'right', fontSize: '22px' }}>
              + OSS 개발자 포럼 발표
            </div>
            <div>
              <h3 className="fragment" data-fragment-index="0">
                여기!!
              </h3>
              <img
                className="fragment"
                data-fragment-index="1"
                style={{
                  display: 'block',
                  width: '40%',
                  margin: '0 auto',
                  backgroundColor: 'rgb(34, 34, 34)',
                  border: 'none',
                  boxShadow: 'none'
                }}
                src="/img/presentation/oss/arrow.png"
              />
              <h3 className="fragment" data-fragment-index="2">
                여기를 채우는건 자신의 몫
              </h3>
            </div>
            <aside className="notes">
              여기 부분을 채우는건 여러분의 몫이에요. 다들 아시죠? 심지어 제가 지금 여러분께
              <br />
              이 발표자료를 준비해서 발표하는 것으로도 이 칸을 채울 수 있습니다.
              <br />
              조급하게 생각하지 마시고 하나하나, 대신 꾸준히 즐겨주세요.
              <br />
              <br />
              발전이 없는 개발자는 죽은거니까요.
              <br />
            </aside>
          </section>
        </section>

        <section>
          <section>
            <h1>Q&amp;A</h1>
            <div style={{ width: '100%', margin: '0 auto' }}>
              <img
                style={{ display: 'block', width: '80%', margin: '0 auto' }}
                src="/img/presentation/oss/jjal10.jpg"
              />
              <div style={{ fontSize: '15px' }}>출처 - 어드벤처 타임</div>
            </div>
          </section>
          <section>
            <h2>질문이 없을까봐 준비한 self Q1</h2>
            <br />
            <h4 style={{ color: '#42affa' }}>&lt;혼자서 개발을 어떻게 해나가야 할지 막막해요...&gt;</h4>
            <div className="fragment" style={{ fontSize: '30px' }}>
              연차가 높은 개발자. 과연 개발만 잘할까??
              <br />
            </div>
            <div className="fragment" style={{ fontSize: '30px' }}>
              ={'>'} 구글링을 해보세요. (코드카데미, 오픈튜토리얼 등등...)
              <br />={'>'} 문서를 보세요. (안나올때 물어봐도 안늦음)
            </div>
            <div className="fragment" style={{ width: '100%', margin: '0 auto' }}>
              <img
                style={{ display: 'block', width: '50%', margin: '0 auto' }}
                src="/img/presentation/oss/search1.jpg"
              />
            </div>
          </section>
          <section>
            <h2>질문이 없을까봐 준비한 self Q2</h2>
            <br />
            <div style={{ display: 'inline-block', width: '40%', margin: '0 2%', verticalAlign: 'top' }}>
              <h4 style={{ color: '#42affa' }}>
                &lt;혹시 웹 프론트엔드에 대한
                <br />
                로드맵이 있을까요?&gt;
              </h4>
              <a className="fragment" href="https://roadmap.sh/frontend" target="_blank">
                여기를 확인해주세요.
              </a>
            </div>
            <div className="fragment" style={{ display: 'inline-block', width: '40%', margin: '0 2%' }}>
              <img src="/img/presentation/oss/roadmap.jpg" />
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
