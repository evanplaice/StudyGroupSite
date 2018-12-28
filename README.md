## StudyGroupSite

The project aims to build a study group website for our Javascript group. The site will contain basic information about the study group, upcoming meetups, projects, etc.

## Motivation

Our key motivation for the project is to create a site where members can see updated information about the study group. This project is also built by our study group members. We aim to create more projects like this where we can collaborate and learn together.

## Tech Stack

- React (project started with create-react-app)
- CSS: Sass, styled components and semantic-ui
- Express
- Nodejs
- Reach Router

## Installation

    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    ## Available Scripts

    In the project directory, you can run:

    ### `npm start`

    Runs the app in the development mode.<br>
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br>
    You will also see any lint errors in the console.

    ### `npm test`

    Launches the test runner in the interactive watch mode.<br>
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    ### `npm run build`

    Builds the app for production to the `build` folder.<br>
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.<br>
    Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

    ### `npm run eject`

    **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

    Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

    ## Learn More

    You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

    To learn React, check out the [React documentation](https://reactjs.org/).

## Contribute

    ## Features
    * About- Contains brief about what the site is about etc
    * Projects- Contains all the projects- on-going or done - by study group members, so anybody can join and contribute to any project
    * Resources- Contains links to all cool study group related learning material out there (also an upvote button, so important resources show up on top).
    * Group Learning- This section currently will link to a Google Doc that will list courses that people are currently taking (for eg. Udacity/ Udemy or some JS book) . The idea is to provide an avenue for people to find other like minded people interested in the courses they are doing. Later (in version 2 of the site or later) we can improve this and bring a lot of information on the site itself, instead of going to Google Doc
    * Footer- This section will contain all other necessary information (standard footer stuff)

    ## Code style
    We are using Airbnb's JS style guide. More details can be found on https://github.com/airbnb/javascript. You are encouraged to use appropriate linters that can help with the code style.


    ## Git/ Github
    We use Git to manage our project. Our remote repository is on Github.
        ### Creating branches
        Name your branch with the `type`-`feature`(eg. this is `docs-readme`)

        ### Develop
        'Develop' is our default branch. If you are creating a new feature, please create your own branch.

        ### Master
        Please do not push any code into 'Master' or 'Develop' branch directly. The idea is to have your own branches for the features you develop.

        ### Pull request
        When you are done with your feature, you can submit a pull request to 'Develop' branch.

        ### Pushing code
        You are encouraged to push code to your remote branch in small chunks frequently. This will help avoid a lot of merge conflicts with other collaborators on your branch.

        ### Rebasing your code
         'git fetch origin develop' gets the latest code on 'Develop' branch onto your local branch.

         'git rebase −p origin/develop' rebases your code.

         Git History is relatively cleaner if you used 'git rebase' vis-a-vis 'git merge'. But again, we are not Git experts. So, if you have a good reason not to use 'git rebase', please feel free not to.

    ## Tests
    We encourage writing tests for your code. We use Jest with React-Testing-Library as our testing framework.

## License

We don't know much about licenses. But our licensing terms are as following, just in case you are interested.

BSD 3-Clause License

Copyright (c) 2018, StudyGroupSite
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

- Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
