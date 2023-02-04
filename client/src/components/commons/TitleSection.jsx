import { Section } from "./TitleSection.style";

// 컨텐츠에 일정 공간을 차지하는 텍스트를 띄우는 컴포넌트
function TitleSection({ padding, largeOne, largeTwo, mediumOne, mediumTwo, smallOne, smallTwo }) {
  return (
    <Section padding={padding}>
      <h1>{largeOne}</h1>
      <h1>{largeTwo}</h1>
      <br />
      <h2>{mediumOne}</h2>
      <h2>{mediumTwo}</h2>
      <br />
      <p>{smallOne}</p>
      <p>{smallTwo}</p>
    </Section>
  );
}

export default TitleSection;
