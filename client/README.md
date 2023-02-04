## :open_file_folder: 프론트엔드 개요

* Nomad Link 프로젝트 프론트엔드
* 반응형 디자인이 아닌 react-device-detect를 통해 PC와 Mobile 구분
* CRUD 구현
  * Rest API 방식으로, DB에서 개발자 리스트, 기업 리스트 등 조회
* 로그인
  * react-cookie를 사용하여 유저 정보를 관리
  * 유효성 검사하여 에러 메시지를 출력
* 상태 관리
  * Reducer
    * Context Api
    * 리스트의 select로 특정 조건 검색을 할 경우 값을 dispatch하여 parameter 역할을 수행
    * 이력서 기술 스택을 넣을 때 dispatch / 이미 저장된 기술 스택을 DB에서 불러올 때도 사용
    * 다른 리스트에 state가 공유되는 문제를 방지하기 위해 action하기 전에 먼저 초기화
  * 다크모드 (ThemeProvider)
    * Context Api
    * lightTheme, darkTheme로 나누어 전역에서 styles/theme의 값을 사용할 수 있음
* Routes
  * /
    * Nomad Link 메인 페이지
  * /login
    * 로그인 페이지
  * /register
    * 회원가입 페이지
    * /register/complete
      * 회원가입 성공 페이지
  * /enterprise
    * 기업 서비스 메인
    * /enterprise/recruit/form
      * 기업 서비스의 폼 작성 페이지
    * /enterprise/recruit/complete
      * 폼 작성 후 완료 페이지
    * /enterprise/recruit/developers
      * 기업 서비스에서 개발자 목록을 보여주는 페이지
  * /private
    * 개인 서비스 메인
    * /private/employ/enterprises
      * 개인 서비스에서 회사 목록을 보여주는 페이지
  * /notice/${id}
    * 채용 공고 상세 페이지
  * /mypage
    * 마이페이지 (지원현황)
    * /mypage/resume
      * 이력서 페이지
    * /mypage/resume/save
      * 이력서 저장 페이지
    * /mypage/resume/update
      * 이력서 수정 페이지


## :link: Client 디렉터리 구조

* assets
  * 프로젝트의 사진 파일
* components
  * commons
    * 전역에서 재사용되는 컴포넌트
  * units
    * 각 페이지에서 사용되는 컴포넌트
* hooks
  * 재사용되는 로직이 있는 디렉터리
* pages
  * 라우팅되는 페이지 컴포넌트
* store
  * Reducer, 다크모드 로직이 있는 디렉터리
* styles
  * GlobalStyle과 기타 재사용되는 스타일 보관

## :clipboard: Client 주요 사용 패키지

* styled-components
  * ~.style.js 파일로 스타일 처리
* react-device-detect
  * 웹 / 모바일을 감지하여 따로 구성함. 모바일은 추후 앱 구축을 계획하고 구성
* styled-reset
  * Css 초기 세팅을 위해 사용
* react-icons
  * 아이콘 사용
* axios
  * CRUD (Rest API)
* http-proxy-middleware
  * 서버와 Proxy 연결하기 위해 사용
* react-hook-form
  * 폼 라이브러리
* react-slick, slick-carousel
  * 슬라이드 라이브러리
* react-cookie
  * cookie에 세션 id를 담기 위해 사용
* framer-motion
  * 페이지 전환 애니메이션 간편화
* react-helmet
  * 동적으로 메타데이터(페이지 제목)를 변경
* react-tooltip
  * 로그인 시 툴팁 박스
* react-reveal
  * 스크롤 애니메이션

## :book: 참조

* http-proxy-middleware
  * https://velog.io/@u-nij/Spring-Boot-React.js-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85
  * https://devlog-wjdrbs96.tistory.com/429
* Login Cookie
  * https://jrepository.tistory.com/m/65
* ThemeProvider
  * https://blog.woolta.com/categories/1/posts/199
  * https://gparkkii.github.io/React/Darkmode/
* Styled-Components
  * https://bogmong.tistory.com/7
  * https://www.daleseo.com/react-styled-components/
  * https://sangjuntech.tistory.com/11
* Search Field
  * https://ososoi.tistory.com/455
* React-Device-Detect
  * https://velog.io/@devpark/React-%EC%9E%85%EB%AC%B85-react-device-detect-Crossing-Platform-Library-by-React.js-update-2020.12.21
  * https://leftday.tistory.com/40
* Axios
  * https://ayoteralab.tistory.com/entry/Vuejs-09-use-axios-get-params-%EC%B6%94%EA%B0%80
  * https://joonfluence.tistory.com/483
  * https://britny-no.tistory.com/32