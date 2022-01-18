import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: var(--color-dark);
  width: 100%;
  height: 100px;


  .container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }


  .link {
    font-weight: 450;
    font-size: 1rem;
    padding: 10px;
    text-decoration: none;
    color: var(--color-cloud);
  }

  .copyright {
    position: absolute;
    font-weight: 450;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    margin-top: 10px;

    color: var(--color-light);
  }

  .icon, .icon-inverted {
    width: 36px;
    height: 36px;
  }

  .icon{
    color: var(--color-cloud)
  }

  .icon-inverted {
    width: 36px;
    height: 36px;
    color: var(--color-dark);
    background-color: var(--color-cloud);
    border-radius: 50%;
  }

`

export default StyledFooter
