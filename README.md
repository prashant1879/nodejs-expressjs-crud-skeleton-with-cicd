


## Software Requirements

- [Node](https://nodejs.org/en/download/)
- [ExpressJS](https://www.npmjs.com/package/express)
- [MongoDB](https://www.mongodb.com/)

## How to Install

### Using Git (recommended)

1. Clone the project from GitHub. Change `node-express-skeleton` to your project name:

   ```bash
   git clone https://github.com/Zealous-System-Pvt-Ltd/node-express-skeleton ./node-express-skeleton
   ```

### Using Manual Download ZIP

1. Download the repository.
2. Uncompress it to your desired directory.

### Install & setup boiler-plate project.

```bash
cd node-express-skeleton
sh setupNewProject.sh
```

### Setting up `.env` File

1. Create a `.env` file in the root of your project (same level as `app.js`).

   Example `.env` file:

   ```env
   PORT=3000
   DB_URI=mongodb://localhost:27017/mydatabase
   JWT_SECRET=your_jwt_secret_key
   ```

2. The `.env` file is used to store environment-specific variables such as the port number, database URI, and JWT secret. Ensure you **do not commit** this file to version control. To prevent this, add it to `.gitignore`:

   ```bash
   # .gitignore
   .env
   ```

### Setting up Environments for Different Environments (Optional)

1. You will find configuration files `config/development.js` and `config/production.js` in the `config` directory. These are used for environment-specific settings.
2. You can create additional environment files if needed.

## Project Structure

```sh
.
├── app.js
├── routes.js
├── ecosystem.config.js
├── package.json
├── .prettierrc
├── .env
├── .gitignore
├── README.md
├── setupNewProject.sh
├── log
│   ├── bolier-plate-combined.log
│   ├── bolier-plate-error.log
│   └── bolier-plate-out.log
├── config
│   ├── constants.js
│   ├── development.js
│   └── production.js
└── app
    ├── controllers
    │   ├── categories.controller.js
    │   └── user.controller.js
    ├── helpers
    │   ├── auth.helper.js
    │   ├── common.helper.js
    │   ├── error.js
    │   ├── logging.js
    │   └── validation.js
    ├── models
    │   ├── category.model.js
    │   └── user.model.js
    └── routes
        ├── categories.routes.js
        └── user.routes.js
```


## How to Setup boiler-plate

### Running the API Server Locally

After setting up the `.env` file, run the server with the following command:

```bash
node app.js --env development
```

This will start the server with the environment variables you set in the `.env` file.

---

With these updates, your documentation will guide users on how to set up the `.env` file properly and integrate it into their project.

## How to Run

### Running the API Server Locally

After setting up the `.env` file, run the server with the following command:

```bash
node app.js --env development
```

This will start the server with the environment variables you set in the `.env` file.

---

### Want to Learn More? 🤓

If you're interested in diving deeper into Node.js, DevOps, and other tech topics, follow me on Medium for more insightful articles and guides! ✨

👉 [Follow me on Medium!](https://prashant1879.medium.com/) 📚

Stay tuned and keep coding! 👨‍💻👩‍💻