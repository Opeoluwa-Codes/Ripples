import styled from "styled-components"

const Footer =()=>{
    return(
        <FooterWrapper>

            Created by Opeoluwa

        </FooterWrapper>
    );
};
export default Footer;

const FooterWrapper = styled.div`
    
    position: fixed;
    bottom: 0px;
    z-index: 10000;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    font-family: Bebas Neue;
    color: #1E3A8A;
    background-color: white;


`