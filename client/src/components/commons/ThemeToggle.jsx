import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { Button } from "./ThemeToggle.style";

// 다크모드 토글 버튼 (상시 화면 우측 하단에 고정)
function ThemeToggle({ toggle, mode }) {
  return (
    <Button onClick={toggle} mode={mode}>
      {mode === "dark" ? <span>라이트 모드 </span> : <span>다크 모드 </span>}
      {mode === "dark" ? (
        <MdLightMode className="react-mode-icon" />
      ) : (
        <MdModeNight className="react-mode-icon" />
      )}
    </Button>
  );
}
export default ThemeToggle;
