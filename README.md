# ViaMaker Challenge - Back-End

```batch
bun install | yarn install
```

## 🧞 Commands

To execute command terminals, I highly suggest using Bun, however it requires WSL or Linux, so if you don't want to install a Linux subsystem, use Yarn instead.
All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :---------------------| :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:300`      |
| `bun build`           | Build your production site to `./build/`          |
| `bun preview`         | Preview your build locally, before deploying     |

## 💻 Enviroment

In the e-mail I sent, there will be the .env variables needed to run the front-end and back-end,
and they are not built in for security reasons.

Refer to the .env.example for use, and create a .env file on the root of the project.
It should look something like this:

```env
ENV=development (anything but I recommend development)
PORT=*number*
IP=YOUR_IP
DATABASE_NAME=development (any name, usually depends if it's in production or not)
DATABASE_USERNAME=MONGODB_USER
DATABASE_PASSWORD=PASSWORD
DATABASE_CUSTERNAME=CLUSTER_NAME

```

For the IP, run ipconfig on Windows or ifconfig in Linux, and paste your ip here and paste it in the .env of the front-end

## 🧑‍💻 Technologies

Technologies used include:

- Express.js
- Typescript
- MongoDB Databse + Mongoose
- Bun / Yarn for package management
