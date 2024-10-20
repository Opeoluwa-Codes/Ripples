import "./New.css"

const New = (props) =>{
    return(
        <div>

            <div className={`newBox ${props.new}}`}>
                New
            </div>

        </div>
    );
};

export default New;