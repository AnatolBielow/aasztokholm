import { Content, SectionStyled, SecondTitle, Title,ImageContainer, ContentWrapper } from "./Page.styled";
import image from '../Images/sunset.jpg'


export const About = ({item}) => {
  const { title, secondTitle, content} = item;
  return (
    <SectionStyled>
      <ContentWrapper>
       <Title>{title}</Title>
      <SecondTitle>{secondTitle}</SecondTitle>
      <Content>{content}</Content> 
      </ContentWrapper>
      <ImageContainer>
            <img src={image} alt={secondTitle}></img>
      </ImageContainer>
    </SectionStyled>
  );
};
