import { Link } from 'wouter'
import styled from 'styled-components'

const ItemListLinkTopicStyles = styled(Link)`
  color: hsl(0, 0%, 0%);
  font-size: 0.8rem;
  transition: 0.2s all ease;
  border-radius: 50px;

  :hover {
    background-color: hsl(220, 11%, 15%);
    color: hsl(0, 0%, 100%);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`

export { ItemListLinkTopicStyles }
