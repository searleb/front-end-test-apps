# A Comparison of Polymer, React & Vue.
I wanted to build an app that demonstrates the basic functionality you are most likely to need for a front end "single page app".

The main parts consist of:
- Templating
- Routing
- API integration
- CLI

Everyone loves :beer: and [this guy](https://github.com/samjbmason/punkapi-db) created an API from [Brew Dogs DIY Dog](https://www.brewdog.com/diydog) that lists all their beers in detail, so I've built a product listing app - Punk Brew.

The app consists of a listings page and a product details page.

An API call is made to load all the beers at the home page and another call is made to return the values
of a specific beer using route params at the details page.

Vue have a large article comparing many libraries/frameworks.

https://vuejs.org/v2/guide/comparison.html


## Installing the projects
#### Polymer
```bash
cd polymer-punk-brew
bower install
npm install
polymer serve
---------------
I have added browsersync so you can also run:
npm run start
```

#### React
```bash
cd react-punk-brew
npm install
npm run start
```

#### Vue
```bash
cd vue-punk-brew
npm install
npm run start
```





## Polymer
https://www.polymer-project.org/

#### CLI
https://www.polymer-project.org/2.0/start/install-2-0

Provides several options to bootstrap an element or project.
`polymer-2-stater-kit` provides a template with routing set up and some layout but in most cases you'll end up tearing this down so it's more likely you'll want `polymer-application` which doesn't include routing.
This project used `polymer-application`.

- Both include a local server and build tasks provided by `npm` scripts.
- Tests.
- Does not have live reloading built in.

#### Routing
https://www.polymer-project.org/2.0/toolbox/routing
- Uses multiple HTML components to build a router.
- Non intuitive params definition and data flow.
- No standard way of reacting to route changes.
- Deprecated page transition element. 😔
- Would recommend a different solution, backend or another JS library.

#### Templating
https://www.polymer-project.org/2.0/docs/devguide/dom-template

- Uses HTML with custom `<template>` elements for loops and conditional rendering.
- Interpolation of variables has one way `[[x]]` data flow or two way `{{x}}`.

a for loop:
```HTML
<template is="dom-repeat" items="[[brews]]" as="beer">
  <punk-beer-card beer="[[beer]]"></punk-beer>
</template>
```

#### API
https://www.webcomponents.org/element/PolymerElements/iron-ajax

- Easy to use `<iron-ajax>` element by the Polymer team.
- Some parts are missing from the docs.
- Could use any other HTTP library.

```HTML    
<iron-ajax
  auto
  url="https://api.punkapi.com/v2/beers"
  handle-as="json"
  last-response="{{brews}}"
  debounce-duration="300">
</iron-ajax>
```





## React
https://facebook.github.io/react/

#### CLI
https://facebook.github.io/react/docs/installation.html

No setup options, just scoffolds out a basic app with `src` and `public` folders.
- Local server and build tasks provided by `npm` scripts.
- Live reloading.
- Tests.

#### Routing
https://reacttraining.com/react-router/ (v4)
- Uses muliple components from the `react-router` package.
- As expected params definition.
- Standard way of reacting to route changes.
- Well documented.
- Component has access to params through `this.props.match`.

#### Templating
https://facebook.github.io/react/docs/introducing-jsx.html

- Uses JSX - Basically syntaxical sugar for writing HTML in JS. (Optional but highly recommended)
- Uses JS for loops and conditional rendering.
- Interpolation is either with `{}` syntax in JSX or plain JS variables.

a for loop:
```javascript
  this.state.beers.map((beer, i) => <BeerCard key={i} beer={beer} />
```

#### API
https://github.com/mzabriskie/axios

- Could use any HTTP library

```javascript
axios
.get('https://api.punkapi.com/v2/beers')
.then(res => this.setState({ beers: res.data }));
```





## Vue
https://vuejs.org/

#### CLI
https://vuejs.org/v2/guide/installation.html#CLI

Highly configurable.

This project used the `webpack` template.

- Local server with live reloading and build tasks with `npm` scripts.
- Official and un-offical templates.
- Router option.
- ESLint options.
- Test options.

#### Routing
https://vuejs.org/v2/guide/routing.html
- Uses an exported `Router` object with all route definitions.
- As expected params definition.
- Standard way of reacting to route changes.
- Well documented.
- Component has access to params through `this.$route.params`.

#### Templating
https://vuejs.org/v2/guide/syntax.html

- Uses HTML with custom directives for loops and conditional rendering.
- Interpolation uses `{{}}` syntax. However they can not be used on an HTML attribute. An attribute must reference a variable. See `BeerCard.vue` for an example and [docs](https://vuejs.org/v2/guide/syntax.html#Attributes).

a for loop:
```HTML
  <beer-card v-for="beer in beers" :beer="beer" :key="beer.id"></beer-card>
```

#### API
https://github.com/mzabriskie/axios

- Could use any HTTP library

```javascript
axios
.get('https://api.punkapi.com/v2/beers')
.then(res => this.beers = res.data );
```
