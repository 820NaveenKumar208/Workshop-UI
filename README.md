# **Workshop Booking**

> This website design by Naveen Kumar T (B.Tech-IT) and it's for coordinators to book a workshop(s), they can book a workshop based on instructors posts or can propose a workshop date based on their convenience.


### Overview:
Describes the project improves the UI/UX of the FOSSEE workshop booking system using React. The focus was on modern design, responsiveness, and better user experience.

### Features
* Statistics
    1. Instructors Only
        * Monthly Workshop Count
        * Instructor/Coordinator Profile stats
        * Upcoming Workshops
        * View/Post comments on Coordinator's Profile
    2. Open to All
        * Workshops taken over Map of India
        * Pie chart based on Total Workshops taken to Type of Workshops.

* Workshop Related Features
    Instructors can Accept, Reject or Delete workshops based on their preference, also they can postpone a workshop based on coordinators request.

__NOTE__: Check docs/Getting_Started.md for more info.

 A new React frontend project has been scaffolded in `frontend/` for a modern workshop booking UI redesign.

## Identified Issues:

Based on code analysis, the following UI/UX issues have been identified:

### Layout & Spacing:
- Poor spacing throughout templates (excessive use of `<br>` tags)
- Minimal padding/margins in content areas
- Footer is fixed at bottom, potentially overlapping content on short pages
- No consistent container/section structure

### Navigation:
- Navbar is fixed-top but not sticky (doesn't stay at top when scrolling)
- Basic Bootstrap styling without custom theming
- Mobile hamburger menu present but could be improved

### Buttons:
- Default Bootstrap button styles (btn-primary, btn-success, etc.)
- No rounded corners
- No hover effects
- No custom color theming

### Forms:
- Basic form styling with minimal spacing
- No focus highlights on input fields
- Labels present but could be better styled

### Typography:
- Default browser fonts (no Google Fonts integration)
- Basic heading sizes without hierarchy
- Limited readability enhancements

### Cards & Lists:
- Workshop lists displayed as tables instead of modern card layouts
- Some forms use cards but lack visual appeal
- No shadows or modern card effects

### Responsiveness:
- Relies on Bootstrap's responsive grid
- No custom media queries for mobile optimization
- Tables may not display well on small screens
- Buttons may be too small for touch targets

### Modern Design:
- No shadows or depth effects
- Inconsistent color palette (default Bootstrap colors)
- Lack of smooth spacing and transitions
- No visual hierarchy with colors and typography

### Performance:
- Uses multiple heavy libraries (jQuery, Bootstrap, Chart.js)
- No optimization for images or assets
- Components could be smaller and more efficient

## Design Principles:

The UI improvements follow these core design principles:

### Core Principles:
- **Simplicity**: Clean, uncluttered interface focusing on essential functionality
- **Consistency**: Uniform styling, spacing, and interaction patterns across all components
- **Accessibility**: Proper contrast, readable fonts, and keyboard navigation support
- **Mobile-first design**: Prioritizing mobile experience with responsive layouts

### Responsiveness:
- Used Flexbox/Grid for flexible layouts
- Media queries for mobile breakpoints (@media max-width: 768px)
- Tested on small screens with touch-friendly targets
- Stack items vertically on mobile devices

### Trade-offs:
- Avoided heavy animations → better performance
- Used simple UI instead of complex design systems
- Prioritized functionality over decorative elements
- Maintained lightweight CSS over heavy frameworks

### Challenges:
- Making layout responsive across different screen sizes
- Fixing alignment issues in existing templates
- Maintaining performance while adding visual enhancements
- Balancing modern design with existing Bootstrap integration

### Setup Instructions:
npx create-react-app workshop-ui
cd workshop-ui
npm install
npm start

### WORKFLOW_CHART:
<img width="1578" height="644" alt="Screenshot 2026-04-13 234724" src="https://github.com/user-attachments/assets/9536b6a0-befa-4a92-95de-66f4fd6d36d9" />

## OUTPUT:
### LOGIN_PAGE
<img width="1878" height="879" alt="image" src="https://github.com/user-attachments/assets/35ef98ea-a70b-4380-a864-928b1bb3be94" />

### HOME_PAGE
<img width="1903" height="892" alt="Screenshot 2026-04-13 233448" src="https://github.com/user-attachments/assets/eae36333-4b61-4792-b58f-c1b6ea0e58be" />

### WORKSHOP_UI
<img width="1892" height="887" alt="image" src="https://github.com/user-attachments/assets/5c93491b-b18e-4f51-9c02-fcd4230c606f" />

#### VIEW_Available Workshops
<img width="1901" height="893" alt="Screenshot 2026-04-13 233723" src="https://github.com/user-attachments/assets/3ab537b6-d917-4bd7-8732-fecbb299b109" />

### DASHBOARD:
<img width="1888" height="886" alt="image" src="https://github.com/user-attachments/assets/ec7fba92-4ad1-4e2a-ac3e-42786185133a" />

### TRACKER_PAGE
<img width="1898" height="888" alt="image" src="https://github.com/user-attachments/assets/a09547a8-9fdb-44b0-8fdc-4d03e07aff7f" />


### ACCOUNT_CREATE
<img width="1878" height="882" alt="Screenshot 2026-04-13 234139" src="https://github.com/user-attachments/assets/bc690476-981c-4d8e-9b39-f0a336ccd62b" />

## Conclusion:

This project focused on enhancing the user experience of the existing workshop booking system by redesigning the interface using React. The improvements resulted in a cleaner, more modern, and mobile-friendly UI that improves usability and navigation for students. Key enhancements include better visual hierarchy, responsive design, improved form usability, and a structured layout using reusable components. The redesigned interface ensures faster interaction, accessibility, and a more engaging user experience while maintaining performance. Overall, this redesign demonstrates the importance of thoughtful UI/UX decisions in transforming a basic functional system into a user-friendly and visually appealing application.
