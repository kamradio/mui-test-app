#!/bin/bash
docker build -t mui-test-app . && docker run --name MUI_TEST_APP -d -p 0.0.0.0:4000:3000 mui-test-app
