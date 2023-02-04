import { Main } from "styles/Pages";

// Page의 접근성을 관리하기 위해 만든 로직
function Access({ message, replace }) {
  if (message === null) {
    window.location.replace(`/${replace}`);
  } else {
    alert(message);
  }

  window.location.replace(`/${replace}`);

  return (
    <Main>
      <h1 style={{margin: "200px"}}>Loading ...</h1>
    </Main>
  );
}

export default Access;
