  import styled from "styled-components";
  import SearchIcon from "@mui/icons-material/Search";
  import MenuListIcon from "@mui/icons-material/Menu";
  import PersonIcon from "@mui/icons-material/Person";
  import ApartmentIcon from "@mui/icons-material/Apartment";
  import { Link } from "react-router-dom";
  import { media } from "../../style/GlobalStyles";

  function Header() {
    return (
      <HeaderDiv>
        <BoxOne>
          <DivLeft>
            <SLink to={"/"}>
              <Logo>Nomad Link</Logo>
            </SLink>
          </DivLeft>
          <DivRight>
            <DivSearch>
              <Search />
              <SearchIcon sx={muiSearchIcon} />
            </DivSearch>
            <Login>로그인</Login>
            <Register>회원가입</Register>
          </DivRight>
        </BoxOne>
        <BoxTwo>
          <DivLeft>
            <Menu>
              <MenuListIcon sx={muiMenuIcon} />
              <MenuIcon>채용</MenuIcon>
              <MenuIcon>직무 인터뷰</MenuIcon>
              <MenuIcon>이력서</MenuIcon>
              <MenuIcon>커뮤니티</MenuIcon>
              <MenuIcon>이벤트</MenuIcon>
            </Menu>
          </DivLeft>
          <DivRight>
            <SLink to={"/"} style={{ display: "flex" }}>
              <PersonIcon sx={muiServiceIcon} />
              <MenuIcon>개인 서비스</MenuIcon>
            </SLink>
            <SLink to={"/recruit"} style={{ display: "flex" }}>
              <ApartmentIcon sx={muiServiceIcon} />
              <MenuIcon>기업 서비스</MenuIcon>
            </SLink>
          </DivRight>
        </BoxTwo>
        <BoxMobile>
          <SLink to={"/"}>
            <MenuListIcon sx={muiMobileIcon} />
          </SLink>
          <SLink to={"/"}>
            <PersonIcon sx={muiMobileIcon} />
          </SLink>
          <SLink to={"/recruit"}>
            <ApartmentIcon sx={muiMobileIcon} />
          </SLink>
        </BoxMobile>
      </HeaderDiv>
    );
  }
  const HeaderDiv = styled.header`
    width: 1000px;
    justify-content: center;
    margin: auto;

    ${media.lessThan("tablet")`
      width: 700px;
    `}
    ${media.lessThan("mobile")`
      width: 270px;
    `}
  `;
  const BoxOne = styled.div`
    display: flex;

    ${media.lessThan("mobile")`
      display: inline-block;
    `}
  `;
  const BoxTwo = styled(BoxOne)`
    ${media.lessThan("mobile")`
      display: none;
    `}
  `;
  const BoxMobile = styled(BoxOne)`
    display: none;

    ${media.lessThan("mobile")`
      display: flex;
      justify-content: center;
      margin: auto;
    `}
  `;
  const DivLeft = styled.div`
    display: flex;
    align-items: center;
    float: left;
    margin: 20px auto 20px 0;
    padding: 0;
  `;
  const DivRight = styled.div`
    display: flex;
    align-items: center;
    float: right;
    margin: 20px 0 20px auto;
  `;
  const Logo = styled.h1`
    color: #000;
    font-size: 45px;
    font-weight: bold;
    letter-spacing: -1px;
    margin-left: 10px;

    ${media.lessThan("mobile")`
      font-size: 35px;
      margin-bottom: -10px;
    `}
  `;
  const DivSearch = styled.div`
    position: relative;
  `
  const Search = styled.input`
    width: 200px;
    height: 25px;
    margin-right: 10px;
    padding-left: 10px;
    background-color: #d9d9d9;
    border-radius: 20px;
    border: 1px solid #d5d5d5;

    ${media.lessThan("mobile")`
      width: 70px;
    `}
  `;
  const muiSearchIcon = {
    position: "absolute",
    zIndex: "1000",
    marginTop: "3px",
    marginLeft: "-38px",
    fontSize: "22px",
    opacity: "0.7"
  }
  const Login = styled.button`
    width: 70px;
    height: 30px;
    margin-right: 10px;
    background-color: #000;
    border-radius: 20px;
    border: 1px solid #fff;
    color: white;
  `;
  const Register = styled.button`
    width: 70px;
    height: 30px;
    margin-right: 15px;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #000;
  `;
  const Menu = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 0;
  `;
  const muiMenuIcon = {
    margin: "auto 10px",
    fontSize: "30px",
  };
  const muiServiceIcon = {
    color: "#000",
    marginLeft: "15px",
    marginRight: "-5px",
    fontSize: "30px",
  };
  const muiMobileIcon = {
    color: "#000",
    marginLeft: "-5px",
    marginRight: "15px",
    fontSize: "30px",
  };
  const MenuIcon = styled.li`
    list-style: none;
    margin: auto 10px;
    font-size: 20px;
    color: #000;

    ${media.lessThan("tablet")`
      font-size: 15px;
    `}
  `;
  const SLink = styled(Link)`
    text-decoration: none;

    ${media.lessThan("tablet")`
      margin-left: 30px;
    `}
  `;
  export default Header;
