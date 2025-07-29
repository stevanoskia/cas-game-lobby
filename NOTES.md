# Time spent:

 Roughly 8 hours 

# What I learned:

 NextJS topics: Layouts and pages, linking and navigating, server and client components, fetching data, error handling.
 

Challenge encountered:Implementing theme toggle turned out to be quite challenging.
Problem: The theme was changing on the root element. I could see this in the inspect element - when clicking the theme toggle, the style attribute was changing from `color-scheme: dark;` to `color-scheme: light;` and vice versa, however, the components (CardComponent, for example) was not changing style from bg-light to dark:bg-black.

How I solved it: After some time of trying to figure out the right way to implement `next-themes` functionality and debugging, I was unsuccesful, so I opted for an alternative solution. This solution relies on a custom hook - `useTheme` that utilizes `MutationObserver` observable that looks at the current value of the `class` property of the `document.documentElement` element. namely, I tell the observer to monitor only the class attribute of the targeted `HTML` element, and on update, it triggers a change in the state of the hook. We can then utilize this hook in our components and perform conditional class assignment on the elements we want to add themed classes to. However, I ran into trouble with discrepancy between the server side and client side attributes of the compoennts. This is direct side-effect of using conditional rendering (or in this case, class assignment) in the components rendered by the server. To resolve this, I added `mounted` variable in the return of the hook, and check if `mounted` is true, before rendering anything.