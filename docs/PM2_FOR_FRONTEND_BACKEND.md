# Backend and Frontend Deployment with PM2 on QA Server 🚀

This guide will walk you through deploying both backend and frontend projects using PM2 on the QA Server. 😎

---

## Prerequisites ✅

- Ensure that your server supports Node.js v18 (LTS) or above.
- QA Server requires Node.js v18 or higher.
- For the backend, make sure you have a `.env` file for environment variables like `APP_NAME`, `PORT`.

---

## Backend Deployment Steps 🖥️

### 1. Install PM2 and Log Rotation

In the `package.json` file of your backend project, add the following code to the `scripts` section:

```json
"scripts": {
  "start": "pm2 start ecosystem.config.js",
}
```

---

### 2. Create `ecosystem.config.js` 🔧

Create a file named `ecosystem.config.js` in the root of your backend project and add the following code:

```javascript
require('dotenv').config();

module.exports = {
  apps: [
    {
      name: `${process.env.APP_NAME}-backend-${process.env.PORT}`,
      port: process.env.PORT,
      script: './app.js',
      watch: false,
    },
  ]
};
```

> Make sure to replace `6000` with the actual port number for your backend project (e.g., `6000` series). 🚪

---

### 3. Start the Backend Project ⚙️

To start the backend project using PM2, run the following command:

```bash
pm2 start ecosystem.config.js
```

Alternatively, you can also run:

```bash
npm run start
```

This will start the backend server using PM2, and it will also set up log rotation. 📊

---

## Frontend Deployment Steps 🌐

### 1. Build the Frontend Project 🏗️

If you have a ReactJS-based frontend, make sure to build the project before deploying it:

```bash
npm run build
```

---

### 2. Create `start.sh` File 📝

Create a file named `start.sh` in the root directory of your frontend project with the following content:

```bash
#!/bin/bash
# How to run:
# pm2 start --name PROJECT-NAME-frontend-PORT ./start.sh
npx serve -s build -p 5000
```

> Make sure to replace `5000` with the actual port number for your frontend project (e.g., `5000` series). 🚪

---

### 3. Start the Frontend Project 🚀

After creating the `start.sh` file, run the following command to start the frontend project using PM2:

```bash
pm2 start --name PROJECT-NAME-frontend-PORT ./start.sh
```

Replace `PROJECT-NAME` with your frontend project’s name and `PORT` with the port number, for example, `5000`. 🌟

---

## PM2 Management 🛠️

To manage your PM2 processes, you can use the following commands:

- To check the status of your PM2 processes:
  ```bash
  pm2 status
  ```

- To view the logs:
  ```bash
  pm2 logs
  ```

- To stop all PM2 processes:
  ```bash
  pm2 stop all
  ```

- To restart all PM2 processes:
  ```bash
  pm2 restart all
  ```

- To delete all PM2 processes:
  ```bash
  pm2 delete all
  ```

---

## 🚀 Boilerplate Repository 📥

Please download the boilerplate repo from this [🔗 link](https://github.com/Zealous-System-Pvt-Ltd/node-express-skeleton) and get started! 🛠️

---

## Important Notes for Codebase ⚠️

### 1. Ensure `start.sh` and `ecosystem.config.js` Are Part of Your Codebase 📂

To avoid conflicts when performing a `git pull`, make sure that both the `start.sh` file (for the frontend) and the `ecosystem.config.js` file (for the backend) are included in your version control system (e.g., Git). This way, everyone working on the project will have these necessary configuration files in place and will not run into conflicts during collaboration. 👨‍💻👩‍💻

---

### 2. Avoid Conflicts During Git Pull 🛑

Since these configuration files (`start.sh` and `ecosystem.config.js`) are essential for deploying and running the application, ensure they are tracked in the repository. If these files are excluded from version control (e.g., through `.gitignore`), it might lead to issues where other developers or servers miss these files after a `git pull`. 🔄

---

## Conclusion 🎉

Now both the backend and frontend projects should be running on the QA Server using PM2 configured. You can manage both projects through PM2 commands to ensure they're running smoothly. 🚀

---

### Want to Learn More? 🤓

If you're interested in diving deeper into Node.js, DevOps, and other tech topics, follow me on Medium for more insightful articles and guides! ✨

👉 [Follow me on Medium!](https://prashant1879.medium.com/) 📚

Stay tuned and keep coding! 👨‍💻👩‍💻