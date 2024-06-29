# React Express Boiler Plate

1. This repository contains setup for
   1. JS / JSX mode -> `js-based-setup`
   2. TS / TSX mode -> `ts-based-setup`
2. This is a light weight repository consisting react + express setup for starting a project/test project

# Technology Stack Present

1. React JS (v18.3.1)
2. Express JS (v4.19.2)

# Required on System

1. Node v20 or higher (Current repo has been set on v20.11.1, refer `.nvmrc` file)

# Linters Present

1. Eslint (Please make sure to install `eslint plugin` in your vscode/sublime/any other IDE)
2. Prettier (Please make sure to install `prettier plugin` in your vscode/sublime/any other IDE)

# Steps to Get Started

1. Clone this repo in your local
2. cd to `js-based-setup` or `ts-based-setup` (Whichever suits best for you)
3. Run below system specific commands, this will automatically install defined packages in `package.json` present inside each folder
   1. `sh ./install.sh` on Linux/Mac OS
   2. `./install.bat` on Windows OS
4. Switch to your desired folder (i.e `express-app` or `react-app`) and happy coding!!
   1. For express app
      1. cd `express-app`
      2. node `index.js`
   2. For react app
      1. cd `react-app`
      2. npm start