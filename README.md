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
The student learns how to set up the Navigation router and link between views.

We use Create React App to initialise the example, `npx create-react-app newline`. Then install the 'navigation' and 'navigation-react' packages from npm.

We'll add two views to our newline app. A view that displays a welcome message and another that lists newline's books. We create a StateNavigator and pass it an array of States. There's one State per view - a 'welcome' State for the first view and a 'books' State for the second.

We create Welcome and Books components that render the view content. Inside a useEffect, the Books component fetches the list from a pre-built REST API. We attach renderView functions to the 'welcome' and 'books' States that return these components, for example, `books.renderView = () => <Books />`.

We wrap the app in a NavigationHandler component to set up the Navigation context. Whenever the context changes we render the view for the current State. We assign the 'welcome' State the empty route and call start on the stateNavigator. This makes the 'welcome' State the current one when the app first loads. 

Running `npm start` displays the welcome message.

We add a hyperlink inside the welcome message that navigates to the book list. We haven't decided what the 'books' route is yet. But it doesn't matter because we can still link to it without defining a route. We don't hard-code URLs with the Navigation router. We tell the Navigation router we want to go to the 'books' State and let it worry about the URL for now. In a later lesson, we'll configure the route and the Navigation router will automatically update the hyperlink's URL to match. We build the hyperlink using the NavigationLink component, `<NavigationLink stateKey=”books” />`.

Running `npm start` displays the welcome message and hyperlink. Clicking the link displays the list of newline's books.

## Strongly Typed Data
The student learns that they pass strongly typed data when navigating. There's no need to convert values to and from strings.

The REST API only returns five books at a time. We'll add numbered hyperlinks so the user can page through all the books. We add a page prop to the Books component and give it a default value of 1. Including this page prop in the useEffect dependencies ensures the fetch runs when the page changes.

We build the hyperlink to the 3rd page, for example, by passing the page number 3 in navigation data. We don't have to convert it to a string because we pass strongly typed data with the Navigation router, `<NavigationLink stateKey=”books” navigationData={{ page: 3 }} />`.

We update the App component to pass the navigation data to the renderView function.  We change the renderView function to take the page number from navigation data and pass it into the Books component, `books.renderView = ({ page }) => <Books page={page} />`.

We don't have to convert it from a string to a number because the Navigation router passes strongly typed data. We prove this by adding PropType validation to the Books component that checks the page prop is a number.

We still haven't defined a route for the ‘books’ State yet. But it doesn't matter, we can navigate and pass data without one. Later on, we'll configure a route that makes the page number a route parameter. The Navigation router will automatically update the URLs of the paging hyperlinks. 

Running `npm start` allows the book list to be paged.

## Programmatic Navigation
## Routes
## Refresh Navigation
## Code Splitting
## Nested UI
## Unit Testing
