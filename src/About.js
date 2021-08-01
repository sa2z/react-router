import React from "react";
import qs from "qs";
function About({ location }) {
  // console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 쿼리 시 앞에 붙는 물음표 제거
  });
  const detail = query.detail === "ture"; //문자열자체로 비교
  parseInt(query.id, 10); // 문자열을 숫자형으로 변환 필요 시
  // console.log(query);
  return (
    <div>
      <h1> Introduce </h1>
      <p>This project is about practice for the basic router</p>
      {detail && <p> detail value is 'true' </p>}
    </div>
  );
}

export default About;
