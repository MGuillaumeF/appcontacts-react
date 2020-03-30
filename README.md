To see application [Click Here](https://mguillaumef.github.io/appcontacts-react/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

**Note: this is an extention of project by GitHub and `gh-pages` module**

> Require `npm install --save-dev gh-pages`

This command build project and upload result on GitHub page of repository 
The `homepage` is defined in the `package.json` file

### `npm run dev-doc`

**Note: this is a documentation extention, `styleguidist` module**

> Require `npm install --save-dev react-styleguidist`

Here we use TypeScript so styleguidist need `doc-gen` module

> Require `npm install --save-dev react-docgen-typescript`

And configuration file with content :

```js
module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse
}
```
The command start documentation server, the documentation is built with `.md` Files in `components` directory

### `npm run build-doc`

**Note: this is a documentation extention, `styleguidist` module**

> Require `npm install --save-dev react-styleguidist`

Here we use TypeScript so styleguidist need `doc-gen` module

> Require `npm install --save-dev react-docgen-typescript`

And configuration file with content, the `dangerouslyUpdateWebpackConfig` function is to set static names for output files :

```js
module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    dangerouslyUpdateWebpackConfig(webpackConfig, env) {
		webpackConfig.output.filename = 'build/bundle.js'
		webpackConfig.output.chunkFilename = 'build/[name].js'
		return webpackConfig
	}
}
```

The command build documentation, the documentation is built with `.md` Files in `components` directory

The output is in a `styleguidist` folder

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### npm install -g 

`npm install -g create-react-app`


`npx create-react-app appcontacts --template typescript`

### npm install --save-dev

- cypress
- mocha
- mochawesome
- gh-pages
- react-docgen-typescript
- react-styleguidist

### npm install --save

- @material-ui/core
- @fortawesome/fontawesome-free
- bootstrap
- react-router-dom
- redux
- typescript
