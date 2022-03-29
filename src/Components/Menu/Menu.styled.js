import styled from "styled-components"
import { theme } from "../../Helpers"

export const MenuWrapper = styled.div` 
@media (min-width: 1200px) {
   margin-left: auto;
}
`

export const Navigation = styled.nav` 
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
width: 80vw;
background-color: ${theme.primaryBackground};
position: fixed;
top: 0;
right: 0;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s ease-in-out;
@media (min-width: 1200px) {
   flex-direction: row;
   position: static;
height: auto; 
width: auto;
transform: none;

background-color: transparent;
}
`
export const Overlay = styled.div` 
width: 100vw;
height: 100vh;  
position: fixed;
top: 0;
left: 0;
display: flex;
background-color: #00000080;
opacity: ${({ open }) => open ? 1 : 0};
transition: opacity 0.3s ease-in-out;
scale: ${({ open }) => open ? 1 : 0};
/* transition: scale 0.2s ease-in-out; */
`
export const NavigationList = styled.ul` 
display: flex;
height: 100vh;
width: 70vw;
flex-direction: column;
margin:  50px 0;
padding: 0 30px;
@media (min-width: 1200px) {
   flex-direction: row;
   height: auto;
   width: auto;
   margin-left: auto;
}
`

export const NavigationItem = styled.li` 
list-style-type: none;
padding: 30px;
text-transform: uppercase;
`
export const Link = styled.a` 
color: ${theme.primaryText};
font-size: 1.5rem;
letter-spacing: 0.2rem;
font-weight: 700;
&:hover, &:focus {
   color: ${theme.accent};
} 
`

