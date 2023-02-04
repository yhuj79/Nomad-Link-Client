import { post } from "axios";
import Logo from "./Logo";
import { useCookies } from "react-cookie";
import { TbSearch } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { ButtonMini } from "styles/Button";
import {
  ResHeader,
  HeaderDiv,
  Box,
  DivLeft,
  DivRight,
  SLink,
  SearchBox,
  Search,
  Menu,
  MenuIcon,
} from "./Header.style";
import Tooltip from "./Tooltip";

// 웹 Header
function Header({ mode }) {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars

  // 로그아웃 함수
  async function Logout() {
    const url = "/api/logout";

    try {
      const response = await post(url); // eslint-disable-line no-unused-vars
      if (cookies.id) {
        // 바로 요청을 하면 로그아웃 상태가 되지 않는 오류가 있어서 setTimeout을 주어서 removeCookie 실행
        setTimeout(removeCookie("id", { path: "/" }), 1);
      }
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ResHeader>
      <HeaderDiv>
        <Box>
          <DivLeft>
            <Logo fontSize={"45px"} />
          </DivLeft>
          <DivRight>
            <SearchBox>
              <Search placeholder="검색어를 입력하세요." />
              <TbSearch className="react-search-icon" />
            </SearchBox>
            {cookies.id ? (
              <Box>
                <Tooltip userId={cookies.id} />
                <ButtonMini onClick={() => Logout()}>로그아웃</ButtonMini>
              </Box>
            ) : (
              <Box>
                <SLink to={"/login"}>
                  <ButtonMini>로그인</ButtonMini>
                </SLink>
                <SLink to={"/register"}>
                  <ButtonMini>회원가입</ButtonMini>
                </SLink>
              </Box>
            )}
          </DivRight>
        </Box>
        <Box>
          <DivLeft>
            <Menu>
              <MenuIcon>
                <FiMenu className="react-icon" />
              </MenuIcon>
              <MenuIcon>채용</MenuIcon>
              <MenuIcon>직무 인터뷰</MenuIcon>
              <MenuIcon>뉴스</MenuIcon>
              <MenuIcon>커뮤니티</MenuIcon>
              <MenuIcon>이벤트</MenuIcon>
            </Menu>
          </DivLeft>
          <DivRight>
            <SLink to={"/private"}>
              <MenuIcon>
                <IoPersonSharp className="react-icon" />
                개인 서비스
              </MenuIcon>
            </SLink>
            <SLink to={"/enterprise"}>
              <MenuIcon>
                <FaBuilding className="react-icon" />
                기업 서비스
              </MenuIcon>
            </SLink>
          </DivRight>
        </Box>
      </HeaderDiv>
    </ResHeader>
  );
}
export default Header;
