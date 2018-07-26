// MyContext is used to pass in the greeting
const MyContext = React.createContext()
// ThemeContext is used to pass in the color of the text
const ThemeContext = React.createContext()

const OuterComponent = () => (
  <div>
    <MiddleComponent />
  </div>
)
const MiddleComponent = () => (
  <div>
    <InnerComponent />
  </div>
)

// InnerComponent uses the context values
const InnerComponent = () => (
  // We need to wrap the element we want to render inside both consumers
  <MyContext.Consumer>
    {(greeting) => (
      <ThemeContext.Consumer>{(color) => <div style={{ color: color }}>Hello {greeting}</div>}</ThemeContext.Consumer>
    )}
  </MyContext.Consumer>
)

const root = (
  <MyContext.Provider value='world'>
    <ThemeContext.Provider value='red'>
      <OuterComponent />
    </ThemeContext.Provider>
  </MyContext.Provider>
)
// root will be rendered
