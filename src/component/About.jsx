import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutWrap}>
      <h1 className={styles.aboutTitle}>About JIWON</h1>
      <img
        src="/images/little-jiwon.jpg"
        className={styles.imgYoung}
        alt="Little Jiwon"
      />
      <p>
        저는 미술을 전공하셨던 어머니를 따라 어릴 때부터 그림 그리기를 좋아하고
        새로운 것을 배우기 좋아하는 아이였습니다. 그래서 미술을 전공하려고
        했지만 학원비 부담에 그만두게 되었고 대신 다음으로 관심 있었던 일본어를
        전공하게 되었습니다. 당시에는 일본어를 배우는 것이 너무 재미있었고,
        혼자서 미리 공부했었기 때문에 대학에서도 다른 사람들 보다 앞서나갈 수
        있었습니다. 그 덕분에 교수님의 인정을 받아 2학년 때 교환학생으로 일본에
        갔다가 학교나 다른 사람의 도움 없이도 일본에서 혼자 살 수 있을지 저
        자신을 시험해 보고 싶어서 워킹홀리데이로 1년 동안 일본에서 살기도
        했습니다. 이때 일본뿐만 아니라 스페인, 호주, 미국, 인도네시아 등에서 온
        다양한 친구들을 많이 사귀게 되었고, 세계에서 소통하기 위해서는 영어도
        배워야겠다는 생각을 가지고 한국으로 돌아와 영어 공부를 시작했습니다.
      </p>
      <br />
      <p>
        영어 공부를 시작하고 나서 다양한 나라의 사람들과 만나서 커뮤니케이션하는
        것이 즐거웠고, 우연히 대학 내일 잡지에서 발견한 IT 봉사단 공고를 보고
        팀을 만들어 페루에 봉사활동을 가기도 했습니다. 정부 기관에서 주최하는
        봉사활동이어서 기준이 엄격하고 중간에 해산하는 팀들도 있었지만 저희 팀은
        화기애애한 분위기로 한 번의 충돌도 없이 봉사활동을 마치고 아직도
        연락하며 좋은 관계로 지내고 있습니다.
      </p>
      <br />
      <img
        src="/images/machupicchu2.jpeg"
        className={styles.imgMachu}
        alt="Machu Picchu"
      />
      <p>
        대학 졸업 후에는 영어와 일본어 관련 업무로 취업하여 회사에 다니다가 좋은
        기회를 얻어 뉴질랜드에서 카페 매니저로 근무하기도 했습니다. 항상
        피고용인의 입장으로 일하다가 카페를 대표하여 모든 것을 관리하고, 직원을
        고용하고 교육하는 일을 하면서 다양한 관점에서 업무를 이해하는 것을
        배웠습니다. 외국인으로서 현지인을 고용해서 일하면서 문화 차이나 세대
        차이도 있었지만 최대한 팀을 조화롭고 편안하게 꾸려가는 것에 신경을 많이
        썼습니다. 그 덕분에 시간제 직원들이 한번 들어오면 금방 그만두는 일 없이
        오래 근무하는 편이었습니다.
      </p>
      <br />
      <p>
        뉴질랜드에서 돌아온 후 통역, 번역 및 수출입 담당으로 안정적인 일자리를
        갖게 되었지만 어느새 제자리에서 안주하며 머물러 있는 자신을 발견하게
        되었고, 평생 진심으로 즐겁게 할 수 있는 일이 없을까 고민하게 되었습니다.
        지금까지 저는 어떤 프로젝트에서 사람과 사람을 연결해 주는 다리 같은
        역할이었고, 실제로 그 프로젝트 속에서 아이디어를 내고 뭔가 만들 수 있는
        역할은 아니었습니다. 그런데 웹 개발 공부를 시작하고부터 제가 상상한
        무엇인가가 화면에 실제로 만들어진다는 게 너무 기분 좋았고, 어려울 때도
        있지만 그 어려운 부분을 해결해 냈을 때의 성취감은 지금까지 느껴본 적
        없는 기분이었습니다.
      </p>
      <br />
      <p>
        웹 개발을 배운지는 아직 얼마 되지 않았지만, 저는 빨리 배우고 누구보다도
        의욕적으로 해나갈 자신이 있습니다. 다양한 회사 경험을 바탕으로 새로운
        회사에서도 잘 적응하고 동료들과 소통하며 능동적으로 일을 처리할 수 있고
        빨리 배우고자 하는 자세를 가지고 있습니다. 혼자서 기초 HTML, CSS,
        JavaScript를 공부했고 지금은 React, React Native, Typescript를 공부하고
        있습니다. 일본어를 직접 일본에 가서 사용하면서 많이 향상시킨 것처럼 웹
        개발도 현장에서 부딪히며 배우고 성장하고 싶습니다.
      </p>
      <div className={styles.imageWrap}>
        <div className={styles.imageFrame}>
          <img
            src="/images/kiwi.jpeg"
            className={styles.otherimages}
            alt="New Zealand"
          />
          <img
            src="/images/atwork.jpg"
            className={styles.otherimages}
            alt="At previous job"
          />
          <img
            src="/images/peru.jpeg"
            className={styles.otherimages}
            alt="Volunteer in Peru"
          />
          <img
            src="/images/atparty.jpg"
            className={styles.otherimages}
            alt="good friends"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
