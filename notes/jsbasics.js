// var :always gets hoisted - only use for non-transpiled code in the browser
// const :only available in current scope
// Const example
const someVar = "foo"

// most desired way of creating functions
function  fn1() {
    return true
}

//use when you want to create a child function that affects only it's parent
const fn2 = function( {

                      })

// standard React component examples

<SomeComponent prop1={1} prop2={2} prop3={3} />
export default function SomeComponent(props){
    return props.prop1
}
//OR
<SomeComponent prop1={1} prop2={2} prop3={3} />
export default function SomeComponent({prop1, prop2, prop3}){
    return prop1
}
//OR
<SomeComponent prop1={1} prop2={2} prop3={3} />
export default function SomeComponent(prop1, ...rest){
    return rest
}

// Do not use classes, use functions
// Components, prototypes, variable scoping, hooks, use-state call, are all functions
// Diff between functions (pure - no side effects) is they do not change the outside world like methods (attached to objects which can change things based on external changes)
// If file has HTML, it is a JavaScript XML file (*.jsx) otherwise it is a JavaScript file (*.js)
// React does not do any native interactions with databases or CRUD
// Anything that is not a string must be in curly braces!
// Do not use create-react-app for sites that will be indexed with search engines, use Gatsby or Next.js to accommodate server-side rendering requirement for proper indexing
// Pro-Tip: use snippets to create component templates
// Cannot have more than one default function in a file
// Create separate folder for each component and dependent files
// TypeScript is Microsoft's attempt to fracture JavaScript, it simply adds types to JavaScript
// 'rem' sizing means relative to defined root element size
// 'exact route means the exact value needs to be passed, nothing less or more. i.e. <Route exact path="/"> will only route to defined "/" path - not "/about-us"
// return null is useful when you don't need to display anything


