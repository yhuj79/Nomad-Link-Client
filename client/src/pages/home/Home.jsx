import { MainWide } from "styles/Pages";
import { useTheme } from "store/ThemeProvider";
import HelmetAsync from "hooks/HelmetAsync";
import BannerFat from "components/commons/BannerFat";
import CircleEffect from "components/units/home/CircleEffect";

// 메인 페이지
function Home({mode}) {
  const [ThemeMode] = useTheme();

  return (
    <MainWide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={""} />
      <CircleEffect />
      <BannerFat
        bgColor={ThemeMode === "dark" ? "#AAAAAA" : "#F4F2F0"}
        textAlign={"left"}
        height={"300px"}
        color={"#030066"}
        lineOne={"개인 서비스"}
        lineThree={"Nomad Link로 원하는 IT 기업에 지원"}
        lineFour={"해외 개발자의 적응을 돕기 위한 서비스 제공"}
        button={true}
        buttonName={"바로가기"}
        link={"private"}
      />
      <BannerFat
        bgColor={ThemeMode === "dark" ? "#989898" : "#F1ECE6"}
        textAlign={"right"}
        height={"300px"}
        color={"#001054"}
        lineOne={"기업 서비스"}
        lineThree={"Nomad Link를 통해 개발자를 직접 구인"}
        lineFour={"기업과 개발자 간 협업을 위한 메타버스 원격 사무실 제공"}
        button={true}
        buttonName={"바로가기"}
        link={"enterprise"}
      />
    </MainWide>
  );
}

export default Home;
