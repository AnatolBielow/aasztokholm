import styled from "styled-components";
import { theme } from "../../Helpers";

export const CardContainer = styled.div` 
max-width: 400px;
height: 250px;
margin: 0 auto;
padding: 15px;
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.7); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
`
export const HeaderWrapper = styled.div` 
display: flex ;
align-items: center;
`
export const IconContainer = styled.div` 
display: flex;
width: 80px;
height: 80px;
border-radius: 10px;
align-items: center;
justify-content: center;
color: ${theme.primaryBackground};
background-color: ${theme.accent};
&:hover, &:focus {
    background-color:${theme.accent2}
}
`
export const Title = styled.h3` 

text-transform: uppercase;
font-size: 1.5rem;
font-weight: 700;
margin-left: 20px;

color:${theme.primaryText};
`

export const Content = styled.p` 
margin-top: 15px;
font-size: 1.1rem;
letter-spacing: 0.05rem;
line-height: 1.5rem;
text-align: center;
color: #202020;
`

