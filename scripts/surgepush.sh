#!/bin/bash
set +x

git yolo
cd gatsby-auth
gatsby build
cd public
surge

