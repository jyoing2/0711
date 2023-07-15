import React, { useState } from 'react';

function Header() {
  return <h1>동국대학교 멋쟁이 사자처럼 뉴우스</h1>;
}

function Section1() {
  return (
    <div>
      <h2>서희찬, 사실 멋쟁이 사자가 아니라 호랑이로 밝혀져</h2>
      <h5>모든 사자의 비난이 빗발쳐...</h5>
    </div>
  );
}

function Section2({ isFakeNews }) {
  return (
    <div style={{ backgroundColor: isFakeNews ? 'orange' : 'initial' }}>
      <h2>{isFakeNews ? '[속보] 밥준서, 상록원이 아닌 기숙사 식당에서 발견돼' : '[속보] 밥준서, 상록원에서 숨 쉰 채로 발견돼'}</h2>
      <h5>{isFakeNews ? '상록원 메뉴에 질려 서식지를 바꿨다고 전해져...' : '상록원에서 버거킹 먹다가 발견돼 모두에게 큰 충격을 안겨..'}</h5>
    </div>
  );
}

function Section3() {
  return (
    <div>
      <h2>[단독] 프론트 엔드 팀장 이상돈, 세션 시간에 안들어와</h2>
      <h5>프론트 세션 시간에 다른 트랙 세션에 들어간 팀장에 아기사자들 배신감 느껴..</h5>
    </div>
  );
}

function Section4() {
  return (
    <div>
      <h2>[심층보도] 프론트 엔드 홍일점 슬기요미, 사실 안 귀엽다?</h2>
      <h5>최근 아기사자들 사이에서 제기되고 있는 "슬기요미는 과연 기요미인가?"에 대해서 다뤄보았습니다.</h5>
    </div>
  );
}

function Button({ onClick }) {
  return <button onClick={onClick}>가짜뉴스 판독기</button>;
}

function FakeNews() {
  const [isFakeNews, setIsFakeNews] = useState(false);

  const handleButtonClick = () => {
    setIsFakeNews(true);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <Section1 />
      <hr />
      <Section2 isFakeNews={isFakeNews} />
      <hr />
      <Section3 />
      <hr />
      <Section4 />
      <hr />
      <Button onClick={handleButtonClick} />
    </>
  );
}

export default FakeNews;
