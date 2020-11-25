#!/bin/bash
set +x

git yolo
cd ../src/gatsby-auth
gatsby build
cd public
surge

