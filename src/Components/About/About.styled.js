import styled from "styled-components";

export const SectionStyled = styled.section` 
padding: 15px;
@media (min-width:1200px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 25px;
}
`
 export const ContentWrapper = styled.div` 
 @media (min-width: 1200px) {
  width: calc(100vw/2 - 50px);   
 }
 
 `
export const Title = styled.h2` 
text-align: center;
font-size: 2rem;
font-weight: 700;
`

export const SecondTitle = styled.h3` 
margin-top: 20px;
text-transform: uppercase;
font-weight: 700;
font-size: 1.2rem;
`

export const Content = styled.p` 
margin-top: 15px;
font-size: 1.1rem;
letter-spacing: 0.05rem;
text-align: justify;
line-height: 2rem;
`


export const ImageContainer = styled.div`
  width: 100% ;
  @media (min-width: 1200px) {
    display: block;
    width: calc(100vw/2 - 50px);
    height: auto;
   
  }


`