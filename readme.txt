…or create a new repository on the command line

echo "# King" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/CDSeattleMEAN032017/King.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/CDSeattleMEAN032017/King.git
git push -u origin master

Create a new project

Step 1
mkdir projectName
cd projectName

Step 2
npm init -y

Step 3
npm install express --save
npm install ejs --save
npm install body-parser --save