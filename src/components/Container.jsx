import { StyledContainer } from "./styles/Container.styled"

const Container = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

export default Container