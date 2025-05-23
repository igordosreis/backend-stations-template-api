#!/usr/bin/env sh

pm2 start ./dist/main.js --name energy-api;
pm2 logs;
