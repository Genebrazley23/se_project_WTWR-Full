

# WTWR (What to Wear?)



This project is a **weather-based clothing recommendation app** built using **React**, **Vite**, and various frontend technologies. The app provides weather data and recommends clothing based on the current temperature.


## Project Overview

This project fetches **weather data** via an API and recommends clothing based on the temperature. It includes several components and makes use of **React functional components** with **state management**.

### Key Features:
- **Weather data** is fetched and displayed, including temperature in **Fahrenheit**.
- **Clothing recommendations** are shown based on the temperature.
- **Modal forms** allow users to interact with the app and add new items.
- Responsive design, well-structured components, and use of hooks.

---

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

## Technologies and Techniques Used

- **React**: For building the app and managing state.
- **Vite**: For project bundling and building.
- **CSS**: For styling the components and layout.
- **Normalize.css**: For consistent styling across browsers.
- **Weather API**: For fetching real-time weather data.

---


## Images: <img width="1280" alt="Screen Shot 2025-03-02 at 9 46 01 PM" src="https://github.com/user-attachments/assets/3952d315-b172-4b73-b406-b6a802cd3089" />

<img width="1220" alt="Screen Shot 2025-03-02 at 9 56 06 PM" src="https://github.com/user-attachments/assets/3ff20315-0ba3-414a-81a2-42dfa85d7e09" />

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
