import { SLink, Title } from "./Logo.style";

// Nomad Link 로고
function Logo({ fontSize }) {
  return (
    <SLink to={"/"}>
      <Title fontSize={fontSize}>Nomad Link</Title>
    </SLink>
  );
}

export default Logo;
