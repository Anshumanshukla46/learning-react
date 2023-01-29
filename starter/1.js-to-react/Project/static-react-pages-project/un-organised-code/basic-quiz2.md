Quiz!

1. What is a React component?
it is actully a function which can be used as <fun/>

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
the name of it should be MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
ReactDOM.render(<Header/>, document.getElementById('root))