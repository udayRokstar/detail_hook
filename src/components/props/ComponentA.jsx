import ComponentB from "./ComponentB";

function ComponentA (props) {
    return(
        <div>Component A
            <ComponentB mynext={props.myclick}></ComponentB>
            <button onClick={props.myclick}>click A</button>
        </div>
    )
}

export default ComponentA;