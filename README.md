# Siddharth Kote - PCB Design Engineer Portfolio

A modern, high-impact portfolio tailored specifically for **PCB Design Engineers & Hardware Developers**. Designed to showcase schematic architecture, 2-layer layout precision, DFM rules, and embedded hardware bring-up in **KiCad 9**.

---

## 🚀 Quick Preview & Running Locally

Because this project is built using modern semantic HTML5, Tailwind CSS, and lightweight vanilla JavaScript, **there are no heavy node build steps or dependencies required to run it**.

### Option 1: Double-Click
Simply open `index.html` in any web browser (Chrome, Edge, Firefox, Brave).

### Option 2: Local Python Server (Recommended for instant testing)
Open terminal or PowerShell in this folder and run:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🎨 Key Features Built for Hardware Recruiters

1. **Interactive PCB Layer Inspector**:
   - Recruiters and engineering managers can toggle between **All Layers**, **F.Cu (Top Copper)**, **B.Cu (Bottom Copper)**, **Silkscreen**, and **GND Pour**.
   - Shows that you understand layer stackups, return paths, and net classes.

2. **Project Deep-Dives (Tabbed Architecture)**:
   - **Overview & Goals**: Problem statement & core silicon architecture.
   - **Schematic Architecture**: Hierarchical sheet design, symbol drafting, decoupling capacitor sizing, ERC validation.
   - **Layout & DFM Strategy**: Net classes, trace clearances, copper pours, crystal loop area isolation, and thermal dissipation.
   - **Hardware Specifications Table**: Layer count, package types, voltage domains, clocks, and design constraints.

3. **Featured Boards Included**:
   - **Board 1**: *MCU Data Logger* (ATmega328P-AU, DS1337 RTC, dual 24LC1025 EEPROMs, I2C/UART/ICSP).
   - **Board 2**: *SafeSteps* (ESP32-WROOM-32, NEO-6M GPS, A7670C 4G LTE, HT7333 3.3V LDO, tactile SOS, Buzzer).

4. **ECAD & Hardware Capabilities Matrix**:
   - Highlights **KiCad 9**, Hierarchical schematics, ERC/DRC, DFM, Net Classes, and microcontrollers.

5. **Instant Contact & Clipboard Integration**:
   - Single-click copy for your direct email (`siddharthkote129@gmail.com`) and phone (`+91-8623001138`) with visual confirmation toast.

---

## 📸 Adding Your Own KiCad 3D Renders or Schematics

Your portfolio already includes simulated vector PCB graphics. If you'd like to showcase your exact 3D KiCad renders or schematic exports:

1. **Export Images from KiCad**:
   - In KiCad Pcbnew, go to `View -> 3D Viewer -> File -> Export Current View as Image` (or Raytracing render).
   - Save high-res PNG or JPEG images.

2. **Place Files in Assets Folders**:
   - For Project 1: Place in `assets/images/projects/data-logger/`
   - For Project 2: Place in `assets/images/projects/safesteps/`

3. **Link Your Resume PDF**:
   - Place your resume PDF in `assets/docs/resume.pdf` to enable one-click resume downloading.

---

## 🌐 Free Hosting on GitHub Pages (Takes 2 minutes)

1. Create a GitHub repository (e.g. `pcb-portfolio`).
2. Push this folder's contents:
   ```bash
   git init
   git add .
   git commit -m "Initial PCB portfolio launch"
   git remote add origin https://github.com/siddharthkote25/pcb-protfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Settings -> Pages** on GitHub, select **Branch: main / root**, and click **Save**.
4. Your website is live worldwide at `https://siddharthkote25.github.io/pcb-protfolio/`!
