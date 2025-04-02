# Job Application Platform (Jobble) 

## Overview  
The **Job Application Platform** is a modern web application built with **Next.js** that connects job seekers with potential employers. It provides an intuitive and user-friendly interface for browsing job listings, applying for positions, and tracking applications. The platform ensures a seamless experience by leveraging **server-side rendering (SSR)** and **static site generation (SSG)** for improved performance and SEO.  

## Features  
- 🔍 **Job Search & Filtering** – Easily search for jobs by keyword, location, category, and job type.  
- 📝 **Application Management** – Users can track their job applications and save jobs for later.  
- 💼 **Company Profiles** – Employers can showcase their company and list job openings.  
- 🌎 **Global Accessibility** – Supports multiple locations and remote job listings.  
- 📅 **Publication Date Formatting** – Jobs display relative time (e.g., "Today", "3 days ago").  
- 🖼 **Optimized Image Loading** – Uses Next.js Image component for efficient image handling.  
- 🔗 **SEO & Social Sharing** – Proper metadata and structured data for better visibility.
- **Light & Dark modes** - Users can toogle bewteen light and dark modes 

## Tech Stack  
- **Frontend**: Next.js (React, TypeScript, Chakra UI)  
- **Data Fetching**: API Integration with job listing providers  
- **Styling**: Chakra UI for responsive and accessible design  
- **Deployment**: Vercel  

## Pages  

### 1️⃣ **Home Page (`/`)**  
The **Home Page** serves as the landing page for users, providing an overview of the platform’s features.  
- Users can search for jobs directly from the homepage.  
- Featured job listings are displayed prominently.  
- Brief descriptions of how the platform works for job seekers and employers.  

### 2️⃣ **Jobs Page (`/jobs`)**  
The **Jobs Page** is the core of the platform, allowing users to browse and filter job listings.  
- Users can search for jobs using keywords, location, and category filters.  
- Job postings display key information such as company name, salary, location, and publication date.  
- Clicking on a job listing opens a **detailed job description** with an **"Apply Now"** button.  

### 3️⃣ **Authentication Pages (`/login` & `/signup`)**  
The **Authentication Pages** allow users to create an account or log in to access job tracking features.  
- **Login Page**: Enables users to log in using email and password.  
- **Signup Page**: Allows new users to create an account.  
- Supports **OAuth authentication** (Google, LinkedIn) for quick sign-in.  

### 4️⃣ **Contact Us Page (`/contact-us`)**  
The **Contact Us Page** allows users to reach out for support, feedback, or inquiries.  
- Displays a contact form where users can submit messages.  
- Includes the platform’s support email and social media links.  
- FAQs section to address common questions from users.  

## Accessibility Considerations  
Ensuring an inclusive experience for all users is a core principle of this project:  
- ✅ **Semantic HTML** – Proper use of `<nav>`, `<button>`, `<article>`, `<header>`, etc.  
- ✅ **Keyboard Navigation** – Fully operable with a keyboard (Tab, Enter, Space keys).  
- ✅ **ARIA Attributes** – Used for buttons, modals, and dynamically rendered content.  
- ✅ **High Contrast Mode** – Supports color contrast adjustments for better readability.  
- ✅ **Screen Reader Support** – Accessible names and labels for buttons and interactive elements.  

## Ethical Considerations  
- **Fair Job Listings**: Ensures all job postings comply with ethical hiring standards, avoiding discrimination based on gender, race, or disability.  
- **Data Privacy & Security**: Protects user data by following **GDPR** and **data encryption** best practices.  
- **No Fake Listings**: Implements a moderation system to prevent scam job postings.  
- **Inclusive Hiring Practices**: Encourages companies to include salary ranges and remote work options.  
- **Transparency**: Users can report misleading job descriptions or suspicious employers.  

## Installation & Setup  
1. **Clone the repository**:  
   ```sh
   git clone https://github.com/Meldy2503/Jobble.git
   cd Jobble
   ```  
2. **Install dependencies**:  
   ```sh
   npm install  # or yarn install
   ```  
3. **Run the development server**:  
   ```sh
   npm run dev  # or yarn dev
   ```  
4. **Visit the app**: Open `http://localhost:3000` in your browser.  

## Future Enhancements  
- **User Profiles** – Allow job seekers to create profiles and upload resumes.  
- **AI Job Matching** – Use AI/ML to recommend jobs based on user preferences.  
- **Employer Dashboard** – Enable companies to manage job postings and applications.  
- **Mobile App Integration** – Build a React Native version for mobile users.  

## Contributing  
We welcome contributions! Please open an issue or submit a pull request if you'd like to improve the platform.  

---  
This project aims to make job searching **efficient, ethical, and accessible for everyone**. 🚀
