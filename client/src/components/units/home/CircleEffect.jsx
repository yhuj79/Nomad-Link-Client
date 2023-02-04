import { Section, Circle } from "./CircleEffect.style";

function CircleEffect() {
  return (
    <Section>
      <div>
        <h1>Nomad Link에 오신 것을 환영합니다</h1>
        <h3>재택 근무와 기업 간의 원활한 매칭을 도와드립니다</h3>
      </div>
      <Circle>
        <li className="blue"></li>
        <li className="red"></li>
        <li className="green"></li>
        <li className="yellow"></li>
        <li className="sky"></li>
        <li className="red"></li>
        <li className="green"></li>
        <li className="pink"></li>
        <li className="darksky"></li>
        <li className="red"></li>
        <li className="green"></li>
        <li className="yellow"></li>
        <li className="lightgreen"></li>
        <li className="sky"></li>
        <li className="darksky"></li>
        <li className="lightgreen"></li>
        <li className="yellow"></li>
        <li className="sky"></li>
        <li className="blue"></li>
        <li className="green"></li>
      </Circle>
    </Section>
  );
}

export default CircleEffect;
