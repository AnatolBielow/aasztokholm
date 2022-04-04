import { ImageContainer, SectionStyled, Title } from "../Page.styled"
import build from '../../Images/build.jpg'
export const Build = () => {
    return (
        <SectionStyled>
            <Title>Strona w budowie</Title>
            <ImageContainer>
                <img src={build} alt="W budowie"/>
            </ImageContainer>
        </SectionStyled>
    )
}