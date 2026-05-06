module MyComponent = {
  @react.component
  let make = (~name) => React.string(name)
}

module Container = {
  @react.component
  let make = (~children) => <div> children </div>
}

// Case 1: cursor before <MyComponent inside @react.component body
//   - The JSX PPX wraps the body in (... : React.element), and the constraint
//     uses the body expression's location. Clicking before the JSX tag (e.g.
//     on the leading whitespace or `<`) lands inside this synthesized
//     React.element locItem but outside the narrower MyComponent.make ident.
//     Definition returns React.element.
@react.component
let make = (~name) => {
  <MyComponent name />
//^def
}

// Case 2: control - cursor on M of <MyComponent works correctly.
let _ = <MyComponent name="hello" />
//        ^def

// Case 3: cursor between two JSX children
//   - The JSX PPX wraps multiple children in `React.array(...)` whose
//     ident location spans the whole children range. Clicking between two
//     children returns React.array.
let _ =
  <Container>
    <MyComponent name="a" />
    <MyComponent name="b" />
//  ^def
  </Container>
