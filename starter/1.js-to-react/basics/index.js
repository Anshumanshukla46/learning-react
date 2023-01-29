// // FEAL OF REACT

// // ReactDOM.render(what to show, where to show);

// // THIS IS HOW TO SHOW SOMETHING IN JS
// // ReactDOM.render(
// //     <ul>
// //         <li>one</li>
// //         <li>two</li>
// //         <li>three</li>
// //         <li>four</li>
// //     </ul>,
// //     document.getElementById("root"));



// function MainContent() {
//     // WE CAN USE PARENTHESIS AS I AM RETURNING MORE CONTENT
//     return (<h1>This is h1</h1>);
// }



// // ReactDOM.render(
// //     <div>
// //         <MainContent />
// //     </div>,
// //     document.getElementById('root')
// // )



// // JAVASCRIPT IS IMPERATIVE (TELL "HOW TO DO" and "WHAT TO DO");
// // const h1 = document.createElement("h1");
// // h1.textContent = "This is IMPERATIVE statement";
// // h1.className = "header"; // in react their is className
// // document.getElementById('root').append('h1');



// // // NOW  REACT IS DECLARATIVE (JUST TELL WHAT TO DO -> LATER react WILL FIGURE OUT HOW TO DO);
// // <h1 className="header">This is IMPERATIVE statement</h1>
// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById('root')
// );


// const elem = (
//     <div>
//         <h1>This is h1</h1>
//         <p>This is para</p>
//     </div>
// );


// // JSX => can also save in variable but all should have  one parent only
// ReactDOM.render(elem, document.getElementById('root'));

// CHALLENGE

ReactDOM.render(
    <nav>
        <h1>Nav</h1>
        <ul>
            <li>Price</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>,
    document.getElementById('root')
);