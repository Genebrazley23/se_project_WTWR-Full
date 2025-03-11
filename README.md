
# WTWR (What to Wear?)

WTWR is a weather-based clothing recommendation app built with React and Vite. It fetches real-time weather data and suggests clothing items based on the temperature.

## 📖 Table of Contents

Features

Demo & Live Project


Technologies Used

Screenshots

Deployment & System Requirements

File Structure



## 🌟 Features

- Real-time Weather Data: Fetches and displays the current temperature in Fahrenheit.

- Clothing Recommendations: Suggests outfits based on the weather conditions.

- Interactive UI: Users can add new clothing items via modal forms.

- Responsive Design: Ensures usability on different screen sizes.

- State Management with Hooks: Efficient and modular code structure.
---


## 🎥 Demo & Live Project:
- http://express.ignorelist.com/
- https://youtu.be/HKRoVzbvoGw



## Project Requirements

### ✅ General:
- Infrastructural project files created using **Vite**.
- Project runs without errors and is properly built.
- **HTML**, **CSS**, and **JS** files are stored in the `src` folder.

### ✅ File Structure:
- **index.html** in the root folder.
- **index.css** and **main.jsx** files are present.
- **Components directory** includes:
  - `App.jsx`, `Footer.jsx`, `Header.jsx`, `ItemCard.jsx`, `ItemModal.jsx`, `Main.jsx`, `ModalWithForm.jsx`, and `WeatherCard.jsx`.
- **Vendor directory** includes `normalize.css`, `fonts.css`, and a `fonts` directory.
- **Utils directory** contains files for default clothing items, weather API fetch methods, and coordinate data.

### ✅ Code Style:
- **camelCase** used for function and variable names.
- Descriptive names for variables and functions.
- Functional components and hooks used.
- **JSX syntax** properly ported from HTML.
- Proper state management and API calls within components.

---


## 🛠️ Technologies Used

- **React**: For building the app and managing state.
- **Vite**: For project bundling and building.
- **CSS**: For styling the components and layout.
- **Normalize.css**: For consistent styling across browsers.
- **Weather API**: For fetching real-time weather data.

---


## Images: <img width="1280" alt="Screen Shot 2025-03-02 at 9 46 01 PM" src="https://github.com/user-attachments/assets/3952d315-b172-4b73-b406-b6a802cd3089" />

<img width="1220" alt="Screen Shot 2025-03-02 at 9 56 06 PM" src="https://github.com/user-attachments/assets/3ff20315-0ba3-414a-81a2-42dfa85d7e09" />


## 🚀 Deployment & System Requirements

Installation

1.Clone the repository:

- git clone https://github.com/your-username/wtwr.git

2. Navigate to the project folder:

- cd wtwr

 3. Install dependencies:

- npm install

  4.Start the development server:

- npm run dev

## System Requirements

- Node.js v18+

- npm v9+

- Any modern browser (Chrome, Firefox, Edge, Safari)



## File Structure

```sh
/project-root
│── index.html
│── index.css
│── main.jsx
│── /src
│   ├── /components
│   │   ├── App.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ItemCard.jsx
│   │   ├── ItemModal.jsx
│   │   ├── Main.jsx
│   │   ├── ModalWithForm.jsx
│   │   ├── WeatherCard.jsx
│   ├── /utils
│   │   ├── defaultItems.js
│   │   ├── weatherAPI.js
│   │   ├── coordinates.js
│   ├── /assets
│   │   ├── /images
│   │   ├── /fonts
│── /node_modules
│── /dist
│── .gitignore
│── .prettierignore
│── README.md
