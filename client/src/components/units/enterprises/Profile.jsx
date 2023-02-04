import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Div,
  ProfileImage,
  EntName,
  Title,
  TechNameDiv,
  TechName,
} from "./Profile.style";

// 기업 리스트 프로필 컴포넌트
// List에서 DB에 있는 개수만큼 map으로 반복되어 렌더링
function Profile({
  id,
  enterpriseName,
  title,
  techStacks,
  enterpriseLocation,
  annual,
}) {
  const navigate = useNavigate();

  // 프로필 width를 넘어가는 제목의 경우 이상 부분을 "..." 으로 줄여서 처리하는 함수
  const [limit, setLimit] = useState(25); // eslint-disable-line no-unused-vars
  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  function Annual() {
    if (annual === "ZEROTOONE") {
      return "0-1년";
    } else if (annual === "TWOTOFOUR") {
      return "2-4년";
    } else if (annual === "FIVETOSEVEN") {
      return "5-7년";
    } else if (annual === "EIGHTTOTEN") {
      return "8-10년";
    } else if (annual === "MORETHANTEN") {
      return "10년 이상";
    } else {
      return "-";
    }
  }

  // 기업 샘플 이미지 랜덤 생성
  const randNum = Math.floor(Math.random() * 15) + 1;

  return (
    <Div onClick={() => navigate(`/notice/${id}`)}>
      <ProfileImage
        alt=""
        src={require(`../../../assets/EnterpriseSample${randNum}.jpg`)}
      />
      <EntName>{enterpriseName}</EntName>
      <Title>
        {toggleEllipsis(title, limit).string}
        {toggleEllipsis(title, limit).isShowMore && <span>...</span>}
      </Title>
      <TechNameDiv>
        <TechName>{techStacks[0].techName}</TechName>
        <TechName>{techStacks[1].techName}</TechName>
        <TechName>{techStacks[2].techName}</TechName>
      </TechNameDiv>
      <p>
        {enterpriseLocation} · 연차 {Annual()}
      </p>
    </Div>
  );
}

export default Profile;
