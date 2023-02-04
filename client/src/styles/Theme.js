// 다크모드 스타일
// css에서 형식 ${({ theme }) => theme.이름}; 으로 작용

export const lightTheme = {
  bgIndex: "#fff",
  bgHeader: "#fff",
  bgFooter: "#E7E7E7",
  bgSection: "#E7E7E7",
  bgForm: "#E7E7E7",
  bgUnit: "#fff",
  bgProfile: "#EDEDED",
  bgProfileHover: "#333",
  textIndex: "#000",
  textIndexHover: "#D4D4D4",
  textOpacity: "rgba(0, 0, 0, 0.2)",
  textSection: "#000",
  border: "#D9D9D9",
  bgButton: "#DBDBDB",
  bgTable: "#DBDBDB",
};

export const darkTheme = {
  bgIndex: "#1E1E20",
  bgHeader: "#252528",
  bgFooter: "#252528",
  bgSection: "#949494",
  bgForm: "#333",
  bgUnit: "#D4D4D4",
  bgProfile: "#333",
  bgProfileHover: "#EDEDED",
  textIndex: "#D4D4D4",
  textIndexHover: "#000",
  textOpacity: "rgba(212, 212, 212, 0.2)",
  textSection: "#121212",
  border: "#626262",
  bgButton: "#C9C9C9",
  bgTable: "#8D8D8D",
};

export const theme = {
  lightTheme,
  darkTheme,
};
