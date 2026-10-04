# Blanca Carreno Labra - Personal Portfolio

A complete six-page English portfolio in HTML, CSS and JavaScript. Source files use vertical formatting, two-space HTML indentation, contextual names and explanatory comments. The supplied portrait and resume are included without alteration.

## Open and edit
The downloadable ZIP contains the six HTML pages directly in `Blanca-Portfolio/`, plus `assets/` and this README. Open that folder in VS Code. `index.html` is the starting page.

For reliable form capture across pages, use VS Code Live Server or run from the website folder:

    python3 -m http.server 8000

Then open http://localhost:8000. In the hosted source checkout, use `--directory dist` instead.

## Files
- `index.html`: Home, welcome, mission and links to About/Projects.
- `about.html`: full name as supplied in the resume, portrait, biography and PDF resume link.
- `projects.html`: three academic projects with concept images, description, role and outcome.
- `education.html`: the three qualifications from the supplied resume, completion years/current status and professional experience.
- `services.html`: web development, programming support and software design, each with an image.
- `contact.html`: email, phone, location, LinkedIn and five-field form.
- `assets/styles.css`: shared, responsive styling, expanded vertically for editing.
- `assets/main.js`: mobile navigation, validation, session capture and Home confirmation.
- `assets/Resume_Blanca.pdf`: supplied final resume.
- `assets/blanca-portrait.png`: supplied portrait.
- `assets/restaurant.svg`, `submission.svg`, `blinddog.svg`: original project concept diagrams.

## Rubric verification
| Requirement | Where it is implemented |
|---|---|
| Six required pages | Home, About Me, Projects, Education, Services, Contact Me |
| 1a. Navigation across all pages | Shared navigation on all six pages, active-page indicator and accessible mobile menu |
| 1b. Custom logo near navigation | Original BC initials mark in each header; matching favicon |
| 1c. Welcome, About button and mission | Home hero and mission section |
| 1d. Legal/full name, photo and short biography | About; name follows the supplied resume: Blanca Carreno Labra |
| 1e. Resume PDF link | About links to the supplied, unchanged PDF |
| 1f. Three projects with images, role and outcome | Casa del Sol, Assignment Tracking System, BlindDog; each has a concept diagram, description, role and outcome |
| 1g. Educational/professional qualifications, dates and degrees | All three education credentials in the supplied resume; Centennial marked in progress, Industrial Engineering 2019, Accounting Technician 2011; professional roles include date ranges |
| 1h. Services list with images | Three service cards with explanatory images |
| 1i. Contact information panel | Name, Kitchener location, real email and phone, LinkedIn |
| 1j. Interactive form captures data and returns Home | First name, last name, phone, email and message captured before redirect |
| 1k. Functional JS, CSS and media assets | Shared local assets, real PNG and PDF, three SVG images |
| 1l. Code verification | HTML structure/local reference checks; JavaScript syntax and form behavior checks; asset integrity checks |
| 2a. Internal comments | Shared HTML section comments; CSS explanations; JavaScript behavior comments |
| 2b. Contextual variable names | navigationToggle, mainNavigation, contactForm, contactData, savedMessage, confirmationPanel |

## Contact form behavior
The assignment permits a demo rather than an email-delivery service. This implementation uses native validation, rejects whitespace-only required entries, captures all five fields in sessionStorage, and redirects to Home. Home displays a truthful confirmation and clears the temporary record. No email is sent. Personal data is not put in the URL. Storage errors show an accessible error and prevent a false success. Use sample data when testing.

## Content accuracy and verification limits
- The supplied resume gives Centennial as “Present” without enrolment or expected graduation dates. The page uses “Present / In progress · 2026”, not an invented completion year.
- The education list follows the qualifications in the supplied resume. Additional credentials not listed there are not assumed.
- Project images are explicitly identified as concept diagrams, not screenshots. The assignment asks for images but does not require screenshots.
- The site remains private. A teacher needs access or the complete ZIP submission.
- Automated checks verify HTML structure, local links/assets, field labels, required content, JavaScript syntax and form behavior. Browser visual/interaction QA is unavailable in this environment; the checks do not guarantee a grade or certify every browser.
