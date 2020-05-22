# React + GitHub API

React application to view a list of GitHub repositories with search functionality.

Think about how you would approach the task and try to describe your decisions in the Readme file. We want to find out how you think, how you approach problems and how you communicate your decision and solutions. Imagine you have received this task as a Jira ticket and explain how you build it step by step.


## The Approach
I decided to use create-react-app with typescript. Why Typescript? It gives clarity on what is the component about, what are the props, states and etc.

The main file is on the `src/App.tsx`, consist the search input and rendering the repository lists component. `<SearchInput />` is a component where it's duty is to take the search input of the user and has a button. `<App />` will be taking care of the `onSearchInput` event prop that will make a service api `searchRepository` call to the github api, the service will return a lists of repositories. On making the search request `<Spinner/>` will be showed and then when the api will have a response we will set our state that will be containing our repository list and `<RepoList />` will be rendered. I use the approach of smart and dumb components so that it's scalable and easy to use.

For the http request I prefer to us `axios` because It's simple, lightweight and easy to customize.

For the styling I leverage the bootstrap.

### Packages
- axios
- reactstrap
- bootstrap

### File Structure
- src/components/*: All the components of our application.
- src/services/*: All the api services.
- src/helpers/*: Shared utility helpers
- src/index.tsx: entry point


## Installation

```bash
yarn
```

## Start App

```javascript
yarn start
```
