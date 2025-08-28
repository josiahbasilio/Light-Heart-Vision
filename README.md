# Light Heart Vision

Website: https://light-heart-vision.vercel.app/

Light Heart Vision is a community platform designed to foster mindfulness, collaboration, and co-creation.  

This project was developed over eight months as part of our capstone course at Algonquin College of Applied Arts and Technology, in collaboration with a real client. The platform was a multi-team effort:  

- Our team (Decoders): focused on building the web platform: discussions (HeartSpace), blog, events, authentication, and overall site design.  
- Partner team: responsible for developing the VR space, which users can access after logging in through the website.  

Together, the website and VR environment create a unified platform where people can connect, share experiences, and explore mindfulness practices.  

Due to the limited timeframe of an academic project, the platform is not yet feature-complete. However, we successfully delivered a strong foundation with working authentication, discussions, blog functionality, events, and a seamless login flow that grants users access to the VR page.  

This repository is my fork of the original team project. It highlights my individual contributions and serves as part of my development portfolio. 

# Features

- Community Hub: browse and start discussions on mindfulness, personal growth, and creativity.

- HeartSpace (Discussions System): post reflections and engage with the community.

- Courses & Offerings: support for e-learning and guided resources.

- Events: discover upcoming community events and workshops.

- VR Access (Partner Team): once users log in through the web platform, they are directed to a VR “Higher Visioning” space, which was developed by another Light Heart Vision team.

- Modern UI/UX: responsive design using Next.js and Tailwind CSS.

- Full-stack Architecture: React/Next.js frontend, Express.js backend, PostgreSQL database.
                                                                                                                                                                                
# My Role & Contributions

### Frontend (Next.js + Tailwind CSS)
- Developed the HeartSpace (Discussions) feature, allowing users to create and view discussion topics. Posts were temporarily stored in localStorage to simulate persistence, with the design structured so a backend API could be integrated later. Also ensured the Guidelines card remained pinned for clarity.
- Implemented the Blog section as a separate feature from HeartSpace, preparing a clean place to publish posts and articles.
- Added branding polish with a golden glowing heart logo and smooth hover animations across pages.
- Contributed UI for the Events page (event cards and navigation).

### Events
- Helped implement the Events section/page as part of the Community Hub, including layout and navigation.
- Contributed to event card UI so users could see upcoming events/workshops.

### Backend (Express.js + PostgreSQL)
- Implemented user authentication so that when a user logs in, their username is returned and displayed on the frontend.
- Built the /signup and /login routes in Express.js, including validation for email, password, and username.
- Secured passwords by hashing them with bcrypt before storing in PostgreSQL.
- Configured the PostgreSQL connection (via Aiven) with SSL certificate authentication.
- Ensured proper JSON responses so the frontend could show the logged-in user’s name and details.

# Tech Stack

- Frontend: Next.js, React, Tailwind CSS.

- Backend: Node.js, Express.js.

- Database: PostgreSQL.

- Authentication: NextAuth (JWT, Credentials Provider), bcrypt.

# Collaboration

- Version Control: GitHub (branches, PRs)  
- Project Management: Jira (Agile sprints, backlog tracking)  
- Design & Prototyping: Figma  
- Team Communication: Discord (daily coordination), Zoom (client + team meetings)  
