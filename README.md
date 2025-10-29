# BookFinder
Book Finder App 📚
Project Overview
Book Finder is a web application built for Alex, a college student, to search books by title using the Open Library API. The app allows users to search for books, view their covers, authors, publishers, and publication year, and visit the book’s Open Library page for more details.
The project demonstrates API integration, state management, responsive UI design, and deployment, while leveraging AI-assisted development for planning and debugging.

Features
Search books by title (e.g., “Harry Potter”, “Pride and Prejudice”)
Responsive grid of book cards
Book details: title, author(s), publisher, publish year
Placeholder image for books with no cover
Loading spinner while fetching data
Link to view the book on Open Library
Modern UI with Tailwind CSS
Mobile-friendly design

Tech Stack
Framework: React
Styling: Tailwind CSS
API: Open Library Search API   https://openlibrary.org/search.json?title={bookTitle}
State Management: React’s built-in useState and useEffect hooks
Hosting / Deployment: CodeSandbox

book-finder/
├─ public/
│  └─ index.html                 # HTML template
│
├─ src/
│  ├─ components/
│  │  ├─ SearchBar.jsx           # Search bar component
│  │  └─ BookCard.jsx            # Book card component
│  │
│  ├─ App.jsx                     # Main application component
│  ├─ index.js                     # React entry point
│  └─ index.css                    # Tailwind CSS and custom styles
│
├─ package.json                    # Project dependencies and scripts
├─ README.md                       # Project documentation
└─ tailwind.config.js              # Tailwind configuration (if using Tailwind template)


Deployed link |->  https://jzlmrt.csb.app/

<img width="546" height="180" alt="image" src="https://github.com/user-attachments/assets/2afaf2e1-5098-4991-858a-4d311e990205" />
<img width="324" height="639" alt="image" src="https://github.com/user-attachments/assets/0d4937aa-e7f2-4e48-8177-5635621272fc" />
