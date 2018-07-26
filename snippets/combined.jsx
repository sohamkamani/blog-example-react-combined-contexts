const CombinedContextProvider = ({ greeting, color, children }) => (
  <MyContext.Provider value={greeting}>
    <ThemeContext.Provider value={color}>{children}</ThemeContext.Provider>
  </MyContext.Provider>
)

const CombinedContextConsumer = ({ children }) => (
  <MyContext.Consumer>
    {(greeting) => <ThemeContext.Consumer>{(color) => children({ greeting, color })}</ThemeContext.Consumer>}
  </MyContext.Consumer>
)

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
const InnerComponent = () => (
  <CombinedContextConsumer>
    {({ greeting, color }) => <div style={{ color: color }}>Hello {greeting}</div>}
  </CombinedContextConsumer>
)

const root = (
  <CombinedContextProvider greeting='world' color='red'>
    <OuterComponent />
  </CombinedContextProvider>
)
