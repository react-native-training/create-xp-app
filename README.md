![create-xp-app](http://reactnative.training/createxpapp.png)

### [ReactXP](https://github.com/Microsoft/reactxp)  Project Generator

This app works on React Native (iOS, Android) and web. Most of the app's code is contained in App.tsx.

The commands in the instructions below assume you are in the root of this repo.

## To get started, install the create-xp-app cli globally   
```
npm i -g create-xp-app
```

## To create a new ReactXP app

1. Run create-xp-app new <projectName>   
```
create-xp-app new MyProject
```

2. Install dependencies   
```
npm install or yarn
```

### To run on web:   

1. Run npm run web-watch   
```
npm run web-watch
```

This compiles the TypeScript code and recompiles it whenever any files are changed.

2. Open index.html in your browser to view the result.

### Building for React Native (iOS, Android, Windows)   

1. Run npm run rn-watch   
```
npm run rn-watch  
``` 

This compiles the TypeScript code and recompiles it whenever any files are changed.

2. In another command prompt run npm start   
```
npm start
```

This starts the React Native Packager.

Use the command line, Xcode or Android Studio to build and deploy the native app code just like you would with any other React Native project.