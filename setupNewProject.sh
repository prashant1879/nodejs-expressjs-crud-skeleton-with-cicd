#!/bin/bash

# comments start with a '#'

# Install dependencies
npm i && \

# Update dependencies
npm update && \

# install pm2
npm i pm2 && \

# Install logrotate
npm run install-logrotate && \

# Format code
npm run format

# remove pm2-logrotate
pm2 delete pm2-logrotate

# start project
# npm run start

# # Remove the script file itself
# rm -- "$0"




# Example: 
# https://prashant-suthar-zealous.github.io/nodejs-expressjs-boiler-plate/