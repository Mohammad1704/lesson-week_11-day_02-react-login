# Authentication with React

![gandalf](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiF7i_5WSAm3q4oDtBif7ssHRKpQcNMY4mvWrYzOlIdDCgpwmtA)

# Clone The repo

In this repo you have an express app that have a login route it was what we did in [lesson-week_11-day_01-expres-auth-with-passport](https://github.com/wdi-infinity/lesson-week_11-day_01-expres-auth-with-passport) but with a little bit of refactoring

## Run the backend Server

```
npm install
npm start
```

# React App

## Install dependencies

```
npm install
npm install jwt-decode
```

## Run the app

```
npm start
```

## add a service

```
import jwtDecode from "jwt-decode";

const tokenKey = "authToken";

function setJwt(token) {
  localStorage.setItem(tokenKey, token);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    console.log(ex);
  }
}

```
