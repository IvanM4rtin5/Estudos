import styled, { useTheme } from "styled-components"

export const Container = styled.section`
  margin: 18px 0;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 20px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    font-weight: 400;
  }
 
`
