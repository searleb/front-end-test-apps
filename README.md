# A Comparison of Polymer, React & Vue.
I wanted to build an app that demonstrates the basic functionality you are most likely to need for a front end "single page app".

The main parts consist of:
- Templating
- Routing
- API integration
- To a lesser extent their CLI

Everyone loves :beer: and the guys over at [Brew Dog have an API](https://punkapi.com/) that lists all their beers in detail, so I've built a product listing app - Punk Brew.

The app consists of a listings page and a product details page.

An API call is made to load all the beers at the home page and another call is made to return the values
of a specific beer using route params at the details page.


## Polymer
#### CLI
Provides several options to bootstrap an element or project.
`polymer-2-stater-kit` provides a template with routing set up and some layout but in most cases you'll end up tearing this down so it's more likely you'll want `polymer-application` which doesn't include routing.
This project used `polymer-application`.

- Both include a local server and build tasks provided by `npm` scripts.
- Tests.
- Does not have live reloading built in.


## React
#### CLI
No setup options, just scoffolds out a basic app with `src` and `public` folders.

- Local server and build tasks provided by `npm` scripts.
- Live reloading.
- Tests.


## Vue
#### CLI
Highly configurable.

This project used the `webpack` template.

- Local server with live reloading and build tasks with `npm` scripts.
- Official and un-offical templates.
- Router option.
- ESLint options.
- Test options.
