# STORE-PARTS-EXERCISE

## 🛠 Getting started

- You must first clone the repository using your terminal
```zsh
git clone https://github.com/GuiADR
```
 -  or download the zip from the green button at the beginning of the repository

<img src="https://i.ibb.co/3mLnKMH/clone.png" alt="Download zip" border="0">

- Then you must navigate through the terminal into the repository folder and install the dependencies
  ```zsh
  cd pah_folder
  ```
  - you can install all dependencies (API and frontend) with the command
  ```zsh
  yarn install-all 
  ``` 
  or

  ```zsh
  npm rum install-all 
  ```

  - if you don't need to install the api, you can run 
  ```zsh
  yarn
  ```
     or 

  ```zsh
  npm install
  ```
- You must rename the .env.example file to .env and in case it is necessary to change the api's working port
## Available Scripts

In the project directory, you can run:

### `yarn start-all`
or
### `npm rum start-all`

the above command starts all services (api and frontend), in case the api is already working and you only need to start the frontend, you can run:

### `yarn start`
or
### `npm start`

