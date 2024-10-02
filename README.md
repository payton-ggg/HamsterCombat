# 🐹 Hamster Combat Background Worker

This background worker automates your earnings in **Hamster Combat**, allowing you to generate rewards automatically and regularly without manual intervention.

## 🚀 Features
- **Automatic Earnings**: Earn rewards in Hamster Combat effortlessly.
- **Regular Updates**: The worker ensures continuous operation, generating rewards at regular intervals.
- **Easy Setup**: Quick and simple to configure with your Telegram authorization key.
- **Server Deployment**: Easily deploy your app on a server using **Railway** for seamless operation.

## 🛠️ Getting Started

### Prerequisites
- **Telegram**: You’ll need to retrieve your authorization key from Telegram’s console view.
- **Railway**: We recommend using [Railway](https://railway.app/) to deploy the worker on a server for continuous operation.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/payton-ggg/HamsterCombat
   cd HamsterCombat
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Deploy your app on Railway:
   - Sign up or log in to [Railway](https://railway.app/).
   - Connect your repository and deploy your app on their platform.

4. Start the background worker locally (optional):
   ```bash
   npm start
   ```

## 🎮 How It Works

1. The worker regularly fetches data from the Hamster Combat servers.
2. Based on predefined logic, it automatically initiates actions that generate rewards.
3. The rewards are accumulated over time without any manual input from your side.

## 🌐 Deployment Options

Although we recommend **Railway**, you can deploy the app on any cloud platform or server that supports Node.js. Other alternatives include:
- **Heroku**
- **Vercel**
- **Render**

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
