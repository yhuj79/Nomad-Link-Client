import { Section, Li, Span } from "./Population.style";

// 분야 통계 컴포넌트
function Population() {
  return (
    <Section>
      <Li>
        프론트엔드 <Span>120</Span>
      </Li>
      <Li>
        백엔드 <Span>98</Span>
      </Li>
      <Li>
        안드로이드 <Span>70</Span>
      </Li>
      <Li>
        IOS <Span>55</Span>
      </Li>
    </Section>
  );
}

export default Population;
