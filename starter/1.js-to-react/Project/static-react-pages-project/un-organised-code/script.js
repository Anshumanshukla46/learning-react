
// custom components
function TempFun() {
    return ( // this is return is important
        <div>
            <img src="./react.png" width="200px" />
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan walke</li>
                <li>Has well over 100K stars on github</li>
                <li>Is maitained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

// ReactDOM.render(tempFun(), document.getElementById('root'));

// REACT WAY => Use Camel Case and use closing angle bracket to get to pass in render

ReactDOM.render(<TempFun />, document.getElementById('root'));


// FUNCTION NAME SHOULD STARTS WITH CAPITAL LETTER

// challenge => Actual way how REACT HAVE "components" as only function which return only a one part

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

// we can also use style sheet to do the styling
function Header() {
    return (
        <header>
            <nav className="nav">
                <img width="40px" src="./react.png" className="nav-logo" />
                {/* className for class in react */}
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


// we can have more number of components even inside the "MainContent"
function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <List />
        </div>
    )
}

function List() {
    return (
        <ol>
            <li>It's a popular library, so I'll be
                able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
                if I know React</li>
        </ol>
    )
}

function Footer() {
    <footer>
        <small>© 2023 Shukla development. All rights reserved.</small>
    </footer>
}


ReactDOM.render(<Page />, document.getElementById("root"))




// NOW EVERYTHING SHOULD BE IN OTHER FILES LIKE AS Header, FOOTER ETC...