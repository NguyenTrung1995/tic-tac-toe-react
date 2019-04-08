import * as React from 'react';
import styled from 'styled-components';

const GameBoardWrapper = styled.div`
    display: inline-grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    background: #ffffff;
    padding: 10px;
    border-radius: 4px;
`

const ButtonWrapper = styled.button`
    padding: 0;
    border-radius: 4px;
    font-size: 80px;
    outline-style: none;
    &:hover {
        background: #f7b24c;
    }
`

const Button = (props: any) => {
    return(
        <ButtonWrapper onClick={props.handleClick}>
            {props.player ? props.player : ''}
        </ButtonWrapper>
    );
}

class GameBoard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            player: false,
            listStatusBoard: Array(9).fill({player: '', clicked: false})
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index: number) {
        this.setState({listStatusBoard: this.state.listStatusBoard.map((x: any, i: number) => {
            if (!x.clicked && i === index) {
                return {
                    clicked: true,
                    player: this.state.player === false ? 'X' : 'O'
                }
            }
            return x;
        })});
        this.setState({player: !this.state.player});
    }

    render() {
        return (
            <GameBoardWrapper>
                {this.state.listStatusBoard.map((x: any, index: number) => 
                    <Button clicked={x.clicked} player={x.player} key={index}
                        handleClick={() => this.handleClick(index)}
                    />
                )}
            </GameBoardWrapper>
        );
    }
}

export default GameBoard;