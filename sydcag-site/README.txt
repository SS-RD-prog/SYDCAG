# SYDCAG — Programme Hub
## Sydney Complex Aortic Group · Royal North Shore Hospital

---

## STEP-BY-STEP SETUP GUIDE

### STEP 1 — Set up Formspree (the form submission service)

1. Go to https://formspree.io and click "Get Started"
2. Sign up with your email: sebastian.saavedra@health.nsw.gov.au
3. Click "New Form" → give it a name like "SYDCAG Pre-Dinner Input"
4. Formspree will give you a unique Form ID that looks like: xyzabcde
5. Open the file **app.js** in a text editor
6. Find this line near the bottom:
      const res = await fetch("https://formspree.io/f/xyzpbkqr", {
7. Replace "xyzpbkqr" with YOUR actual Formspree form ID
8. Save app.js

All form submissions will then arrive at your email address.

---

### STEP 2 — Create a GitHub account

1. Go to https://github.com
2. Click "Sign up"
3. Use any email — your personal or NSW Health email both work
4. Choose a username (e.g. "sydcag-rnsh" or your name)
5. Verify your email address

---

### STEP 3 — Create a new repository

1. Once logged in to GitHub, click the "+" icon (top right)
2. Select "New repository"
3. Repository name: sydcag  (lowercase, no spaces)
4. Description: SYDCAG Programme Hub — Sydney Complex Aortic Group
5. Set to: PUBLIC  (required for free GitHub Pages hosting)
6. Leave all other options as default
7. Click "Create repository"

---

### STEP 4 — Upload the site files

1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop ALL THREE files from this folder:
     - index.html
     - style.css
     - app.js
3. At the bottom of the page, in the "Commit changes" box:
   - Leave the message as "Add files via upload"
4. Click "Commit changes"

---

### STEP 5 — Enable GitHub Pages

1. In your repository, click "Settings" (top menu bar)
2. In the left sidebar, click "Pages"
3. Under "Source", click the dropdown that says "None"
4. Select "main" (or "master")
5. Click "Save"
6. Wait about 60 seconds, then refresh the page
7. You will see a green banner saying:
   "Your site is published at https://YOUR-USERNAME.github.io/sydcag/"

That URL is your live site. Copy it and share it with dinner participants.

---

### STEP 6 — Test everything

1. Open the site URL in your browser
2. Enter the password: SYDCAG2026
3. Check all sections load correctly
4. Scroll to "Your Input" and submit a test response
5. Check that a confirmation email arrives at sebastian.saavedra@health.nsw.gov.au

---

### MAKING UPDATES LATER

To update any content on the site:
1. Edit the file on your computer
2. In GitHub, open the file you want to replace
3. Click the pencil icon (Edit) OR click "Add file" → "Upload files"
4. Upload the updated file
5. Commit the change — GitHub Pages updates automatically within 1-2 minutes

---

### PASSWORDS AT A GLANCE

- Site access password:  SYDCAG2026
- Formspree account:     use sebastian.saavedra@health.nsw.gov.au
- GitHub account:        your choice

---

### QUESTIONS

Contact: sebastian.saavedra@health.nsw.gov.au
