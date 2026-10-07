# Siddharth Kote — PCB Design Engineer Portfolio

A clean, modern, and engineering-focused personal portfolio website built for **Siddharth Kote**, an Electronics & Communication Engineering graduate focused on **PCB Design, Hardware Development, and Electronics**.

Built with semantic HTML5, modern Tailwind CSS, and lightweight vanilla JavaScript. No heavy Node.js builds or backend dependencies required — runs instantly in any browser and deploys seamlessly to GitHub Pages.

---

## 📁 Project Structure

```text
Portfolio_website/
├── index.html                 # Main portfolio website (semantic HTML5 & Tailwind CSS)
├── resume.pdf                 # Actual resume PDF for direct download
├── README.md                  # Documentation and GitHub Pages deployment guide
├── vercel.json                # Optional static hosting configuration
└── assets/
    ├── css/
    │   └── style.css          # Custom styling, dark palette & PCB grid layout
    ├── js/
    │   └── main.js            # Vanilla JS (modals, gallery lightbox, 1-click copy)
    ├── docs/
    │   └── resume.pdf         # Resume backup copy in docs directory
    └── images/
        └── projects/
            ├── data-logger/   # MCU Data Logger hardware assets
            │   ├── 3d-render.png         # Raytraced 3D board render from KiCad
            │   ├── top-view.png          # Top layout view (traces, mask, silkscreen)
            │   ├── schematic-sheet1.png  # Schematic Sheet 1 (ATmega328P Core)
            │   └── schematic-sheet2.png  # Schematic Sheet 2 (DS1337 RTC & EEPROMs)
            └── safesteps/     # SafeSteps personal safety hardware assets
                ├── 3d-render.png         # Raytraced 3D board render from KiCad
                ├── top-view.png          # Top layout view
                ├── schematic.png         # KiCad schematic diagram
                ├── breadboard-wiring-diagram.jpeg # Prototype bring-up
                └── pcb-schematic-diagram.jpeg     # System block architecture
```

---

## 🎨 Color Palette & Design Rules

Matches strict professional hardware engineering guidelines:
- **Background**: `#0B1120` (Dark Navy / Charcoal)
- **Cards / Secondary**: `#111827`
- **Text Primary**: `#F8FAFC`
- **Text Muted**: `#94A3B8`
- **Accent**: `#22C55E` (Subtle PCB Emerald Green)
- **Typography**: Inter (Body) & JetBrains Mono (Technical netlabels, ICs, specs)

---

## 📋 Included Sections

1. **Navigation**: Sticky bar with name, quick links, mobile responsive hamburger menu, and resume download.
2. **Hero**: Highlights target role (`PCB Design Engineer`), ECE background, quick stats, and raytraced 3D KiCad render of the MCU Data Logger board.
3. **About**: Concise professional narrative covering education at Nutan College of Engineering & Research, Pune, and PCB design philosophy.
4. **Skills**: Categorized technical skills (PCB Design, Schematic & Layout, Electronics, Embedded/MCU, PCB Verification, Manufacturing, Tools).
5. **Featured Projects**:
   - **MCU Data Logger**: ATmega328P-AU, DS1337 RTC, dual 24LC1025 EEPROMs, I2C/UART/ICSP, 2-layer KiCad 9 layout.
   - **SafeSteps**: ESP32, NEO-6M GPS, A7670C 4G LTE, HT7333 3.3V LDO, tactile SOS, buzzer, 2-layer KiCad 9 layout.
6. **Project Deep-Dive Modals**: Comprehensive technical breakdown for both boards (Overview, Objective, System Components, Schematics, Layout, Verification, Gerbers, and GitHub repo links).
7. **PCB Design Process**: 8-step engineering workflow from requirements definition to DRC sign-off and Gerber generation.
8. **PCB Knowledge / Capabilities**: Technical overview of component placement, decoupling capacitor strategies, ground return paths, trace sizing, and ERC/DRC auditing.
9. **Project Gallery**: Interactive lightbox gallery with high-resolution schematic exports, 2-layer layout views, and 3D board renders.
10. **Resume**: Dedicated resume card with "DOWNLOAD RESUME" button pointing to `resume.pdf`.
11. **GitHub Explorer**: Direct cards and links to all public hardware repositories.
12. **Contact**: Direct email (`siddharthkote129@gmail.com`), phone (`+91-8623001138`), location (Pune, India), GitHub, and LinkedIn links with 1-click clipboard copying.
13. **Footer**: Clean copyright and quick navigation.

---

## 🚀 How to Run Locally

### Option 1: Double-Click
Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Local HTTP Server (Optional)
In PowerShell or terminal:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 GitHub Pages Deployment Instructions

Your repository is already connected to GitHub:
`https://github.com/siddharthkote25/pcb-protfolio.git`

To deploy the latest website to GitHub Pages:

1. **Commit and push all changes**:
   ```bash
   git add .
   git commit -m "Deploy PCB design engineer portfolio with real KiCad renders"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/siddharthkote25/pcb-protfolio`
   - Click on **Settings** (top right tab).
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment -> Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

3. **View your live website**:
   Within 1–2 minutes, your website will be live worldwide at:
   `https://siddharthkote25.github.io/pcb-protfolio/`

---

## 📝 Updating Your Information

### 1. Resume
- To update your resume, simply replace `resume.pdf` in the root folder (and optionally in `assets/docs/resume.pdf`) with your new PDF file. Keep the name `resume.pdf` to preserve all download links.

### 2. LinkedIn Profile
- In `index.html`, search for `linkedin.com` and replace `https://www.linkedin.com/in/siddharthkote25` with your exact customized LinkedIn profile URL.

### 3. Contact Email / Phone
- In `index.html`, search for `siddharthkote129@gmail.com` or `+91-8623001138` to modify email or phone details anytime.
