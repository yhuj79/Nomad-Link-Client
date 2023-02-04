import { useNavigate } from "react-router-dom";
import {
  Div,
  ProfileImage,
  BoxFlex,
  EntName,
  Title,
} from "./ApplyProfile.style";

// 마이페이지 지원 내역 기업 프로필 컴포넌트
// List에서 DB에 있는 개수만큼 map으로 반복되어 렌더링
function ApplyProfile({ id, enterpriseName, title, enterpriseLocation }) {
  const navigate = useNavigate();

  // 기업 샘플 이미지 랜덤 생성
  const randNum = Math.floor(Math.random() * 15) + 1;

  return (
    <Div onClick={() => navigate(`/notice/${id}`)}>
      <ProfileImage
        alt=""
        src={require(`../../../assets/EnterpriseSample${randNum}.jpg`)}
      />
      <BoxFlex>
        <div>
          <EntName>{enterpriseName}</EntName>
          <Title>{title}</Title>
          <p>{enterpriseLocation}</p>
        </div>
      </BoxFlex>
    </Div>
  );
}

export default ApplyProfile;
