This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

`npm install`

This instals all necessary packages. Now, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Casino games:

A casino games lobby for browsing and filtering games.

# One thing i found challenging:

Implementing theme toggle turned out to be quite challenging.
Problem: The theme was changing on the root element. I could see this in the inspect element - when clicking the theme toggle, the style attribute was changing from `color-scheme: dark;` to `color-scheme: light;` and vice versa, however, the components (CardComponent, for example) was not changing style from bg-light to dark:bg-black.

# How I solved it: 

After some time of trying to figure out the right way to implement `next-themes` functionality and debugging, I was unsuccesful, so I opted for an alternative solution. This solution relies on a custom hook - `useTheme` that utilizes `MutationObserver` observable that looks at the current value of the `class` property of the `document.documentElement` element. namely, I tell the observer to monitor only the class attribute of the targeted `HTML` element, and on update, it triggers a change in the state of the hook. We can then utilize this hook in our components and perform conditional class assignment on the elements we want to add themed classes to. However, I ran into trouble with discrepancy between the server side and client side attributes of the compoennts. This is direct side-effect of using conditional rendering (or in this case, class assignment) in the components rendered by the server. To resolve this, I added `mounted` variable in the return of the hook, and check if `mounted` is true, before rendering anything.

# Things I would improve:

I would invest more time into investigating the root cause of the theming issue, and try to resolve it in the correct way.