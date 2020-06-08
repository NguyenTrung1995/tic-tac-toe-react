import React, { useState } from "react";
import styled from "styled-components";

const GameBoardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background: #ffffff;
  padding: 10px;
  border-radius: 4px;
`;

const ButtonWrapper = styled.button`
  padding: 0;
  border-radius: 4px;
  font-size: 80px;
  outline-style: none;
  &:hover {
    background: #f7b24c;
  }
`;

const Button = (props: any) => {
  return (
    <ButtonWrapper onClick={props.handleClick}>
      {props.player ? props.player : ""}
    </ButtonWrapper>
  );
};

const initBoard = Array(9).fill({ player: "", clicked: false });

const GameBoard = () => {
  const [player, setPlayer] = useState(false);
  const [listStatusBoard, setListStatusBoard] = useState(initBoard);

  const handleClick = (index: number) => {
    if (!listStatusBoard[index].clicked) {
      let countRow = 1;
      let countColumn = 1;
      const solaydu = index % 3;
      const solaynguyen = Math.floor(index / 3);
      const newList = listStatusBoard.map((x: any, i: number) => {
        if (!x.clicked && i === index) {
          return {
            clicked: true,
            player: player === false ? "X" : "O",
          };
        }
        return x;
      });
      for (let i = 0; i < newList.length; i++) {
        if (i % 3 === solaydu && i !== index) {
          if (newList[i].player === newList[index].player) {
            countColumn++;
          }
        }
        if (Math.floor(i / 3) === solaynguyen && i !== index) {
          if (newList[i].player === newList[index].player) {
            countRow++;
          }
        }
      }
      if (countRow === 3 || countColumn === 3) {
        setListStatusBoard(initBoard);
        console.log(`Player ${newList[index].player} win`);
      } else if (!newList.filter(item => !item.clicked).length) {
        setListStatusBoard(newList);
        console.log(`Draw game`);
      } else {
        setPlayer(!player);
        setListStatusBoard(newList);
      }
    }
  }

  return (
    <GameBoardWrapper>
      {listStatusBoard.map((x: any, index: number) => (
        <Button
          clicked={x.clicked}
          player={x.player}
          key={index}
          handleClick={() => handleClick(index)}
        />
      ))}
    </GameBoardWrapper>
  );
}

export default GameBoard;
