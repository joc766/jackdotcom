import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Paragraph.styled';
import { CustomText } from './Paragraph.styled';


export default class TextVariableSz extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        const currWidth = window.innerWidth;
        this.setState({
            width: currWidth,
        })
    } 

    render() {
        const sz = this.state.width >= 1000 ? this.props.textSz : this.props.textSz * this.state.width / 1000;
        return(
            <CustomText sz={sz} fontWeight={this.props.fontWeight}>
                {this.props.children}
            </CustomText>
        )
    }
}

export const BigTextVariableSz = (props) => {
    return (
        <TextVariableSz textSz={80} fontWeight={600}>
            {this.props.children}
        </TextVariableSz>
    )
}



