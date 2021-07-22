# One page resume with Material-UI (WIP)

Hi! this is a react-with-Material-UI learning project, I'm doing everything by myself with no guidance so the code might be messy and features might be over-complicated.
I'll ask for feedback sometime soon and then work on improving/modularizing my code.
Open https://jose-velarde.github.io/one-page-resume/ to view it in the browser.
The site is designed to load all the content from json files, so if you want to set up your own resume using this layout you might be able to, by cloning the repo and modifying the json files.

## TODO
* [] Light/Dark mode toggle. Improve Switch style
* [x] Load info from json file.
* [x] Side navigation 100% of viewport. Calculated on first render.
* [x] Transition effect on background color change. Could probabably write a better component.
* [x] Theme support. kinda, with Colors.js
* [] Scroll clicked and uncollapsed item to the top. New component?
* [] Professional/Short version switch. Different json?
* [] Language Switch or switch language on click on the languages items. Different json? 
* [] Rearrange sections on xs display, move Languages/Skills/Interests to the bottom.
* [] Include switchs into a Nav bar menu? 
* [] Try other palettes. Colors in website look more saturated, why tho.
* [] More spacing on titles
* [x] Primary text color on inner ThemeProvider does not work, figure out how to override default text color defined by outer ThemeProvider. 
* [] Change selected text background color on dark mode
* [] Make reusable Components
* [] dark mode background gradient with banding, why tho.
## Things I had trouble with

* Material-UI's dark/light palette selector changed from 'type' to 'mode', I'm using Material-UI next and had to read the v3 to v4 changes to figure this out.
* Wrapping a Grid with a Material-UI's Collapse breaks the Grid component width with flex. Tried to make Collapse as a Grid component but did not work. Solution was to just use width 100% in the Collapse component.
* Had to read how to pass data from a child component to a parent component, again: https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654
* Related to last item: Had to learn when a component is rendered and updated. When working with variables and different components, the data is passed 'after' and not immediately, (asynchronically), the workaround is to get the data in the child component render and pass the data to the parent, and trigger a state change to update.  Do not change a state and work immediately with new data (in the same function), it will not be reflected immediately.
* Get height (or other attributes) from a child component and pass it to the parent. It is only available when the components is rendered on the DOM (on mount). So it will be available the first time it mounts. I can also force the component to unmount and mount on prop change with a key prop.
* Resize event listener is triggered on mobile when scrolling up and then down, 
the address bar resizes the viewport height, triggering the event.
* Colored Divider by background-color sometimes appears with more height, 
re color with border-color instead. https://github.com/mui-org/material-ui/pull/18965
* Had to use Paper components to wrap content and apply a theme, otherwise the primary text color wouldn't change.
* Couldn't find how to apply a transition to the background color change on a theme. Instead, I created Custom Grid components with the transition effect, with theme.transitions.create()


