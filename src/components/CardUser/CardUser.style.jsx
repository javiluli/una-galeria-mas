import styled from 'styled-components'

const CardUserStyles = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.9) 90%
  );
  opacity: 0;
  transition: 0.2s all ease;

  :hover {
    opacity: 1;
  }
`

export { CardUserStyles }
