import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: gray;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  color: ${props => (props.dark ? 'white' : 'black')};
  background: ${props => (props.dark ? 'dark' : 'white')};
  border: 1px solid black;
`;

const RoundButton = styled(Button)`
  border-radius: 16px;
`;

export default function MainPage() {
  return (
    <Wrapper>
      <Title>안녕하세요 리액트</Title>
      <br />
      <Button>Normal</Button>
      <Button dark>Dark</Button>
      <br />
      <RoundButton>Round Button</RoundButton>
    </Wrapper>
  );
}
