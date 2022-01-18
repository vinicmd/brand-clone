import styled from 'styled-components'

const StyledHeader = styled.header`
  .container {
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
}



.link {
  font-size: 1rem;
  padding: 10px;
  text-decoration: none;
  color: #21243D;
}
.clicked {
  font-size: 1rem;
  padding: 10px;
  text-decoration: none;
  color: #EA1D5D;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`

export default StyledHeader
