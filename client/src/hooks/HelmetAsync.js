import { Helmet } from "react-helmet-async";

// react-helmet-async를 통해 동적으로 메타데이터(페이지 제목)를 변경
function HelmetAsync({title}) {
  return (
    <Helmet>
      <title>{title}Nomad Link</title>
    </Helmet>
  );
}

export default HelmetAsync;
