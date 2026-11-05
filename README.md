<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Movie-discovery

A search-based app where the user looks up movies (or books), browses results, filters them, pages through more results, and saves favorites. It’s the same kind of project as the weather dashboard, but with a bigger focus on search UX and data fetching patterns.

Core features
Search: Type a title and see matching results as a grid of cards (poster or cover, title, year, rating).
Filters: Narrow results by genre, year, or rating (movies), or by author, subject, or language (books).
Pagination: APIs return results in pages (about 20 at a time), so you add “Next/Previous” buttons or a “Load more” button.
Favorites list: Save items, view them on a separate page, and keep them after refresh via localStorage.
Detail view: Click a card to see the full description, cast or author, and similar titles.
>>>>>>> 64ebad2c553ec9bdcf32ec87915d7692c3920ced
