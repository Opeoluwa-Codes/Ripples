import { useEffect } from 'react';
import { useState } from 'react'
import styled from "styled-components"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { data } from '@remix-run/router';

const UseEffect =()=>{

    const[display, setDisplay] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async () =>{

            try{
                setLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                // console.log(data);
                setDisplay(data);
            }catch (error){
                console.error("Error:", error);
            }finally{
                setLoading(false)
            }
        }

        fetchData()
        
        
        // const fetchData = () =>{

        //     setLoading(true)

        //     fetch('https://jsonplaceholder.typicode.com/posts')

        //         .then(response => response.json())

        //         .then(data => 
        //             {
        //                 console.log(data),
        //                 setDisplay(data),
        //                 setLoading(false)  
        //             }
        //         )
        //         .catch(error =>{
        //              console.error("Error:", error);
        //              setLoading(false)
        //          })
        // }

        // fetchData();


    },[])

    return(
            <WrapAll>
                {
                    loading ? (

                        <Logo>
                           <Load/> 
                        </Logo>

                    ) : (

                        <Contain>

                            {
                                display.map((post, index)=>(

                                        <ContainEach key={index}>

                                            <Top>
                                                {post.id}: {post.title}
                                            </Top>

                                            <Bottom>
                                                {post.body}
                                            </Bottom>

                                        </ContainEach>

// userId, id, title, body
                                ))   
                            }

                        </Contain>

                        )  
                }
            </WrapAll>
    );
};
export default UseEffect;

const WrapAll = styled.div`
    width: 80%;
    height: 85%;
    margin: 10% 10% 5% 10%;
    
`

const Load = styled(AiOutlineLoading3Quarters)`
    
    font-size:50px;
    animation: spin 1s linear infinite;
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`

const Logo = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

`


const Contain = styled.div`
    border: 2px #40196d solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const ContainEach = styled.div`
    width: 26.7%;
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    flex-direction: column;
    border-radius: 10px;
    background-color: #40196d;

`

const Top = styled.div`
    height: fit-content;
    text-align: center;
    align-content: start;
    box-sizing: border-box;
    padding: 20px 10px 10px 10px;
    color: white;
    border-bottom: 1px white solid;

`

const Bottom = styled.div`
    height: fit-content;
    text-align: center;
    align-content: center;
    box-sizing: border-box;
    padding: 10px 10px 20px 10px;
    color: white;

`