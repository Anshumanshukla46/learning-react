function MyName() {
    return (
        <div>
            <p className="hello">This is</p>
            <Name />
        </div >
    )
}

function Name() {
    return (
        <span>Anshuman Shukla</span>
    )
}

ReactDOM.render(<MyName />, document.getElementById('root'));