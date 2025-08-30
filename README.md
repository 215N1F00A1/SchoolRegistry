# 🏫 Schools Registry — Next.js + MySQL

A full-stack web application to **add and display schools** using **Next.js (React, App Router)** and **MySQL**, built as part of a job assignment.

🔗 **Live Demo:** [school-registry.vercel.app](https://school-registry.vercel.app)  
📂 **GitHub Repo:** [215N1F00A1/SchoolRegistry](https://github.com/215N1F00A1/SchoolRegistry)

---

## 🚀 Features
- Add new schools with essential details:
  - Name, Address, City, State, Contact, Email, Image upload
- Client-side and server-side validation via **react-hook-form + Zod**
- Images stored in `/public/schoolImages/` (for local/VPS) or via Cloudinary (for production deployments)
- Responsive, ecommerce-style school listing with grid layout
- Mobile-first design using TailwindCSS

---

## 🛠 Tech Stack
- **Frontend:** Next.js 14 (App Router), React, TailwindCSS  
- **Form Handling:** react-hook-form + Zod  
- **Backend:** Next.js API routes (`/api/schools`)  
- **Database:** MySQL with `mysql2/promise`  
- **Hosting:** Vercel  

---

##  Screenshots

### Add School Page
_Form with validations and image upload_  
![Add School Screenshot](public/demo/addSchool.png)

### Show Schools Page
_Ecommerce-style grid displaying school listings_  
![Show Schools Screenshot](public/demo/showSchools.png)

---

##  Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/215N1F00A1/SchoolRegistry.git
   cd SchoolRegistry
Install Dependencies

npm install
Configure Environment
Create a .env.local file with your MySQL credentials:

env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=schools_db
Create Database Table

sql

CREATE DATABASE IF NOT EXISTS schools_db;
USE schools_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(20) NOT NULL,
  image TEXT NOT NULL,
  email_id TEXT NOT NULL
);
Run Locally
npm run dev
Open:
http://localhost:3000/addSchool to add schools
http://localhost:3000/showSchools to view listings

Deploy on Vercel
Push repository to GitHub (already done)

Import into Vercel
Add environment variables in project settings
Use Cloudinary integration for uploaded images to persist online

Future Enhancements
Add search and filter functionality (e.g., by city or state)
Enable pagination / infinite scroll for long lists

Support sorting and category tags

Integrate Cloudinary or S3 for scalable image storage
