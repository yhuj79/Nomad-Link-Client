// Reducer 초기 상태
export const initialState = {
  nation: null,
  role: null,
  employeeType: null,
  searchParams: null, // => techStack
  techStack: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    // 개발자 리스트 state params
    case `SetInputDev`:
      return {
        ...state,
        nation: action.nation,
        employeeType: action.employeeType,
        searchParams: action.searchParams,
      };
    // 기업 리스트 state params
    case `SetInputEnt`:
      return {
        ...state,
        role: action.role,
        employeeType: action.employeeType,
      };
    // 삭제, 초기화
    case `Delete`:
      return initialState;
    // 기술 스택 state 저장
    case `SaveStack`:
      return { ...state, techStack: [...state.techStack, action.item] };
    // 기술 스택 state 삭제
    case `DelStack`:
      const indexB = state.techStack.findIndex(
        (techStackItem) => techStackItem === action.item
      );
      let newtechStack = [...state.techStack];
      newtechStack.splice(indexB, 1);
      return {
        ...state,
        techStack: newtechStack,
      };
    // state의 기술 스택 state 모두 삭제
    case `DelStackAll`:
      return { ...state, techStack: [] };
    default:
      return state;
  }
};
export default reducer;
