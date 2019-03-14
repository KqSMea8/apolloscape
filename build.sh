#!/bin/bash
fis3 -d ./dist release prod
cd ./dist
tar zcvf app.tar.gz *
cd ..
mv ./dist/app.tar.gz .
rm -rf ./dist
mkdir output
cp -rf app.tar.gz output

