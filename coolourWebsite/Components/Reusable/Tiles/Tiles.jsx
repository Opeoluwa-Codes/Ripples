import "./Tiles.css"


const Tiles = (props) =>{
    return(
        <div>

            <div className="hover">

                <div className="tiles">
                    <img src={props.image} alt="" />
                    <h2>{props.h2}</h2>
                    <p>{props.para}</p>
                </div>

                <div className={`hide ${props.color}`}>
                    <p>{props.hover}</p>
                </div>

            </div>

        </div>
    );
};

export default Tiles;