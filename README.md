## How to Run the Project

1. **Install dependencies**

   In the project directory, run:

   ```
   npm install
   ```

2. **Start the development server**

   ```
   npm run dev
   ```

   This will start the Vite development server. You should see a local address (usually http://localhost:5173/) in the terminal. Open it in your browser to view the app.

3. **Build for production**

   To create a production build, run:

   ```
   npm run build
   ```

4. **Preview the production build**

   After building, you can preview the production build locally:

   ```
   npm run preview
   ```

This project supports multiple languages (English, Russian, Kazakh) using react-i18next. Translation resources are defined in src/i18n.js.
To install i18n dependencies:

```
npm install i18next react-i18next i18next-browser-languagedetector
```

---

**Requirements:**

- Node.js (v16 or higher recommended)
- npm

For more details, see the [Vite documentation](https://vitejs.dev/guide/).
