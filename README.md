# Pet Shop API 🐾🏪
Aplicação de estudos com a finalidade de simular uma API de um Pet Shop.

## 💻 Tecnologias utilizadas:
* 📜 JavaScript
* 📦 Node.js
* 🌐 Express.js
* 🔄 Nodemon
* 🔀 CORS
* 🔑 Dotenv
* 🐘 Pg
* 🐘 ElephantSQL

## 🐱 Sobre o projeto
Resolução de um exercício proposto no bootcamp Node.js da instituição IGTI, foi desenvolvido a criação de tabelas via ElephantSQL, sua respectiva conexão e os endpoints descritos na sessão "🏁 Endpoints".

## 👀 Observações
* O arquivo ```.env.example``` deve ser renomeado para ```.env``` e preenchido corretamente com a string de conexão.
* Para iniciar o projeto, execute o comando ```npm run dev```.

## 📊 Diagrama ER
![Alt text](./assets/imgs/image.png)

## 🏁 Endpoints
### Donos:
* **localhost:3333/owners...**
  * ``/getowners``
  * ``/makeowners``
  * ``/updateowners``
  * ``/deleteowners/:owner_id``
  * ``/getOwnerbyid/:owner_id``
### Animais:
* **localhost:3333/animals...**
  * ``/getanimals``
  * ``/makeanimals``
  * ``/updateanimals``
  * ``/deleteanimals/:animals_id``
  * ``/getanimalsbyid/:animals_id``
  * ``/getanimalsbyowner/:owner_id``