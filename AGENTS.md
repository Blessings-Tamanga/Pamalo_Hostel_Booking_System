# AGENTS.md — Pamalo Hostel Booking System

## What this is

A pure static HTML/CSS/JS website for hostel booking. No build tools, no framework, no package manager, no backend. Open in a browser or use Live Server.

## Quick start

```powershell
# VS Code Live Server (configured port 5502)
# Right-click any .html file -> Open with Live Server
```

## Repo layout

```
index.html            # Home page (hero slider + sections)
about.html            # About page
contact.html          # Contact with map + form
hostels.html          # Hostel listings
services.html         # Services page
Login.html            # Login form
Signup.html           # Signup form (was broken — fixed)
payment.html          # Payment page (stub)

# User dashboard
dashboard.html        # Dashboard overview (stats, current booking, notifications)
my-bookings.html      # Active, upcoming, completed, cancelled bookings
booking-details.html  # Payment status, stay details, receipt, actions
edit-profile.html     # Update name, phone, password, preferences
notifications.html    # Booking confirmations, reminders, alerts

# Admin dashboard
admin/dashboard.html          # Summary: occupancy, revenue, cancellations, alerts
admin/manage-rooms.html       # Add, edit, disable, delete room listings
admin/manage-bookings.html    # View, approve, modify, cancel, create bookings
admin/manage-users.html       # View, suspend, assign roles, reset access
admin/payments.html           # Track payments, refunds, invoices
admin/reports.html            # Occupancy trends, revenue, popular rooms
admin/content.html            # Banners, FAQ, policies, gallery, announcements
admin/audit-logs.html         # System action log for security
admin/settings.html           # Hostel rules, taxes, currency, limits, email, integrations

assets/
  style/
    css.css           # All public site styles
    dashboard.css     # Dashboard sidebar, cards, tables, modals, forms
  js/
    script.js         # Hero slider (auto-advance every 5s)
    data.js           # localStorage CRUD layer, default data, helpers
    dashboard.js      # Sidebar toggle, filter tabs, modal toggle, page init
  media/              # Images
```

## Known quirks & bugs

- **CSS path inconsistency**: `index.html`, `Login.html` use `assets/style/css.css` (correct). `about.html`, `Signup.html` use `assets/css/css.css` (wrong).
- **CSS duplication**: `css.css` has duplicate rule blocks (`.hero-section`, `.hero-controls`, `.hero-section-content` appear twice).
- **Image path mismatch**: HTML inline styles reference `assets/images/hostel1.jpg` etc., but images live in `assets/media/`. CSS backgrounds (`url('../media/...')`) resolve correctly from `assets/style/`.
- **All data is editable**: Everything uses `localStorage` via `data.js`. No hardcoded sample data in HTML. Changes made through dashboards persist across page loads.
- **Auth is client-side**: Login/Signup uses `localStorage` with Base64-encoded passwords. Not cryptographically secure — for demonstration only.
- **Password reset**: Simulated via `localStorage`. Reset codes shown in-page for debugging. Not a real email workflow.
- **No real payments**: Payment page and invoice system are UI simulations. No real transactions occur.
- **No real notifications**: Email/SMS toggles and notification history are stored in `localStorage` only — no SMTP or SMS integration.
- **Reviews require approval**: User reviews start as `pending` and must be approved in admin Content page.
- **Missing video**: All pages reference `assets/videos/hostel-tour.mp4` — does not exist.
- **No backend**: Form actions are placeholders (`instance.com/login`, `#`). All client-side only.
- **Script loading**: Most pages load `script.js` with `defer`; `about.html` and `Signup.html` load it without.
- **Case sensitivity**: `Login.html` is PascalCase (links to `login.html` lowercase). `Signup.html` links to `Login.html` (capital L).

## Style conventions

- Currency: Malawian Kwacha (MK) throughout. No USD.
- Color: primary `#009272` (green), hover `#007a5e`.
- Font: Arial, sans-serif. Icons via Font Awesome 5.
- No CSS variables or preprocessors — plain CSS.
- All CSS in a single file (`css.css`).
- Dashboard styles in `dashboard.css` — sidebar, cards, tables, modals, forms.
- JS in `script.js` — only hero slider logic.
- Dashboard JS in `dashboard.js` — sidebar toggle, filter tabs, modal toggles.

## What NOT to do

- Do NOT run `npm install` or any build tool — there is none.
- Do NOT look for tests, CI, linting, or type checking — none exist.
- Do NOT expect a backend or database — this is a frontend-only static site.
- Do NOT add comments to HTML/CSS/JS unless the user asks (matches existing style).
