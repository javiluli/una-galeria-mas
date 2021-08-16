import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const MainNavbarStyles = styled.div`
  width: 100%;
  height: 25em;
  display: block;
  background-image: url('https://source.unsplash.com/random/1920x1080');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`

const FormStyles = styled.form`
  position: relative;
`

const InputStyles = styled.input`
  background-color: transparent;
  backdrop-filter: blur(0px);
  transition: 0.3s all ease;

  :focus {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
  }
  ::placeholder {
    color: hsl(210, 17%, 98%);
  }
`
const IconSearchStyles = styled(FaSearch)`
  position: absolute;
  font-size: 1.25rem;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`

export { MainNavbarStyles, FormStyles, InputStyles, IconSearchStyles }
