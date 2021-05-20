import styled from "styled-components";
import jan3th from "./styles/images/20210103.webp";
import feb25 from "./styles/images/20210225.webp";
import mar6th from "./styles/images/20210306.webp";
import may28 from "./styles/images/20210518.webp";

const AppWrapper = styled.div`
  width: 100%;
  //height: 10rem;
  height: 10vh;
  background: teal;
`;
const Header = styled.header`
  background: pink;
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyWrapper = styled.div`
  background: darkslateblue;
  min-height: 90vh;
`;

const DiaryWrapper = styled.div`
  width: 100%;
  text-align: center;
  img {
    margin: 1rem 0;
    max-width: 80%;
    aspect-ratio: auto 600 / 140;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header>
        <div>🌺Luna's diary</div>
        {/*<HeaderNav>111</HeaderNav>*/}
      </Header>
      <BodyWrapper>
        <DiaryWrapper>
          <img src={may28} />
          <img src={mar6th} />
          <img src={feb25} />
          <img src={jan3th} />
        </DiaryWrapper>
      </BodyWrapper>
    </AppWrapper>
  );
}

export default App;
