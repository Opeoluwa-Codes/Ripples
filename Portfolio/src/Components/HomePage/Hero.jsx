import styled, { keyframes } from "styled-components"
import PP from "../../assets/JPG/PP.jpg"

const Hero =()=>{
    return(
        <HeroWrapper>

            <Info>

                <IntroOne>Hi,</IntroOne>
                <IntroTwo>my name is</IntroTwo>
                <IntroThree>
                    Opeoluwa.
                </IntroThree>
                <JobOne>I am a</JobOne>
                <JobTwo>Software Engineer.</JobTwo>

            </Info>

            <HeroPicture>

                <img src={PP} alt="#" />

            </HeroPicture>

        </HeroWrapper>
    );
};
export default Hero;

const HeroWrapper = styled.div`
    
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding-left: 200px;
    padding-right: 200px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Info = styled.div`

    width: 500px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

`

const IntroOne = styled.div`
    
    font-size: 50px;
    font-weight: 800;
    font-family: Manrope;
    color: #1E3A8A;

`

const IntroTwo = styled.div`
    
    font-size: 50px;
    font-weight: 800;
    font-family: Manrope;
    color: #1E3A8A;

`

const slideIn = keyframes`
    
    from {

        transform: translate3d(100%);
        opacity: 0;
        

    } 
    
    to {

        transform: translateX(0%);
        opacity: 1;

    }

`

const IntroThree = styled.div`
    
    font-size: 50px;
    font-weight: 800;
    font-family: Manrope;

    animation: ${slideIn} 5s ease forwards;
    
    background: linear-gradient(45deg, #1E3A8A, #E70FAA);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
`


const JobOne = styled.div`
    
    font-size: 50px;
    font-weight: 800;
    font-family: Manrope;
    color: #1E3A8A;

`

const JobTwo = styled.div`
    
    font-size: 50px;
    font-weight: 800;
    font-family: Manrope;

    animation: ${slideIn} 5s ease forwards;

    background: linear-gradient(45deg, #1E3A8A, #E70FAA);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

`

const HeroPicture = styled.div`
    
    width: fit-content;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(45deg, #13B0F5, #E70FAA);
    border-radius: 100%;
    padding: 5px;


    img{

        height: inherit;
        border-radius: 100%;

    }

`

// 182, 246