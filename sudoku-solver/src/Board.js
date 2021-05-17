function Board(props) {
    const sudokuArray = props.sudokuArray;

    function createInput(index) {
        return <input id={index} className="input" placeholder={index} />;
    }

    function createRow(array) {
        return (
            <div className="row">
                {array.map(index => createInput(index))}
            </div>
        )
    }

    function createBox(array) {
        return (
            <div className="box">
                {array.map(index => createRow(index))}
            </div>
        )
    }

    function createBoxRow(array) {
        return (
            <div className="boxRow">
                {array.map(index => createBox(index))}
            </div>
        )
    }

    return (
        <div className="board">
            {sudokuArray.map(row => createBoxRow(row))}
        </div>
    )
}

export default Board;