import { Button, Paper, Table } from "@material-ui/core";
import React from "react";
import styles from "./Resume.module.css";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import HomeIcon from "@material-ui/icons/Home";

function Projects() {
  const downloadResume = () => {
    window.location.href = "/images/Resume_Jiwon_Hwang.pdf";
  };

  return (
    <div className={styles.resumeWrap}>
      <h1 className={styles.resumeTitle}>Resume</h1>
      <Paper className={styles.resumePaper} varient="outlined" elevation={3}>
        <h2>풀스택 개발자를 목표로 공부하고 있습니다</h2>
        <hr />
        <img src="/images/resumePhoto.jpg" alt="Portrait" />
        <div className={styles.personalInfo}>
          <h3>황지원 | 1988년 (34세)</h3>
          <div className={styles.contact}>
            <MailOutlineIcon />
            <p>hjiwins@gmail.com</p>
            <PhoneIphoneIcon />
            <p>010-4725-2251</p>
            <HomeIcon />
            <p>인천시 연수구 송도동 (인천타워대로)</p>
          </div>
        </div>
        <div className={styles.highlights}>
          <h4>학력사항</h4>
          <h4>경력사항</h4>
          <h4>희망연봉</h4>
          <h4>희망근무지/근무형태</h4>
          <p>대학교(4년) 졸업</p>
          <p>경력 6년 9개월</p>
          <p>회사 내규에 따름</p>
          <p>인천 전체 / 정규직</p>
        </div>
        <div>
          <h2>학력</h2>
          <Table className={styles.education}>
            <thead>
              <tr>
                <th>재학기간</th>
                <th>구분</th>
                <th>학교명(소재지)</th>
                <th>전공</th>
                <th>학점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2007.03 ~ 2012.02</td>
                <td>졸업</td>
                <td>수원대학교 (경기)</td>
                <td>일본어과</td>
                <td>4.11 / 4.5</td>
              </tr>
              <tr>
                <td>2004.03 ~ 2007.02</td>
                <td>졸업</td>
                <td>인화여자고등학교 (인천시)</td>
                <td>문과계열</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="experience">
          <h2>경력</h2>
          <Table>
            <thead>
              <tr>
                <th>근무기간</th>
                <th>회사명</th>
                <th>부서/직급/직책</th>
                <th>지역/직종</th>
                <th>연봉</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2016.01 ~ 2019.12</td>
                <td>세일인텍</td>
                <td>무역 및 해외업무 / 대리 / 3년차</td>
                <td>인천</td>
                <td>3,700만원</td>
              </tr>
              <tr>
                <td>2014.05 ~ 2015.05</td>
                <td>Yoghurt Story Southcity Ltd.</td>
                <td>매니저</td>
                <td>뉴질랜드</td>
                <td>3,000만원</td>
              </tr>
              <tr>
                <td>2013.03 ~ 2014.04</td>
                <td>TUV-NORD Korea</td>
                <td>제품인증부 / 사원 / 2년차</td>
                <td>서울</td>
                <td>2,600만원</td>
              </tr>
              <tr>
                <td>2012.10 ~ 2013.03</td>
                <td>국제인증</td>
                <td>사원 / 1년차</td>
                <td>경기</td>
                <td>2,000만원</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="certificate">
          <h2>자격증</h2>
          <Table>
            <thead>
              <tr>
                <th>취득일</th>
                <th>구분</th>
                <th>자격/어학명</th>
                <th>발행처</th>
                <th>합격/점수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2011.08</td>
                <td>면허증</td>
                <td>2종 보통 운전면허</td>
                <td>경찰청</td>
                <td>합격</td>
              </tr>
              <tr>
                <td>2011.12</td>
                <td>어학시험</td>
                <td>TOEIC</td>
                <td>영어</td>
                <td>795점</td>
              </tr>
              <tr>
                <td>2012.08</td>
                <td>어학시험</td>
                <td>JLPT N1</td>
                <td>일본어</td>
                <td>1급 합격</td>
              </tr>
              <tr>
                <td>2017.09</td>
                <td>자격증</td>
                <td>국제무역사 2급</td>
                <td>한국무역협회</td>
                <td>합격</td>
              </tr>
              <tr>
                <td>2021.04</td>
                <td>자격증</td>
                <td>GTQ 포토샵 1급</td>
                <td>한국생산성본부(KPC)</td>
                <td>합격</td>
              </tr>
              <tr>
                <td>2021.05</td>
                <td>자격증</td>
                <td>웹디자인 기능사</td>
                <td>한국산업인력공단</td>
                <td>필기합격</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h2>취업우대사항</h2>
          <Table>
            <thead>
              <tr>
                <th>고용지원금대상</th>
                <td>청년취업대상자 (취업지원프로그램 이수)</td>
              </tr>
            </thead>
          </Table>
        </div>
        <div className={styles.buttonWrap}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={downloadResume}
          >
            Download Resume
          </Button>
          <Button
            href="mailto:hjiwins@gmail.com"
            variant="contained"
            color="secondary"
            size="large"
          >
            Contact
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Projects;
