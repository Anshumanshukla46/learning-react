// // using append method

// const e1 = document.createElement("p");
// e1.append("asldg");
// // console.log(e1);

// const e2 = document.createElement("p");
// e2.append("hello");
// // console.log(e1);

// const pt = document.getElementById('pt');

// pt.append(e1);
// pt.append(e2);

// ReactDOM.render(pt, document.getElementById('root'));


// this jsx return plain javascript object which have a props as every details
const page = (
    <div>
        <h1>This is h1</h1>
        <ol>
            <li>React is composable</li>
            <li>React is declarative</li>
            <li>React is hirable</li>
            <li>
                <h1>LOVING IT</h1>
            </li>
        </ol>
    </div>
);

// document.getElementById('root').append(JSON.stringify(page));


ReactDOM.render(page, document.getElementById('root'));