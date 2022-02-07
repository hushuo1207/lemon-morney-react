#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd build

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>axing-website.gitee.io
#git push -f  git@gitee.com:axing-website/lemon-account-react-website.git master:gh-pages

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hushuo1207/lemon-account-react-website.git master:gh-pages

cd -



#// gitee
#git remote add origin git@gitee.com:axing-website/lemon-account-react-website.git

#//github

#git remote add origin git@github.com:hushuo1207/lemon-account-react-website.git
