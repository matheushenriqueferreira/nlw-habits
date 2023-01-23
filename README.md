<h1 align="center">
  <img src="https://raw.githubusercontent.com/matheushenriqueferreira/nlw-habits/077f1ce619545e66c624513b43489eb0e5097d13/web/src/assets/logo.svg" />
</h1>

## :pushpin: Tabela de conteúdo
<!--ts-->
   * [Descrição do Projeto](#memo-descrição-do-projeto)
   * [Diagrama entidade relacionamento](#information_source-diagrama-entidade-relacionamento)
   * [Rodar aplicação](#hammer_and_wrench-rodar-aplicação)
       * [Server](#gear-server)
       * [Web](#computer-web)
       * [Mobile](#iphone-mobile)
   * [Rotas do servidor](#left_right_arrow-rotas-do-servidor)
   * [Tecnologias utilizadas](#hash-tecnologias-utilizadas)
   * [Créditos](#copyright-créditos)
<!--te-->

## :memo: Descrição do projeto

<p align="center">Aplicação Web e Mobile de controle de hábitos, desenvolvido durante o evento NLW SETUP da Rocketseat</p>

## :information_source: Diagrama entidade relacionamento
<div align="center">
    <img width=400 src="https://raw.githubusercontent.com/matheushenriqueferreira/nlw-habits/1195aca4b8b7f5bc5482e3ebf97131c49c7271f6/server/prisma/ERD.svg" />
</div>

## :hammer_and_wrench: Rodar aplicação
### :gear: Server
    # Acesse a pasta do projeto baixado no terminal/cmd
    $ cd server

    # Instale as dependências
    $ npm install

    # Execute o server
    $ npm run dev

### :computer: Web
    # Acesse a pasta do projeto baixado no terminal/cmd
    $ cd web

    # Instale as dependências
    $ npm install

    # Execute a aplicação
    $ npm run dev

### :iphone: Mobile
    # Acesse a pasta do projeto baixado no terminal/cmd
    $ cd mobile

    # Instale as dependências
    $ npm install

    # Emular o sistema android

    # Execute a aplicação
    $ npx expo start

    # Pressione a tecla 'A' no terminal/cmd quando solicitado para instalar o expo no dispositivo android

## :left_right_arrow: Rotas do servidor
|  Método  |  URL               |
| -------- | ------------------ |
|  POST    | /habits            |
|  GET     | /day               |
|  GET     | /summary           |
|  PATCH   | /habits/:id/toggle |

## :hash: Tecnologias utilizadas

- [Node JS](https://nodejs.org/en/) - v18.13.0 LTS.
- [Prisma](https://www.prisma.io/) - ORM.
- [Vite + React + TS ](https://vitejs.dev/) - WEB.
- [Expo + React Native](https://expo.dev/) - Mobile.
- [VS Code](https://code.visualstudio.com/) - Editor de código.
- [Android Studio](https://developer.android.com/studio) - Emulador Android.
- [Zulu JDK](https://www.azul.com/downloads/?package=jdk) - Java 17 LTS.

## :copyright: Créditos

| [<img src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width=115><br><sub>Rocketseat Education</sub>](https://github.com/rocketseat-education) |  
| :---: |
