import { MainWide } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import BannerSlim from "components/commons/BannerSlim";
import Information from "components/units/enterprises/Information";
import BannerFat from "components/commons/BannerFat";

// 기업 서비스 메인 페이지
function Enterprise() {
  return (
    <MainWide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"기업 서비스 : "} />
      <BannerSlim
        bgColor={"#B2EBF4"}
        lineOne={
          "개발자 대리 구인 폼을 작성해 보세요. 적합한 개발자를 선별하여 매칭시켜 드립니다."
        }
        button={">> 폼 작성하기"}
        link={"enterprise/recruit/form"}
      />
      <Information />
      <BannerFat
        bgColor={"#D9E5FF"}
        textAlign={"right"}
        height={"280px"}
        color={"#030066"}
        lineOne={"구인 폼 작성"}
        lineThree={"빠른 해외 개발자 채용을 지원해드립니다."}
        button={true}
        buttonName={"바로가기"}
        link={"enterprise/recruit/form"}
      />
      <BannerFat
        bgColor={"#DAD9FF"}
        textAlign={"left"}
        height={"280px"}
        color={"#030066"}
        lineOne={"개발자 리스트"}
        lineThree={"이력서를 작성한 개발자 내역을 확인할 수 있습니다."}
        button={true}
        buttonName={"바로가기"}
        link={"enterprise/recruit/developers"}
      />
      <BannerFat
        bgColor={"#E8D9FF"}
        textAlign={"right"}
        height={"240px"}
        color={"#001054"}
        lineOne={"메타버스 사무실"}
        button={true}
        buttonName={"바로가기"}
        link={""}
      />
    </MainWide>
  );
}

export default Enterprise;
