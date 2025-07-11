# 🛠️ IT Service Request Form — VCube Soft and Tech

A modern, user-friendly web form to submit daily IT-related issues within the office environment.  
This form helps collect structured IT support requests into Google Sheets for tracking and resolution.


## 📌 Features

- ✅ Form fields: Name, Email, Employee Code, PC Number, Problem Description
- ✅ Optional Screenshot Upload
- ✅ Google Sheet Integration using Apps Script
- ✅ Confirmation alert after submission
- ✅ Responsive design with built-in real-time clock


## 🧪 Technologies Used

- HTML5 & CSS3
- JavaScript (client-side form logic)
- Google Apps Script (backend data handling)

---

## 🧭 Form Fields Overview

| Field                     | Type            | Required |
|--------------------------|-----------------|----------|
| Your Name                | Text            | ✅ Yes    |
| Email Address            | Email           | ✅ Yes    |
| Employee Code            | Text/Number     | ✅ Yes    |
| PC Number                | Text/Number     | ✅ Yes    |
| Problem Location/Area    | Dropdown Select | ✅ Yes    |
| Screenshot (optional)    | File Upload     | ❌ No     |

---

## 📁 Folder Structure

📦 it-service-form
├── index.html
├── style.css
├── script.js
└── apps-script.gs (Google Sheets backend)
