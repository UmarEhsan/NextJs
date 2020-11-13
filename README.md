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