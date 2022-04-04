import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 15px;

  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.img});
  background-size: cover;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
  }
`;
export const PageTitle = styled.h2`
  display: block;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  @media (min-width: 1200px) {
    margin-top: 200px;

    font-size: 6rem;
  }
`;
export const List = styled.ul`
  display: block;

  font-size: 1.2rem;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const ContentWrapper = styled.div`
  @media (min-width: 1200px) {
    width: calc(100vw / 2 - 50px);
  }
`;

export const HistoryContent = styled.div`
  font-size: 1.2rem;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  @media (min-width: 1200px) {
    width: calc(100vw / 2);
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const SecondTitle = styled.h3`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const Content = styled.p`
  margin-top: 15px;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  text-align: justify;
  line-height: 2rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 25vw;
  border-bottom-right-radius: 25vw;
  margin-top: 25px;
  @media (min-width: 1200px) {
    display: block;
    width: calc(100vw / 2 - 50px);
    height: auto;
    border-top-left-radius: 200px;
    border-bottom-right-radius: 200px;
    margin-top: 0px;
  }
`;
