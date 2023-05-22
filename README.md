# Penn Medicine Digital campaigns

## Installation 

## Toolchain
## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── assets/
│   │    └── scripts/
│   │        └── { JS Files Go Here }
│   │    └── styles/
│   │        └── { CSS Files Go Here }
│   ├── components/
│   │   └── { Components Go Here }
│   ├── layouts/
│   │   └── sections/
│   │       └── { Content Sections Go Here }
│   │   └── Layout.astro
│   │   └── LayoutThankyou.astro
│   └── pages/
│       └── {Service Line}/
│           └── {Page Name}
│               └── index.astro
│               └── thank-you.astro
├── package.json
└── astro.config.mjs
```
### Public
The `public/` directory is for static assets that *are not touched by astro.* This includes images or static scripts that you don't want compiled. 
### Src
The `src/` directory holds all of the project files that Astro compiles.
#### Assets

##### Scripts
This project is using **vanilla JavaScript**. This directory holds `.js` files that can be imported into pages or components with a standard `<script>` tag.
##### Styles
This project is using **vanilla css**. This directory holds all of the `.css` files. The page layout components import the `index.css` which imports all other stylesheets. Global variables (css custom properties) are held in `variables.css`. **Do not edit the global variables.** Specific variables are stored in each file and inherit from the parent variables. 

***Style sheets should not reference variables outside of their own files.*** This way you always know the location of the variable if you need to change it - and it will not affect other elements. If you want to assign `var(--padding-2)` to the `.card` class - create a `--card-padding: var(--padding-2)` variable in the `:root` element of the `components.css` file and use that.
#### Components

#### Layouts

##### Sections

#### Pages




Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
