import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 72%;

  margin: 0 auto;
  padding: 2.5rem;

  background: ${(props) => props.theme.background};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`
