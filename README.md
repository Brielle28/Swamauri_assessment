# Swarmauri Frontend Assessment

This project is a demonstration of the usage of the `@swarmakit/react` UI component library to build a functional web page. The project is implemented using **React** and **Vite**.

---

### **What This Project Demonstrates**
- Setting up and integrating a third-party library.
- Building a functional React application with key UI components.

---

## **Getting Started**

Follow these steps to set up and run the project locally:

### **Prerequisites**
Ensure the following are installed on your system:
- **Node.js**: v16 or higher
- **npm**: v8 or higher

To verify, run:
```bash
node -v
npm -v

---

### **Installation**

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install the `@swarmakit/react` library:
   ```bash
   npm install @swarmakit/react
   ```

---

### **Usage**

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

### **Implementation**

This demo includes the following `@swarmakit/react` components:
- **Accordion**
- **Button**
- **Carousel**

#### **Code Overview**

The `App.jsx` file contains the setup and usage of the components:
```javascript
import "./App.css";
import { Accordion, Button, Carousel } from "@swarmakit/react";

function App() {
  const accordionItems = [
    { title: "First Item", content: "Content for the first item" },
    { title: "Second Item", content: "Content for the second item" },
    { title: "Third Item", content: "Content for the third item" },
  ];

  const handleClick = () => {
    alert("Button Clicked!");
  };

  const carouselSlides = [
    { src: "https://via.placeholder.com/300", alt: "Slide 1" },
    { src: "https://via.placeholder.com/300", alt: "Slide 2" },
    { src: "https://via.placeholder.com/300", alt: "Slide 3" },
  ];
  return (
    <>
      <h1 className="swam"> Swarmauri Assessment Demo</h1>

      {/* Accordion Component */}
      <Accordion items={accordionItems} />

      {/* Button Component */}
      <Button onClick={handleClick}>Click Me!</Button>

      {/* Carousel Component */}
      <Carousel slides={carouselSlides} />
    </>
  );
}

export default App;

```

---

### **Known Issues**

#### **Missing `main`/`module` Exports in `@swarmakit/react`**
The `@swarmakit/react` library has an issue in its `package.json` configuration. The `main` and `module` fields, which are essential for module resolution, are missing or incorrectly defined. This results in the following error when trying to use the library with tools like **Vite**:

```
Failed to resolve entry for package "@swarmakit/react". The package may have incorrect main/module/exports specified in its package.json.
```

---

### **Troubleshooting Steps Taken**
1. Verified proper installation of the library using:
   ```bash
   npm list @swarmakit/react
   ```

2. Inspected the package.json in `@swarmakit/react` folder in `node_modules` to ensure build outputs exist.

3. Confirmed the issue is likely due to an incomplete or misconfigured `package.json` file in the library.
4. Created a minimal React + Vite project to isolate the problem and Tested similar packages to verify Vite's compatibility with third-party libraries.


---

### **Recommendations**
To resolve the issue, the library maintainers should:
1. Add a valid `main` and `module` field in the `package.json`:
   ```json
   {
     "main": "dist/index.js",
     "module": "dist/index.esm.js",
     "exports": {
       ".": {
         "import": "./dist/index.esm.js",
         "require": "./dist/index.js"
       }
     }
   }
   ```
---
