
# 🚀 CI/CD Pipeline for Deployment

This repository contains the configuration for a CI/CD pipeline that automates the deployment of a Node.js application to a production server. The pipeline is configured using GitLab CI/CD and is triggered on changes to the `main` branch.

## 🛠️ Pipeline Overview

The pipeline consists of a single stage:

- **🚀 Deploy**: Deploys the application to the production server.

### Jobs

- **`deploy_main_production`**: This job is responsible for deploying the application to the production server. It uses Node.js 20 and PM2 for process management.

---

## 📋 Prerequisites

Before using this pipeline, ensure the following:

1. **🔑 Server Access**: You have SSH access to the production server.
2. **🔧 Environment Variables**: The following environment variables must be set in your CI/CD settings:
   - `SERVER_IP`: The IP address of the production server.
   - `SERVER_USERNAME`: The username for SSH access to the server.
   - `SERVER_PASSWORD`: The password for SSH access to the server.
3. **🖥️ Node.js and PM2**: The production server should have Node.js 20 and PM2 installed. The pipeline will handle the installation of these tools if they are not already present.

---

## ⚙️ Pipeline Configuration

The pipeline is defined in the `.gitlab-ci.yml` file. Below is a breakdown of the configuration:

### Stages

- **🚀 Deploy**: This stage handles the deployment of the application to the production server.

### `deploy_main_production` Job

- **🐋 Image**: Uses the `node:20` Docker image for compatibility.
- **📜 Before Script**:
  - Updates the package list and installs `sshpass` and `curl`.
  - Installs Node Version Manager (nvm) and uses it to install Node.js 20.
  - Installs PM2 globally.
  - Sets up SSH access to the production server.
- **🛠️ Script**:
  - Connects to the production server via SSH.
  - Pulls the latest changes from the `main` branch.
  - Installs dependencies using `npm install`.
  - Restarts the application using PM2.
- **🎯 Only**: This job runs only on the `main` branch.

---

## 🚀 How to Use

1. **📥 Clone the Repository**: Clone this repository to your local machine.
2. **🔧 Set Environment Variables**: Ensure that the required environment variables (`SERVER_IP`, `SERVER_USERNAME`, `SERVER_PASSWORD`) are set in your CI/CD settings.
3. **🔄 Push to Main**: Push changes to the `main` branch to trigger the pipeline.

---

## 🚨 Troubleshooting

- **🔐 SSH Issues**: Ensure that the `SERVER_IP`, `SERVER_USERNAME`, and `SERVER_PASSWORD` environment variables are correctly set.
- **🖥️ Node.js Version**: If you encounter issues with Node.js, ensure that the correct version (Node.js 20) is installed on the server.
- **📄 PM2 Logs**: If the application fails to start, check the PM2 logs for more information.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Want to Learn More? 🤓

If you're interested in diving deeper into Node.js, DevOps, and other tech topics, follow me on Medium for more insightful articles and guides! ✨

👉 [Follow me on Medium!](https://prashant1879.medium.com/) 📚

Stay tuned and keep coding! 👨‍💻👩‍💻