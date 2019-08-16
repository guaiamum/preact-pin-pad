# Key 
---

## Render
Renders a button wrapped by a div, with a style class.

## Behavior
Binds a click event to the rendered button, passing to the `onPress` function, as a first arg, the number prop

## Prop table
| PROP       | TYPE     | DESCRIPTION                                                                            |
|------------|----------|----------------------------------------------------------------------------------------|
| onPress    | Function | function to be called, with the first arg being the number prop                        |
| number     | number   | number to be the innerText of the button, as well as the first arg to the onPress prop |
| otherProps | Array    | attributes to be appended to the button                                                |
