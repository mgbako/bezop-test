# Bezop Test Project

![Build Status][ci-badge]

This Repository contains the code for the [Bezop Test Project][step-1]. Please see below for instructions on configuring, running,
and deploying this test project.

[ci-badge]: https://storage.googleapis.com/nodejs-getting-started-tests-badges/1-tests.svg
[step-1]: https://bezop-project-205420.appspot.com

# Simple instructions

1.  Install [Node.js](https://nodejs.org/en/).
2.  Create a [Google Cloud Platform project](https://console.cloud.google.com).
3.  Install the [Google Cloud SDK](https://cloud.google.com/sdk/).

    * After downloading the SDK, initialize it:

                gcloud init

4.  Clone the repository:

        git clone https://github.com/mgbako/bezop-test.git

5.  Change directory:

        cd nodejs-getting-started/bexop-test

6.  Install dependencies using NPM or Yarn:

    * Using NPM:

            npm install

    * Using Yarn:

            yarn install

7.  Start the app using NPM or Yarn:

    * Using NPM to start the development server
      `npm run dev`

    * Using NPM:

            npm start

    * Using Yarn:

            yarn start

8.  View the app at [http://localhost:5000](http://localhost:5000).

9.  Stop the app by pressing `Ctrl+C`.

10. Deploy the app:

        gcloud app deploy

11. View the deployed app at [https://YOUR_PROJECT_ID.appspot.com](https://YOUR_PROJECT_ID.appspot.com).
