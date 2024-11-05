import styled from "styled-components"

const Icons =(props)=>{
    return(
        <ImageWrapper>
            {props.image}
        </ImageWrapper>
    );
};
export default Icons;

const ImageWrapper = styled.div`

    height: fit-content;
    width: fit-content;
    background-color: transparent;

`

