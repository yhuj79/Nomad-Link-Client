import { Section, Div, Title, InforImage } from "./Information.style";
import EnterpriseInformation from "assets/EnterpriseInformation.png";

// 기업 서비스 메인 타이틀 컴포넌트
function Information() {
  return (
    <Section bgColor={"#1F469A"}>
      <Div>
          <Title>
            <h1 className="title-one">해외 개발자 채용</h1>
            <h1 className="title-two">쉽고 편리하게</h1>
            <h1 className="title-thr">Nomad-Link가 도와드립니다</h1>
          </Title>
          <InforImage alt="" src={EnterpriseInformation} />
      </Div>
    </Section>
  );
}

export default Information;
