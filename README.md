# NextJs


To build a complete web application with React from scratch, there are many important details you need to consider:

Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
You need to do production optimizations such as code splitting.
You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
You might have to write some server-side code to connect your React app to your data store.
A framework can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great "Developer Experience", ensuring you and your team have an amazing experience while writing code.



Pages in Next.js
In Next.js, a page is a React Component exported from a file in the pages directory.

Pages are associated with a route based on their file name. For example, in development:

pages/index.js is associated with the / route.
pages/posts/first-post.js is associated with the /posts/first-post route.
We already have the pages/index.js file, so let’s create pages/posts/first-post.js to see how it works.


Link Component
When linking between pages on websites, you use the <a> HTML tag.

In Next.js, you use the Link Component from next/link to wrap the <a> tag. <Link> allows you to do client-side navigation to a different page in the application.

Using <Link>
First, in pages/index.js, import the Link component from next/link by adding this line at the top:


<h1>Code splitting and prefetching </h1>
Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you add hundreds of pages.

Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!


<h1>Assets, Metadata, and CSS</h1>

In this lesson, you’ll learn:

How to add static files (images, etc) to Next.js.
How to customize what goes inside the <head> for each page.
How to create a reusable React component which is styled using CSS Modules.
How to add global CSS in pages/_app.js.
Some useful tips for styling in Next.js.|



<h1>Assets</h1>
First, let’s talk about how Next.js handles static assets such as images.

Next.js can serve static files, like images, under the top-level public directory. Files inside public can be referenced from the root of the application similar to pages.

If you open pages/index.js in your application and take a look at the <footer>, we refer to the logo image like so:

<img src="/vercel.svg" alt="Vercel Logo" className="logo" />

the logo image exists inside the public directory at the top level of your application.

The public directory is also useful for robots.txt, Google Site Verification, and any other static assets




<h1>Important:</h1> 

To use CSS Modules, the CSS file name must end with .module.css.


<h1>Global Styles</h1>
CSS Modules are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well.

To load global CSS files, create a file called _app.js under pages and add the following content:


This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example.




<h1>Adding Global CSS</h1>
In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.


The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

You can place the global CSS file anywhere and use any name. So let’s do the following:

Create a top-level styles directory and create global.css inside.
Add the following content. It resets some styles and changes the color of the a tag.





<h1>Pre-rendering</h1>
Before we talk about data fetching, let’s talk about one of the most important concepts in Next.js: Pre-rendering.

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.



<h1>Two Forms of Pre-rendering</h1>
Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
Server-side Rendering is the pre-rendering method that generates the HTML on each request.



<h1>Static Generation with Data using getStaticProps</h1>
How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

getStaticProps runs at build time in production, and…
Inside the function, you can fetch external data and send it as props to the page.