# Personal Portfolio Website

Portfolio ส่วนตัวของศนิสา ใจเหี้ยม (ชมพู่) พัฒนาด้วย React + Vite + Tailwind CSS

## ⚠️ สิ่งที่ต้องแก้ไขก่อนส่งงาน (สำคัญมาก)

ค้นหาคำที่อยู่ใน `[ ]` แล้วแทนที่ด้วยข้อมูลจริงของคุณ ไฟล์ที่ต้องแก้ทั้งหมดอยู่ใน `src/data/`:

| ไฟล์ | ต้องแก้อะไร |
|---|---|
| `src/data/profile.js` | คณะ/สาขา, Email, เบอร์โทร, GitHub, LinkedIn, คำแนะนำตัว, Career Objective |
| `src/data/education.js` | ประวัติการศึกษาทั้งหมด |
| `src/data/skills.js` | ทักษะจริงของคุณในแต่ละหมวด |
| `src/data/experience.js` | Project/กิจกรรม/ประสบการณ์จริง |
| `src/data/awards.js` | รางวัล ใบประกาศนียบัตร ความสามารถพิเศษ |
| `src/data/aiProcess.js` | หัวข้อ "ปัญหาที่พบ" (`aiIssues`) — บันทึกปัญหาจริงที่คุณเจอระหว่างทำงาน |

> ไม่ต้องแก้โครงสร้างโค้ดใด ๆ แค่แก้ค่าในไฟล์ข้อมูลเหล่านี้ หน้าเว็บจะอัปเดตให้อัตโนมัติ

## Technology ที่ใช้

- React 18 + Vite 5
- Tailwind CSS 3 (Custom Design Tokens: สี Ink/Slate/Indigo, ฟอนต์ Manrope + Inter + JetBrains Mono)
- lucide-react (ไอคอน)

## โครงสร้างเว็บไซต์

Single Page Application มี 8 Section: Hero → About/Career Objective → Education → Skills → Experience/Projects → Awards/Certificates → AI-Assisted Development → Contact พร้อม Navbar (Scroll Spy + Mobile Menu) และ Footer

## วิธี Run Project (Development)

```bash
npm install
npm run dev
```

จากนั้นเปิดเบราว์เซอร์ที่ `http://localhost:5173`

## วิธี Build (Production)

```bash
npm run build
```

ไฟล์ Production จะถูกสร้างในโฟลเดอร์ `dist/` ตรวจสอบ Build ก่อน Deploy ด้วย:

```bash
npm run preview
```

## วิธี Deploy

แนะนำ 3 ทางเลือกที่ Deploy ฟรีและใช้งานง่าย:

### Vercel (แนะนำ)
1. Push โปรเจกต์ขึ้น GitHub
2. เข้า [vercel.com](https://vercel.com) → New Project → Import Repository
3. Framework Preset จะตรวจจับ Vite อัตโนมัติ → กด Deploy

### Netlify
1. Push โปรเจกต์ขึ้น GitHub
2. เข้า [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`, Publish directory: `dist`

### GitHub Pages
1. ติดตั้ง `npm install -D gh-pages`
2. เพิ่ม `"homepage": "https://<username>.github.io/<repo>"` ใน `package.json`
3. เพิ่ม `base: '/<repo>/'` ใน `vite.config.js`
4. รัน `npm run build && npx gh-pages -d dist`

## AI Tool ที่ใช้และส่วนที่ช่วย

ใช้ **Claude (Anthropic)** ช่วยตลอดกระบวนการ ตั้งแต่วิเคราะห์ Requirement วางโครงสร้างโปรเจกต์ ออกแบบ Design System (สี/ฟอนต์/Layout) ไปจนถึงเขียน React Component จริงทุกไฟล์ รายละเอียดกระบวนการแบบเต็มอยู่ใน Section "AI-Assisted Development" ของเว็บไซต์ (`src/components/sections/AIDevelopment.jsx` และ `src/data/aiProcess.js`)

## ปัญหาที่พบระหว่างพัฒนาในสภาพแวดล้อมนี้

**ปัญหา:** เครื่องมือที่ใช้สร้างโปรเจกต์นี้ไม่มีการเชื่อมต่ออินเทอร์เน็ต จึงไม่สามารถรัน `npm install` เพื่อทดสอบ Build จริงได้ในขั้นตอนสร้างไฟล์

**วิธีแก้ไข:** เขียนโค้ดทุกไฟล์ด้วยความระมัดระวังตาม React/Vite/Tailwind Syntax มาตรฐาน และตรวจทาน Import/Export, JSX Syntax, และ Tailwind Class ด้วยมืออีกครั้งก่อนส่งมอบ — **คุณควรรัน `npm install` และ `npm run build` บนเครื่องของคุณเองเป็นขั้นตอนแรกเพื่อยืนยันว่าไม่มี Error หลงเหลือ** หากพบ Error ใด ๆ แจ้งข้อความ Error กลับมาได้ทันที

## Checklist ก่อนส่งงาน

- [x] Personal Information & Contact
- [x] Career Objective / Professional Profile
- [x] Education
- [x] Skills & Abilities
- [x] Experience / Projects / Activities
- [x] Awards / Certificates / Additional Information
- [x] AI-Assisted Development
- [x] Responsive Design (Mobile-first, ทดสอบ Breakpoint sm/md/lg)
- [x] Accessibility (Semantic HTML, Alt text, Keyboard Focus, Skip Link, ARIA labels)
- [x] No API Keys / Passwords / Secrets ในโค้ด
- [ ] Git Repository พร้อมใช้งาน — ต้อง `git init` และ push ขึ้น GitHub เอง
- [ ] Production Build ผ่าน — **ต้องรัน `npm install && npm run build` เพื่อยืนยันด้วยตัวเอง**
- [ ] Deploy จริงบน Internet — เลือก 1 ใน 3 วิธีด้านบน
- [ ] แก้ Placeholder ทั้งหมดใน `src/data/` ให้เป็นข้อมูลจริง
