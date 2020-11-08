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

We still haven't defined a route for the 'books' State yet. 'ut i' doesn't matter, we can navigate and 'pass data without one. Later' on, we'll configure a route that makes the page number a route parameter. The Navigation router will automatically update the URLs of the paging hyperlinks. 

Running `npm start` allows the book list to be paged.

## Programmatic Navigation
The student learns the imperative navigation API (NavigationLink is the declarative API).

We add a search input and submit button so the user can filter the list of books by their title. We add a title prop to the Books component and include it in the useEffect dependency list.

We useContext to get hold of the stateNavigator. In the submit click handler we call the navigate function, passing the search filter in navigation data, `stateNavigator.navigate('books', { title: 'react' })`. We destructure the title from the navigation data in renderView and pass it to the Books component.

Running `npm start` allows the book list to be filtered. We show that the filter is lost when paging through the list.

We update all the paging hyperlinks to include the title, `<NavigationLink stateKey=”books” navigationData={{ page: 3, title }} />`.

Running `npm start` allows the book list to be filtered and paged.

## Routes
The student learns how to generate any URL they want without making any code changes.

The newline app is up and running. We can filter and page through newline's books. But how does it work when we haven't even configured a route for the 'books' State yet? It works because the Navigation router generates URLs for us automatically.  We turn on HTML5 history so it's easier to see what these auto-generated URLs look like.

After running `npm start` and going to the third page of books, we take a look at the browser URL.  It says '/books?page=31_2'. Notice that the Navigation router has set the route to 'books'. Until we define a route, it uses the State key as the route name. 

We configure the route of the 'books' State to be 'our-books' and run the app again. This time the URL says '/our-books?page=31_2'. We haven't had to change any code and the Navigation router now generates all URLs to match the route.

The extra characters after the 3 in the URL are how the Navigation router tracks that the page parameter is a number. Remember that navigation data is strongly typed. We configure a default type of 'number' so that the Navigation router doesn't have to track it anymore. Running the app, the URL now says '/our-books?page=3'. Again, we note that we haven't made any code changes.

By default the Navigation router passes the page parameter in the query string. We change it to a route parameter by setting the route to ‘our-books+/{page}’.  The + syntax indicates the page sub-route is optional -  it's blank when we navigate from the welcome view. Re-running the app, the URL says '/our-books/3'.

We've changed the URL from '/books?page=31_2' to '/our-books/3' without touching any code. 

When we first land on the books list the URL says '/our-books'. But if we go to page 2 then back to page 1 it changes to '/our-books/1' instead of '/our-books'. We fix this by configuring a default value of 1 for the page parameter. Default values aren't included in the URL.

The Navigation router knows that the type of the page parameter is a number from its default value. So it's safe to drop the default type configuration. We also remove the default value of the page prop from the Book component. The default parameter value means the prop will never be blank.

With set trackTypes to false on the 'books' State to complete the URL configuration.

## Refresh Navigation
The student learns how to make components that contain hyperlinks reusable across views.

To make a reusable Pager component we have to remove any information specific to the books view from the paging hyperlinks. 

The paging hyperlinks navigate from the 'books' State to the 'books' State. Navigation that stays on the same view is called refresh navigation. We change these paging hyperlinks to use RefreshLinks instead of NavigationLinks. The RefreshLink sets the destination State to be the current State so we don't have to specify it, `<RefreshLink navigationData={{ page: 3, title }} />`.

The pager hyperlinks keep track of the title filter so that it's not lost when paging through the books. Instead of putting that responsibility on the pager hyperlinks we ask the RefreshLink to remember the filter for us, `<RefreshLink navigationData={{ page: 3 }} includeCurrentData={true} />`.

The paging hyperlinks don't hold anything specific to the books listing anymore. We extract them into a Pager component which we’ll reuse in another view that displays newline's tutorials.

We add a 'tutorials' State, give the page a default value of 1 and define a route of ‘our-tutorials’. We create a Tutorials component with a page prop and a useEffect that fetches a page of tutorials from the pre-built REST API. We drop in the reusable Pager component. 

Running `npm start` allows us to page through newline's books and tutorials.

The student can see the Pager component is reused across views even though the routes are different. The page is a route parameter on the books view and a query string parameter on the tutorials view. The URL to the 3rd page of books is '/our-books/3'. The URL to the 3rd page of tutorials is '/our-tutorials?page=3'.

## Code Splitting
The student learns how to code split without creating waterfalls.

We’ll add a book details view that's displayed when a book is selected from the list. We configure a 'book' State with a corresponding Book component. The component accepts a slug prop that it uses to fetch the details from the REST API. On the listing we add NavigationLinks that navigate to the 'book' State and pass the slug of the chosen book.

Running `npm start` displays the book details when a book is selected.

The JavaScript bundle includes the Book component even though it might never be needed. It's better to keep the bundle size down and delay loading the Book component code until the user selects a book. This is called code splitting.

We lazy import the Book component and wrap the app in a Suspense component with a fallback 'loading...' message. Rerunning the app with the network tab open shows that the Book component code is loaded only when it's needed.

But the network tab also shows that the fetch of the book's details doesn't start until the component code has loaded. One request waiting on another is called a waterfall and is bad for performance. We want to load the component code and fetch the book's details in parallel. If the fetch completes first then the render can start as soon as the code loads.

We create a BookLoader component that lazy loads the Book component and fetches the book details at the same time. The BookLoader passes the fetch Promise to the Book component so it can render the details when the Promise resolves. We return the BookLoader component from the renderView instead of the Book component. The BookLoader is small so it's fine to load in the initial JavaScript bundle.

Rerunning the app, the network tab shows that the Book component is code split and the details fetch no longer waits for the load to complete.

## Nested UI
## Unit Testing
