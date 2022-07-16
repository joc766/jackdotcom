import React from 'react';

import { HorizontalContainer, SubSection } from '../styles/Container.styled';
import { CustomText } from '../styles/Paragraph.styled';

export default class AboutMe extends React.PureComponent {

    render() {

        return (
            <>
            <h1 style={{fontSize: "40px", marginBlockStart: "100px"}}>About Me</h1>
            <HorizontalContainer>
                <SubSection height={"800px"}>

                </SubSection>
                <SubSection height={"800px"}>
                    <CustomText sz={28} fontWeight={500}>
                        Socials
                    </CustomText>
                </SubSection>
            </HorizontalContainer>
            </>
        )
    }
}

