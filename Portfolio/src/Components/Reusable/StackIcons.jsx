import styled from "styled-components"

const StackIcons =(props)=>{
    return(
        <IconWrapper>

            {props.icons}

        </IconWrapper>
    );
};
export default StackIcons;

const IconWrapper = styled.div`
    
    width: 120px;
    height: 120px;

    &.icons{
        
        width: 100px;
        height: 100px;
        font-size: 20px;
        size: 40px;

    }  
    
`


