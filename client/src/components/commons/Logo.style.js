import styled from "styled-components";
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
  text-decoration: none;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.textIndex};
  text-shadow: 1px 1px 1px gray;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  letter-spacing: -1px;
  transition: all 0.5s;

  &:hover {
    color: #4641d9;
  }
`;
