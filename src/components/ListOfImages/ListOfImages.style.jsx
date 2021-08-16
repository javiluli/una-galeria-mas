import styled from 'styled-components'
import Masonry from 'react-masonry-css'

const MasonryStyles = styled(Masonry)`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
  min-height: 100vh;

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: hsl(0, 0%, 50%);
    margin-bottom: 30px;
    opacity: 0;
    transform: scale(0.7);
    animation: load_masonry_element 0.3s ease-in-out 0.5s forwards;
  }

  @keyframes load_masonry_element {
    0% {
      opacity: 0;
    }

    55% {
      opacity: 1;
      transform: scale(1.05);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export { MasonryStyles }
