import styled from "styled-components";

export const CardList = styled.ul` 
display: block;
padding: 15px;
margin: 0 auto;
@media (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
}
@media (min-width: 1200px) {
    max-width: 1200px;
}
`
export const CardItem = styled.li` 
display: block;
margin: 0 auto;
margin-top: 15px;



@media (min-width: 767px) {
    max-width: 350px;

}
`