<h1 align="center">
  <img alt="DevRadar" title="DevRadar" src="docs/map.png" width="200px" />
</h1>

<h2 align="center">
  DevRadar
</h2>

<h4 align="center">
   Find a <strong>dev</strong> closer to you
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mmendesas/walnutjs?color=%2304D361">

  <a href="https://github.com/mmendesas">
    <img alt="Made by Marcio Mendes" src="https://img.shields.io/badge/made%20by-mmendesas-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## DevRadar

This project was developed following the challenges of [Semana Omnistack da RocketSeat](https://rocketseat.com.br/).

`Challenge` - Develop an application that a user could find another devs in github who knows the same tecnologies and are less than 10km away from him.

## devradar-backend

- A simple backend app using for CRUD operations and Search

  - `yarn dev` - start the backend application

  - `routes`

    - `/devs` - use CRUD operations to manage your devs
    - `/search`- find the devs using techs and location

    > you could find detailed request examples inside `docs/insomnia-devradar.json` file

## devradar-web

  <div align="left">
    <img alt="preview" src="docs/devradar-desk.png" width="70%" />
  </div>

- The admin where you could register new devs defining the location and the tecnologies

## devradar-mobile

  <div align="left">
    <img alt="preview" src="docs/devradar-mobile.png" width="30%" />
  </div>

- The `mobile` client where the user could search for another devs
