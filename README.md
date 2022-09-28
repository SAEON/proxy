# SAEON/Proxy
A deployment of the Node.js AnyProxy open source library. I chose AnyProxy because of the realtime UI.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Quick start](#quick-start)
- [Deployment](#deployment)
- [Environment configuration](#environment-configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Quick start
Run the following commands to start the service on your local machine, and then read the logs for endpoint information.

```sh
npm install -g chomp
npm install
chomp --watch
```

# Deployment
TODO

# Environment configuration
Default configuration values can be found in [src/config.js](src/config.js). To update the default values, create a `.env` file in the root of the API service source code and specify variables to overwrite.
