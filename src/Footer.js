import styled from "styled-components";
export default function Footer() {
  return (
    <Box>
      <div>
        <Button cor="#FF3030">Não lembrei </Button>
        <Button cor="#FF922E">Quase não lembrei </Button>
        <Button cor="#2FBE34">Acertei</Button>
      </div>
      <span>0/4 Concluidos</span>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Button = styled.button`
  width: 100px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.cor};
  border-radius: 5px;
  border: none;
  padding: 5px;
`;
