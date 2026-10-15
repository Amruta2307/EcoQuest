# 🌱 EcoQuest

### Learn. Play. Act. Impact.

**EcoQuest** is a gamified environmental education platform designed to make sustainability learning more **interactive, engaging, measurable, and action-oriented**.

Instead of relying only on traditional environmental education methods, EcoQuest combines **learning modules, quizzes, challenges, XP, levels, streaks, badges, leaderboards, and environmental impact tracking** to encourage students to understand environmental concepts and develop sustainable habits.

> 🌍 **Learn environmental concepts. Complete challenges. Earn achievements. Create measurable impact.**

---

## 📌 Project Overview

Environmental education is essential for building sustainable communities, but traditional learning methods can sometimes make it difficult for students to stay engaged or connect theoretical concepts with real-world environmental actions.

EcoQuest addresses this gap by transforming environmental education into an **interactive digital experience**.

The platform follows a simple learning cycle:

```text
Learn → Play → Act → Earn → Level Up → Make an Impact
```

EcoQuest is being developed as a **group academic project** with a focus on environmental education, gamification, and digital learning.

---

# 🎯 Problem Statement

Environmental education is often delivered through:

- Textbooks
- Classroom lectures
- Awareness campaigns
- Static educational content

While these methods are useful, students may face difficulties in:

- Maintaining long-term engagement
- Applying environmental knowledge in daily life
- Tracking their sustainability-related activities
- Receiving continuous motivation
- Measuring their progress and impact

### The Challenge

> **How can environmental education be transformed into an engaging digital experience that motivates students to learn, participate, and take sustainable actions?**

---

# 💡 Our Solution

EcoQuest combines **environmental education + gamification + progress tracking** into a single platform.

Students can:

- 📚 Learn environmental concepts
- 🧠 Test their knowledge through quizzes
- 🌱 Complete sustainability challenges
- ⭐ Earn XP and progress through levels
- 🔥 Maintain learning streaks
- 🏆 Unlock badges and achievements
- 🥇 Participate in leaderboards
- 📊 Track their learning progress
- 🌍 Monitor environmental impact indicators

The goal is to transform environmental learning from a passive activity into an **interactive and continuous learning journey**.

---

# ✨ Key Features

## 📚 Interactive Environmental Learning

Topic-based learning modules provide short, structured, and easy-to-understand environmental content.

### Main Learning Areas

- 🌍 Climate Change
- 🌳 Biodiversity & Ecosystems
- ♻️ Waste Management
- 💧 Water Conservation
- ⚡ Renewable Energy
- 🌱 Sustainable Living
- 🐾 Environmental Protection

---

## 🧠 Interactive Quizzes

Users can test their understanding through environmental quizzes.

Quizzes can provide:

- Questions and answers
- Instant feedback
- Score calculation
- XP rewards
- Progress tracking

---

## 🌱 Eco Challenges

Users can participate in sustainability-related challenges such as:

- ♻️ Recycling activities
- 💧 Water-saving activities
- 🌱 Tree plantation
- 🚯 Waste reduction
- ⚡ Energy conservation
- 🛍️ Sustainable consumption

Challenges are designed to connect **digital learning with real-world environmental actions**.

---

## ⭐ XP & Level System

Users earn **Experience Points (XP)** by participating in EcoQuest activities.

Example:

| Activity | Reward |
|---|---:|
| Complete a lesson | XP |
| Complete a quiz | XP |
| Complete an eco challenge | XP + Badge |
| Achieve a milestone | Achievement |
| Maintain a streak | Streak Reward |

Accumulated XP contributes to the user's level progression.

---

## 🔥 Learning Streaks

Daily participation encourages consistent learning.

Users can maintain streaks by regularly:

- Completing lessons
- Attempting quizzes
- Participating in challenges
- Engaging with the platform

---

## 🏆 Badges & Achievements

Users can unlock badges for reaching specific milestones.

Examples:

- 🌱 Eco Starter
- ♻️ Recycling Champion
- 💧 Water Saver
- 🌳 Green Guardian
- ⚡ Energy Saver
- 🌍 Planet Protector

The badge system provides recognition for participation and progress.

---

## 🥇 Leaderboard

The leaderboard allows users to compare their progress based on:

- XP
- Levels
- Completed challenges
- Achievements
- Environmental impact

This introduces healthy competition and encourages participation.

---

## 👤 Profile & Progress

Each user can have a personal profile containing:

- Current level
- XP
- Learning streak
- Completed courses
- Completed quizzes
- Completed challenges
- Earned badges
- Achievements
- Environmental impact indicators

---

## 🌍 Environmental Impact Tracking

EcoQuest aims to represent sustainable actions through measurable impact indicators.

Potential indicators include:

- 🌳 Virtual trees planted
- 💧 Water saved
- ♻️ Waste reduced/recycled
- ⚡ Energy saved
- 🌱 Sustainability points

These indicators help users understand how their activities contribute to environmental goals.

> **The impact values are intended as educational/game metrics and should not automatically be interpreted as scientifically verified measurements.**

---

# 🎮 Gamification System

EcoQuest uses multiple game mechanics to encourage continuous participation.

```text
                    ECOQUEST
                       │
          ┌────────────┴────────────┐
          │                         │
       LEARNING                  ACTION
          │                         │
    ┌─────┴─────┐             ┌─────┴─────┐
    │           │             │           │
 Lessons     Quizzes      Challenges   Activities
    │           │             │           │
    └─────┬─────┘             └─────┬─────┘
          │                         │
          └──────────┬──────────────┘
                     │
                    XP
                     │
              ┌──────┴──────┐
              │             │
           Levels        Badges
              │             │
              └──────┬──────┘
                     │
                Achievements
                     │
               Impact Tracking
```

### Gamification Elements

| Mechanism | Purpose |
|---|---|
| ⭐ XP | Reward participation |
| 🆙 Levels | Represent progression |
| 🔥 Streaks | Encourage consistency |
| 🏆 Badges | Recognize achievements |
| 🎯 Challenges | Encourage action |
| 🥇 Leaderboard | Encourage healthy competition |
| 📊 Progress | Show learning journey |
| 🌍 Impact | Connect activities with sustainability |

---

# 🔐 Authentication

EcoQuest includes an authentication system using the Django backend.

Current authentication flow:

```text
User
 │
 ▼
React Login / Registration
 │
 ▼
Django REST API
 │
 ▼
Django Authentication
 │
 ▼
PostgreSQL
```

The authentication system supports:

- User registration
- Username and email
- Password authentication
- Login
- JWT access token
- JWT refresh token
- Protected user sessions on the frontend

Passwords are handled through Django's authentication system rather than being stored as plain text.

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │       User           │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React Frontend     │
                         │                      │
                         │  • Landing Page      │
                         │  • Login/Register    │
                         │  • Dashboard         │
                         │  • Learning          │
                         │  • Quizzes           │
                         │  • Challenges        │
                         │  • Leaderboard       │
                         │  • Profile           │
                         └──────────┬───────────┘
                                    │
                              REST API / HTTP
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    Django Backend    │
                         │                      │
                         │  • Authentication    │
                         │  • REST APIs         │
                         │  • Business Logic    │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    PostgreSQL DB     │
                         │                      │
                         │  • Users             │
                         │  • Progress          │
                         │  • Activities        │
                         │  • Achievements      │
                         └──────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

- **React**
- **JavaScript**
- **Tailwind CSS**
- **Axios**
- **React Router**
- **Lucide React**

## Backend

- **Python**
- **Django**
- **Django REST Framework**
- **Simple JWT**

## Database

- **PostgreSQL**

## UI/UX Design

- **Figma**

## Development Tools

- **Visual Studio Code**
- **Git**
- **GitHub**
- **pgAdmin**

---

# 📱 Planned Platform Pages

The overall platform is planned to include:

1. 🏠 Landing Page
2. 🔐 Login
3. 📝 Registration
4. 📊 Dashboard
5. 📚 Learn
6. 📖 Course Details
7. 🧠 Quiz
8. 🌱 Eco Challenges
9. 🥇 Leaderboard
10. 🏆 Badges & Achievements
11. 👤 Profile
12. 👥 Community
13. 🌍 Environmental Impact

> Some pages are currently under development.

---


# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

- Python 3.x
- Node.js
- npm
- PostgreSQL
- Git
- VS Code

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Amruta2307/EcoQuest.git
cd EcoQuest
```

---

# 🎨 Frontend Setup

Open a terminal inside the `frontend` directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 🐍 Backend Setup

Open another terminal and navigate to:

```bash
cd backend
```

### Create a virtual environment

Windows:

```powershell
python -m venv venv
```

Activate it:

```powershell
.\venv\Scripts\Activate.ps1
```

If PowerShell activation is blocked, use:

```powershell
venv\Scripts\activate
```

---

## Install Backend Dependencies

```bash
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install django-cors-headers
pip install psycopg2-binary
pip install python-dotenv
```

---

# 🗄️ PostgreSQL Configuration

Create a PostgreSQL database for EcoQuest.

Example:

```text
Database Name: ecoquest_db
```

Create a `.env` file in the **root EcoQuest directory**:

```text
EcoQuest/
├── .env
├── backend/
└── frontend/
```

Example `.env` structure:

```env
DB_NAME=ecoquest_db
DB_USER=postgres
DB_PASSWORD=YOUR_POSTGRES_PASSWORD
DB_HOST=localhost
DB_PORT=5432
```

### 🔐 Important

Never commit or upload `.env` to GitHub.

The repository's `.gitignore` already excludes:

```text
.env
.env.*
```

Each team member should create their own local `.env` file.

---

# 🔄 Run Django Migrations

From the `backend` directory:

```bash
python manage.py migrate
```

---

# 👤 Create Django Admin User

If administrator access is required:

```bash
python manage.py createsuperuser
```

Follow the prompts.

---

# ▶️ Start Django Server

From the `backend` directory:

```bash
python manage.py runserver
```

The backend will normally run at:

```text
http://127.0.0.1:8000/
```

---

# 🔗 API Endpoints

### Registration

```text
POST /api/accounts/register/
```

### Login

```text
POST /api/accounts/login/
```

Example full URLs during local development:

```text
http://127.0.0.1:8000/api/accounts/register/
http://127.0.0.1:8000/api/accounts/login/
```

---

# 🔄 Development Workflow

EcoQuest uses Git and GitHub for collaborative development.

### Main Branch

```text
main
```

The `main` branch should contain stable project code.

### Feature Branches

Each developer should create a separate feature branch.

Example:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

Examples:

```text
feature/authentication
feature/dashboard
feature/quiz-system
feature/leaderboard
feature/challenges
feature/profile
feature/impact-tracking
```

---

# 📌 Recommended Git Workflow

```text
                 GitHub
                    │
                   main
                    │
          ┌─────────┴─────────┐
          │                   │
     Feature Branch       Feature Branch
          │                   │
     Development          Development
          │                   │
        Commit              Commit
          │                   │
         Push               Push
          │                   │
          └─────────┬─────────┘
                    │
               Pull Request
                    │
                  Review
                    │
                  Merge
                    ▼
                  main
```

### Basic workflow

```bash
git checkout main
git pull origin main

git checkout -b feature/your-feature-name
```

After making changes:

```bash
git add .
git commit -m "Add your feature"
git push -u origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

---

# 👥 Team

## EcoQuest Development Team

| Member | Responsibility |
|---|---|
| **Tanushree Shinde** | Frontend Development & Database |
| **Amruta Patil** | Frontend Development & Django |
| **Shruti Chavan** | Python & Django |
| **Resham Mhatre** | Python & Django |
| **Shravani Torase** | UI/UX & Documentation |
| **Ashiwini Dighe** | Research & Documentation |

---

# 📊 Development Status

| Area | Status |
|---|---|
| Project Concept | ✅ Implemented |
| GitHub Repository | ✅ Implemented |
| React Frontend Setup | ✅ Implemented |
| Django Backend Setup | ✅ Implemented |
| PostgreSQL Configuration | ✅ Implemented |
| User Registration | ✅ Implemented |
| User Login | ✅ Implemented |
| JWT Authentication | ✅ Implemented |
| Landing Page | ✅ Implemented |
| Environmental Learning Modules | 🚧 Currently Developing |
| Quiz System | 🚧 Currently Developing |
| Eco Challenges | 🚧 Currently Developing |
| Gamification Engine | 🚧 Currently Developing |
| Dashboard | 🚧 Currently Developing |
| Leaderboard | 🚧 Currently Developing |
| Badges & Achievements | 🚧 Currently Developing |
| Profile & Progress | 🚧 Currently Developing |
| Impact Tracking | 🚧 Currently Developing |
| Community | 🔮 Future Scope |
| AI Personalization | 🔮 Future Scope |
| Mobile Application | 🔮 Future Scope |

---

# 🌱 Current Implementation

The current development version includes:

### Frontend

- Professional EcoQuest landing page
- Environmental hero section
- Responsive navigation
- Login interface
- Registration interface
- React routing
- Professional environmental UI

### Backend

- Django project
- Django REST Framework
- PostgreSQL integration
- User authentication
- User registration API
- Login API
- JWT authentication
- CORS configuration
- Environment-variable based database configuration

---

# 🚧 Currently Developing

The following modules are actively being developed:

- 📊 Student dashboard
- 📚 Environmental learning modules
- 🧠 Quiz system
- 🌱 Eco challenges
- ⭐ XP and level system
- 🔥 Streak system
- 🏆 Badge and achievement system
- 🥇 Leaderboard
- 👤 Student profile
- 🌍 Impact tracking

---

# 🔮 Future Scope

EcoQuest can be expanded with advanced features such as:

### 🤖 AI-Powered Learning

- Personalized learning recommendations
- AI-based environmental mentor
- Adaptive learning paths
- Performance-based recommendations

### 🧠 Adaptive Quizzes

Quiz difficulty can dynamically adjust based on:

- Previous performance
- Topic knowledge
- Quiz history
- Learning progress

### 🏫 Institution Dashboard

Schools and colleges could have dashboards for:

- Student participation
- Class performance
- Environmental activities
- Institution-wide challenges
- Sustainability analytics

### 🌍 Real-World Activity Verification

Future versions could support verification of environmental activities using:

- Photo evidence
- QR-based activities
- Teacher verification
- Institution approval

### 📍 Location-Based Activities

Users could discover environmental activities around their area.

### 📱 Mobile Application

EcoQuest could eventually be extended into:

- Android application
- iOS application

### 🏅 Certificates & Rewards

Users could receive:

- Course certificates
- Challenge certificates
- Achievement certificates
- Institution recognition

---

# 🌏 Sustainable Development Goals

EcoQuest supports environmental education and sustainability-related objectives aligned with several **United Nations Sustainable Development Goals (SDGs)**:

| SDG | Goal | EcoQuest Connection |
|---|---|---|
| **SDG 4** | Quality Education | Interactive environmental education |
| **SDG 6** | Clean Water & Sanitation | Water conservation learning |
| **SDG 12** | Responsible Consumption & Production | Waste reduction and sustainable consumption |
| **SDG 13** | Climate Action | Climate awareness and sustainable activities |
| **SDG 14** | Life Below Water | Marine and aquatic ecosystem awareness |
| **SDG 15** | Life on Land | Biodiversity and ecosystem protection |

---

# 🔐 Security & Privacy

EcoQuest follows basic secure development practices during development.

- Passwords are handled through Django authentication.
- JWT tokens are used for API authentication.
- Database credentials are stored in environment variables.
- `.env` is excluded from Git.
- Local database credentials should never be committed to the repository.

> **Never share your PostgreSQL password, `.env` file, JWT secrets, or other credentials through GitHub.**

---

# 🤝 Contributing

EcoQuest is currently being developed as a group academic project.

Team members should:

1. Pull the latest `main` branch.
2. Create a feature branch.
3. Make changes only within their assigned feature.
4. Commit changes with clear messages.
5. Push the feature branch.
6. Create a Pull Request.
7. Review changes before merging into `main`.

### Example

```bash
git checkout main
git pull origin main

git checkout -b feature/quiz-system

git add .
git commit -m "Add quiz system"

git push -u origin feature/quiz-system
```

---

# 📄 License

This project is developed for **educational and academic purposes**.

---

# 🌱 EcoQuest

> **Learn. Play. Act. Impact.**

**Building environmentally aware learners through interactive digital education.**

---

### 🚧 Project Status

**Under Development**

EcoQuest is an evolving academic project focused on combining:

```text
Environmental Education
        +
Gamification
        +
Technology
        +
Real-World Sustainable Action
        =
A Greener Tomorrow 🌍
```
