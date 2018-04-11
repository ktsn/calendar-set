#!/bin/bash

set -eu

cd $(dirname $0)

git init
git remote add origin git@github.com:ktsn/calendar-set.git
git checkout -b gh-pages

git add .
git rm --cached deploy.sh
git commit -m "updated: $(date '+%Y/%m/%d %H:%M:%S')"

git push origin gh-pages --force

rm -rf .git