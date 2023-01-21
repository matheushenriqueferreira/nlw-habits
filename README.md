<h1 align="center">HABITS</h1>

## :memo: Descrição do Projeto

<p align="center">Aplicativo de controle de hábitos.</p>

## Tabela de Conteúdo
<!--ts-->
   * [Descrição do Projeto](#memo-descrição-do-projeto)
   * [Rodar aplicação](#hammer_and_wrench-rodar-aplicação)
       * [Server](#gear-server)
       * [Web](#computer-web)
       * [Mobile](#iphone-mobile)
   * [Rotas do servidor](#left_right_arrow-rotas-do-servidor)
   * [Tecnologias utilizadas](#hash-tecnologias-utilizadas)
   * [Créditos](#copyright-créditos)
<!--te-->

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
- [Vite + React + TS ](https://vitejs.dev/) - WEB.
- [Expo + React Native](https://expo.dev/) - Mobile.
- [VS Code](https://code.visualstudio.com/) - Editor de código.
- [Android Studio](https://developer.android.com/studio) - Emulador Android.
- [Zulu JDK](https://www.azul.com/downloads/?package=jdk) - Java 17 LTS.

## :copyright: Créditos

| [<img src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width=115><br><sub>Rocketseat Education</sub>](https://github.com/rocketseat-education) |  
| :---: |
