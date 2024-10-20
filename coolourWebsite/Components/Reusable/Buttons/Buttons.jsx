import "./Buttons.css"

const Buttons = (props) =>{
    return(
        <div>

            <button className={`buttons ${props.properties}`}>

                {props.words}

                <div className={`disappear ${props.disappear}`}>
                
                    
                    <div className="div1">
                        {props.header}               
                    </div>

                    <div className="div2">
                        {props.text}
                    </div>

                </div>


            </button>

        </div>
    );
};

export default Buttons;