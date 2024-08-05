import styled from 'styled-components';

export const CardGridContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  > div {
    width: calc(50% - 43px);

    @media (max-width: 600px) {
      width: 100%;
    }
  }

`;