# The Navigation Router for React

The folk at \newline asked me to write a course about [the Navigation router for React](https://grahammendick.github.io/navigation/). A couple of weeks later they bailed on me, claiming they couldn't monetise it. By that time, I'd already sent them the complete course outline and written most of the code samples. Seeing as making money for \newline was never my primary concern, I decided to open source it instead.

## Contents

1. [Why the Navigation Router?](#why-the-navigation-router)
2. [Getting Started](#getting-started)
3. [Strongly Typed Data](#strongly-typed-data)
4. [Programmatic Navigation](#programmatic-navigation)
5. [Routes](#routes)
6. [Refresh Navigation](#refresh-navigation)
7. [Code Splitting](#code-splitting)
8. [Nested UI](#nested-ui)
9. [Unit Testing](#unit-testing)

## Why the Navigation Router?
At the outset, we correct a common misunderstanding. The React Router isn't the official router for React and it isn't written by facebook. In fact, React doesn't recommend any routing library at all. The course focuses on a couple of routing problems that every student will recognise and that only the Navigation router has good solutions for.

### How can a component that contains hyperlinks be reusable across views?

In the upcoming modules, we build a simplified version of the newline website. One view displays newline's books with a list of numbered hyperlinks at the bottom so the user can page through them. We want to wrap these hyperlinks into a Pager component that we can reuse on another view which shows newline's tutorials. The problem is that we need different URLs depending on the view, for example, '/books/3' for the 3rd page of books and '/tutorials/3' for the 3rd page of tutorials. Another problem is that if the user searches for 'react' books then the URL for the 3rd page must include the filter, '/books/3?title=react'. We invite the student to think how they would write a Pager component using the React Router. The reusable Pager component we build with the Navigation router handles these use-cases without the addition of a single prop.

### How can we avoid sequential round trips (waterfalls)?

We have a Book component that renders a book's details. To reduce the JavaScript bundle size, we don't load the component code until the user selects a book. But if we fetch the book's details when the Book component mounts then the fetch can't start until the JavaScript code has loaded. Running requests in sequence like this creates a waterfall effect and slows down the app. We want to load the component code and fetch the data in parallel. We ask the student how they would fix this problem with the React Router. The course covers the Navigation router's solution and shows how it even works for nested routes and data.


## Getting Started
## Strongly Typed Data
## Programmatic Navigation
## Routes
## Refresh Navigation
## Code Splitting
## Nested UI
## Unit Testing
