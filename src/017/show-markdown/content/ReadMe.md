# Ad-Hoc Markdown Parsing

Imagine the possibilities! I can just create the content for my website as plain-old Markdown documents. Then, with a little bit of JavaScript, this content can be *dynamically* loaded into the page, complete with all the styling available through ***classless* CSS** (like PicoCSS).

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
