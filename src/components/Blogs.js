import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full">
        <div className="grid  card bg-base-300 rounded-box place-items-center">
          <h1 className="text-3xl font-bold mb-7 text-purple-500 text-center">
            What is the purpose of react router?
          </h1>
          <p className="text-2xl font-medium bg-orange-200 p-10">
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>
        <div className="divider"></div>
        <div className="grid   card rounded-box place-items-center">
          <h1 className="text-3xl font-bold my-7  text-center text-purple-500">
            How does context api work?
          </h1>
          <p className="text-2xl font-medium bg-orange-200 p-10">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
        <div className="divider "></div>
        <div className="grid   card bg-base-300 rounded-box place-items-center mt-10">
          <h1 className="text-3xl font-bold mb-7 text-center text-purple-500">
            useRef hook in React
          </h1>
          <p className="text-2xl font-medium bg-orange-200 p-10">
            The useRef Hook allows to persist values between renders. It can be
            used to store a mutable value that does not cause a re-render when
            updated. It can be used to access a DOM element directly.useRef
            returns a mutable ref object whose .current property is initialized
            to the passed argument ( initialValue ). The returned object will
            persist for the full lifetime of the component. Essentially, useRef
            is like a “box” that can hold a mutable value in its .current
            property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
