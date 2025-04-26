# 🎮 Modern Tic-Tac-Toe Game

A feature-rich, responsive Tic-Tac-Toe game built with **React** and **Tailwind CSS**, featuring multiple themes, player customization, game history tracking, and persistent storage.

## Deployment

-   **Live Website**: [https://tic-tac-toe-jet-psi.vercel.app](https://tic-tac-toe-jet-psi.vercel.app)

## 🌟 Features

### 🎯 Core Gameplay

-   Classic **3x3 Tic-Tac-Toe** mechanics
-   **Two-player turn-based system**
-   **Win detection** with highlighted winning line
-   **Draw detection** when the board is full
-   **Game timer** tracking match duration
-   **Reset game** to start fresh

### ⚡ Advanced Features

#### 🎭 Customizable Player Names

-   Set custom **Player X and O** names
-   Names persist across **sessions**

#### 🕒 Game History & Time Travel

-   Complete **move history** with timestamps
-   **Jump to any previous game state**
-   **Sort moves** (Ascending/Descending)
-   History persists across sessions

#### 📊 Statistics Tracking

-   Tracks **win counts** for both players
-   Tracks **total draws**
-   **Persistent** across browser sessions

#### 🎨 Theme System

Choose from **three visually distinct themes**:

1. **Light Theme** – Clean, modern UI with blue accents
2. **Dark Theme** – Dark mode for reduced eye strain
3. **Colorful Theme** – Vibrant gradient backgrounds

### 🛠️ Technical Features

-   **Fully responsive** (mobile-first)
-   **Local Storage Integration** for persistence
-   **Modular component-based architecture**
-   **Optimized re-renders** for smooth UI
-   **Accessibility-friendly design**

## 🏗️ Technology Stack

| **Tech**                      | **Usage**          |
| ----------------------------- | ------------------ |
| **React 18**                  | Frontend framework |
| **Tailwind CSS**              | Styling & theming  |
| **Lucide React, Material UI** | Icons              |
| **Vite**                      | Fast build tool    |
| **React Hooks**               | State management   |
| **Local Storage API**         | Persistent data    |

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── GameBoard.jsx     # Main game grid
 │   ├── GameHistory.jsx   # Move history
 │   ├── GameSettings.jsx  # Settings panel
 │   ├── GameStatistics.jsx     # Win & draw tracking
 │   ├── Header.jsx        # Application header
 │   └── Footer.jsx        # Application footer
 ├── App.jsx               # Main application
 ├── App.css               # Global styles
 └── index.js              # Entry point
```

## 🚀 Getting Started

### 🔧 Prerequisites

Ensure you have **Node.js (v22 or higher)** installed.

### 📥 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/TheUzair/tic-tac-toe.git
    cd tic-tac-toe
    ```

2. Install dependencies:

    ```bash
    npm install   # or yarn install
    ```

3. Start the development server:

    ```bash
    npm run dev   # or yarn dev
    ```

4. Open in browser:
    ```
    http://localhost:5173
    ```

## 🎮 How to Play

-   **Start Game**: Player X begins
-   **Make a Move**: Click an empty square
-   **Alternate Turns**: Players take turns placing marks
-   **Win**: Get three in a row (horizontal, vertical, or diagonal)
-   **Game Features**:
    -   Customize player names
    -   Toggle between themes
    -   View and navigate move history
    -   Reset game anytime

## 💾 Persistent Storage

The game automatically saves:  
✅ Player Names  
✅ Game Statistics  
✅ Selected Theme  
✅ Move History

## 🎨 Customization

### 🖌️ Modify Themes

Edit **`src/utils/theme.js`** to:

-   Adjust colors & backgrounds
-   Change button styles
-   Modify card layouts

### ⚙️ Customize Game Settings

Modify **`GameSettings.jsx`** to:

-   Adjust player name constraints
-   Add new themes
-   Modify default settings

## 🔧 Development

### 📜 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### 🛠️ Adding Features

1. Create a new component in `src/components`
2. Add utility functions in `src/utils` if needed
3. Import and integrate into `App.jsx`
4. Update the **README** accordingly

## 🤝 Contributing

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

## 👏 Acknowledgments

-   **React.js** – The amazing framework
-   **Tailwind CSS** – Utility-first styling
-   **Lucide React** – Elegant icons
-   **The Open Source Community** – For inspiration and contributions
