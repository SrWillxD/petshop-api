# Pet Shop API 🐾🏪
Aplicação de estudos com a finalidade de simular uma API de um Pet Shop.

## 💻 Tecnologias utilizadas:
* 📜 JavaScript
* 🌐 Express
* 🔄 Nodemon
* 🔀 Cors
* 🔑 Dotenv
* 🐘 Pg
* 🐘 ElephantSQL

## 🐱 Sobre o projeto

## 👀 Observações
* O arquivo ```.env.example``` deve ser renomeado para ```.env``` e preenchido corretamente com a string de conexão.
* Para iniciar o projeto, execute o comando ```npm run dev```.

## 📊 Diagrama ER
![Alt text](./assets/imgs/image.png)

## 🏁 Endpoints
### Donos:
* ``/getowners``
* ``/makeowners``
* ``/updateowners``
* ``/deleteowners/:owner_id``
* ``/getOwnerbyid/:owner_id``
### Animais:
* /getanimals
* /makeanimals
* /updateanimals
* /deleteanimals
* /getanimalsbyid/:animals_id
* /getanimalsbyowner/:owner_id