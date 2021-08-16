import styled from 'styled-components'

const SpinnerStyles = styled.div`
  border: 4px solid hsla(0, 0%, 0%, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: hsl(204, 100%, 50%);
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export { SpinnerStyles }
