# 🚀 Next.js Contact Form with Email Integration

This is a **Next.js** contact form project that allows users to send messages via **Nodemailer** to an email address. The backend is implemented as an **API route**, and the project is deployed on **Vercel**.

---

## 📌 Features

✅ **Frontend** (Next.js + Tailwind + Framer Motion)
- Responsive **Contact Form** (Name, Email, Message fields)
- **Client-side validation** to ensure required fields are filled
- **Animated UI** using **Framer Motion**
- **Fetch API** to send form data to the backend

✅ **Backend** (Next.js API Route + Nodemailer)
- API route **`src/app/api/send/route.js`** handles form submissions
- Uses **Nodemailer** to send emails via **Gmail SMTP**
- Secure **environment variables (`.env`)** for email credentials
- Returns success/error messages based on request

✅ **Deployment** (Vercel)
- Hosted on **Vercel** with environment variables for security
- API route accessible at **`/api/send`**
- Works seamlessly on both local and deployed environments

---

## 📂 Folder Structure

```
📦 src
 ┣ 📂 api
 ┃ ┗ 📜 send/route.js    # Next.js API route for sending emails
 ┣ 📂 app
 ┃ ┣ 📂 actions
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Contact.jsx    # Contact form frontend
 ┃ ┣ 📜 page.jsx         # Main page
 ┃ ┗ 📜 layout.jsx       # Layout configuration
 ┣ 📂 styles
 ┣ 📜 .env               # Stores environment variables (not pushed to Git)
 ┣ 📜 package.json       # Project dependencies
 ┗ 📜 next.config.mjs    # Next.js configuration
```

---

## 📧 How It Works

1️⃣ User fills out the **contact form** (name, email, message).
2️⃣ Data is sent via **Fetch API** to **`/api/send`**.
3️⃣ Backend extracts **name, email, and message** from the request.
4️⃣ Email is sent using **Nodemailer (Gmail SMTP)**.
5️⃣ Success or error message is displayed to the user.

---

## 🛠 Setup & Installation

### 🔹 Running Locally

1. Clone the repo:
   ```bash
   git clone your-repo-url
   cd project-folder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a **.env** file with:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment (Vercel)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Login and set environment variables:
   ```bash
   vercel login
   vercel env add EMAIL_USER your-email@gmail.com
   vercel env add EMAIL_PASS your-email-password
   ```
3. Deploy:
   ```bash
   vercel --prod
   ```

---

## 📌 Conclusion

This project **successfully integrates a Next.js contact form with Nodemailer**, allowing users to send messages directly to an email inbox. It’s secure, responsive, and deployed on **Vercel**. 🚀

---

### 💡 Notes:
- Make sure your **Gmail SMTP settings** allow less secure apps or use **OAuth2 authentication**.
- Environment variables should be set **both locally and on Vercel** for production.
- Tailwind and Framer Motion enhance the UI and animations.

Enjoy coding! 💻🔥

