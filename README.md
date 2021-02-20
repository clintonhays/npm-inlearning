# npm-inlearning

## What

This is my repo for working through the inLearning NPM course.

## Why

I will use this repo to test the code in the course and to keep track of the things I learn. I will focus on documentation as I go and end with a repo that I can look back at when I have any questions about NPM.

### Notes

1. Set up a simple express server.

2. Initialize package.json with our test package.

Install express using terminal and npm install express. Notice that express was added as a dependency in the package.json file and that a new nodule_modules folder has appeared. Packages can be installed locally or globally. Locally installs the package only in the working directory.

3. Install babel using npm install babel-cli babel-preset-stage-0 babel-preset-es2015 --save-dev

This installs babel as a dev dependency only and is not included in the build of the app.

4. Install react globally

This installs react globally on your system.

5. Install create react app globally

See above^ For windows 7+ globally installed packages live in your AppData folder.

6. Checking for outdated packages

Use npm outdated.

7. Updating packages

Run npm install again and it will update the version.

8. Uninstall package

Run npm uninstall with package name

9. Semantic versioning

1.2.3 => 1(major release).2(minor release).3(patch releases)

^ will install latest version of dependencies
~ will install latest patches of the version specified,
no leading character will only install version of dependency explicitly set.

10. package-lock.json

The output of dependencies. Makes sure that your dependency versioning is consistent. package.json is the input, package-lock.json is the output. If we don't make sure our versioning is correct, our app could break.

11. npm cache

npm cache verify to verify cache and check for any issues.
npm cache clean --force will force clean the cache if any issues are present

12. npm audit

will give details about packages. Can be used to check for vulnerabilities and their possible fixes.

13. scripts

scripts are basically shortcuts for running tasks in node. scripts can be defined in package.json file. There are several predefined npm scripts. we can also build our own.

14. npx

npx temporarily uses a package without installing it.
