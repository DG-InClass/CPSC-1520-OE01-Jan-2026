# Fetching Markdown

In this example, we will see that the `fetch()` API isn't just for JSON data. It can be used to fetch any resource from an API endpoing.

## Setup Notes

- Created an `index.html` with the CDN for [PicoCSS](https://PicoCSS.com).
- Created a node project with `pnpm init`
- Added vite for development with `pnpm add -D vite`
- Edited [`package.json`](../package.json) to add a script command: `"dev": "vite",`
- Added a `main.js`

I plan on using this library: [Markdown-It](https://github.com/markdown-it/markdown-it). I am adding it as a regular dependency in my node project: `pnpm add markdown-it`.

> *Emmet for the win!*
>
> `nav>ul>li>strong^^ul>li*3>a`
