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

class Button extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.props.togglePlayer();
        this.setState({clicked: true})
    }

    render() {
        return (
            <ButtonWrapper onClick={() => this.handleClick()}>
                {this.state.clicked ? this.props.player === false ? 'X' : 'O' : ''}
            </ButtonWrapper>
        );
    }
}

class GameBoard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            player: false
        }
        this.togglePlayer = this.togglePlayer.bind(this);
    }

    togglePlayer() {
        console.log('player: ', this.state.player);
        this.setState({player: !this.state.player})
    }

    render() {
        return (
            <GameBoardWrapper>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
                <Button togglePlayer={this.togglePlayer} player={this.state.player}/>
            </GameBoardWrapper>
        );
    }
}

export default GameBoard;