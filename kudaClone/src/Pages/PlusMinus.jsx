import styled from "styled-components"
import { useEffect, useState } from "react";
import UseEffect from "./UseEffect";

const PlusMinus =()=>{

    const[update, setUpdate] = useState(0)

    const Add = () =>{
        setUpdate(update + 1)
    }

    const Subtract = () =>{
        setUpdate(update - 1)
    }

    const Reset = () =>{
        setUpdate(0)
    }

    return(
        <div>

            <All>

                <div className="AddSubtract">
                    <button onClick={Subtract}>Subtract</button>
                    <p>{update}</p>
                    <button onClick={Add}>Add</button>
                </div>
                
                <div className="Reset">
                    <button onClick={Reset}>Reset</button>
                </div>

            </All>

        </div>
    );
};
export default PlusMinus;

const All = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 50px;

    .AddSubtract{

        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;

        button{
        width: 100px;
        height: 50px;
        background-color: #40196d;
        color: white;
        border: transparent;
        border-radius: 10px;
        }

        p{
            color: #40196d;
        }

    }

    .Reset{
        
        button{
        width: 100px;
        height: 50px;
        background-color: #40196d;
        color: white;
        border: transparent;
        border-radius: 10px;
        }

    }

`

