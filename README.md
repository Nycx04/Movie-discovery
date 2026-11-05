# Movie-discovery

A search-based app where the user looks up movies (or books), browses results, filters them, pages through more results, and saves favorites. It’s the same kind of project as the weather dashboard, but with a bigger focus on search UX and data fetching patterns.

Core features
Search: Type a title and see matching results as a grid of cards (poster or cover, title, year, rating).
Filters: Narrow results by genre, year, or rating (movies), or by author, subject, or language (books).
Pagination: APIs return results in pages (about 20 at a time), so you add “Next/Previous” buttons or a “Load more” button.
Favorites list: Save items, view them on a separate page, and keep them after refresh via localStorage.
Detail view: Click a card to see the full description, cast or author, and similar titles.
