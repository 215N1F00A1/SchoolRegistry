# 🏫 Schools Registry — Next.js + MySQL

A full-stack web application to **add and display schools** using **Next.js (React)** and **MySQL**, built as part of a recruitment assignment.

🔗 **Live Demo:** [https://school-registry.vercel.app](https://school-registry.vercel.app)  
📂 **GitHub Repo:** [https://github.com/YOUR_USERNAME/schools-registry-next](https://github.com/YOUR_USERNAME/schools-registry-next)

---

## 🚀 Features
- Add new schools with details:
  - Name, Address, City, State, Contact, Email, Image
- Validation with **react-hook-form + Zod**
- Stores uploaded images in `/public/schoolImages/` (or Cloudinary for production)
- Display schools in a **responsive grid** (like ecommerce sites)
- Mobile and Desktop friendly (TailwindCSS responsive design)

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 14, React, TailwindCSS
- **Backend:** Next.js API routes
- **Database:** MySQL (`mysql2/promise`)
- **Forms:** react-hook-form + Zod
- **Hosting:** Vercel

---

## 📸 Screenshots

### Add School Page
_Form with validations and image upload_

![Add School Screenshot](public/demo/addSchool.png)

### Show Schools Page
_Ecommerce-style grid with school info_

![Show Schools Screenshot](public/demo/showSchools.png)

---

## ⚙️ Setup Instructions

1. **Clone the Repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/schools-registry-next.git
   cd schools-registry-next
Install Dependencies

npm install
Configure Environment
Create a .env.local file:
env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schoolsdb
Create Database

sql
CREATE DATABASE schoolsdb;
USE schoolsdb;
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  contact VARCHAR(15),
  image TEXT,
  email_id TEXT
);
Run Locally

npm run dev
Visit → http://localhost:3000/addSchool

Deploy to Vercel
Push project to GitHub
Import into Vercel
Add .env.local values in project settings

🎯 Future Improvements
Search and filter schools by city/state

Pagination and sorting
Cloud image storage (Cloudinary/AWS S3)
