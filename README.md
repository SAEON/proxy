# SAEON/Proxy

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Quick start](#quick-start)
  - [Endpoints](#endpoints)
- [Deployment](#deployment)
- [Environment configuration](#environment-configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Quick start
```sh
npm install -g chomp
npm install
chomp --watch
```

## Endpoints
- http://localhost:8001
- http://localhost:8002 (Nice realtime UI, which is the reason I chose AnyProxy)

# Deployment
TODO

# Environment configuration
Default configuration values can be found in [src/config.js](src/config.js). To update the default values, create a `.env` file in the root of the API service source code and specify variables to overwrite.
