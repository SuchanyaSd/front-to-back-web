# Client

## Step 1 Install vite

create folder client

```bash
npm create vite
npm install
npm run dev
```

## Step 2 Install tailwind
https://tailwindcss.com/docs/installation/using-vite
```bash
npm install tailwindcss @tailwindcss/vite
```

edit vite.config
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})

```

and then import @import "tailwindcss"; in index.css
```js
@import "tailwindcss";
```

and test this code
```jsx
<h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
```
```bash
npm run dev
```

## Step 3 Install React-Router
https://reactrouter.com/start/library/installation
```bash
npm i react-router
```

and edit main.jsx
```jsx
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

and then
```jsx
import { Route, Routes } from "react-router"

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="register" element={<h1>Register</h1>} />
        <Route path="login" element={<h1>Login</h1>} />

        {/* Private [USER] */}
        <Route path="user" element={<h1>Home User</h1>}/>

        {/* Private [ADMIN] */}
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="manage" element={<h1>Manage</h1>} />

        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  )
}

export default AppRoutes
```

## Step 4 Sweetalert2
```bash
npm install sweetalert2
```