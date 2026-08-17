export const aiOverview = {
  tool: 'Claude (Anthropic)',
  usedFor:
    'ใช้ Claude ช่วยตลอดกระบวนการพัฒนาเว็บไซต์ Portfolio นี้ ตั้งแต่การวางโครงสร้าง ออกแบบ UI/UX ไปจนถึงเขียน React Component จริง โดยผู้พัฒนาเป็นผู้ตรวจสอบ ปรับแก้ และทดสอบผลลัพธ์ทุกขั้นตอนด้วยตนเอง',
}

export const aiSteps = [
  {
    step: '01',
    label: 'Think',
    title: 'วิเคราะห์ Requirement',
    detail:
      'ให้ AI วิเคราะห์ Requirement ทั้งหมดของ Portfolio ก่อนเขียนโค้ด เช่น โครงสร้างเว็บไซต์ Component Structure การเลือก Color Palette Typography และ Responsive Strategy เพื่อวางแผนก่อนลงมือทำจริง',
  },
  {
    step: '02',
    label: 'Prompt',
    title: 'สั่งงานด้วย Prompt ที่ชัดเจน',
    detail:
      'เขียน Prompt ระบุ Role, Context, Requirement และ Constraint อย่างละเอียด เช่น เทคโนโลยีที่ต้องใช้ (React, Vite, Tailwind CSS) รูปแบบ UI ที่ต้องการ และกฎเรื่องห้ามสร้างข้อมูลส่วนตัวขึ้นเอง',
  },
  {
    step: '03',
    label: 'Result',
    title: 'ตรวจสอบผลลัพธ์ที่ได้',
    detail:
      'AI สร้างโครงสร้างโปรเจกต์ Component และโค้ดจริงตาม Requirement พร้อม Placeholder สำหรับข้อมูลส่วนตัวที่ยังไม่ได้ให้ เพื่อป้องกันการสร้างข้อมูลเท็จ',
  },
  {
    step: '04',
    label: 'Refine',
    title: 'ปรับปรุงคุณภาพงาน',
    detail:
      'ตรวจสอบโค้ดที่ได้ในประเด็น UI/UX, Responsive, Accessibility (Alt text, Semantic HTML, Keyboard Navigation), Performance และ Security (ไม่มี API Key หรือข้อมูลลับหลุดในโค้ด) แล้วให้ AI ปรับแก้ในจุดที่ยังไม่สมบูรณ์',
  },
  {
    step: '05',
    label: 'Test',
    title: 'ทดสอบระบบ',
    detail:
      'ทดสอบ Navigation, Layout ในแต่ละขนาดหน้าจอ, ปุ่มและลิงก์ต่าง ๆ, รูปภาพ, Typography, ตรวจสอบ Console Error และ Build Error ก่อนส่งมอบงาน — [ผู้พัฒนาเพิ่มเติม: บันทึกผลการทดสอบจริงของคุณที่นี่]',
  },
]

// TODO: หากพบปัญหา/Error ระหว่างพัฒนา ให้บันทึกไว้ที่นี่ตามความเป็นจริง
export const aiIssues = [
  {
    problem: '[ปัญหา/Error ที่พบระหว่างพัฒนา — ถ้ามี]',
    solution: '[แนวทางแก้ไขที่ใช้จริง]',
  },
]

export const samplePrompt = `Role: Senior Full-Stack Web Developer และ UI/UX Designer
Context: นักศึกษาต้องการ Personal Portfolio Website สำหรับ Take-home Exam
Task: สร้างเว็บไซต์ React + Vite + Tailwind CSS แบบ Single Page
Constraint: ห้ามสร้างข้อมูลส่วนตัวเอง ให้ใช้ Placeholder และแจ้งจุดที่ต้องแก้ไข
Format: เสนอแผนโครงสร้างก่อน รอยืนยัน แล้วจึงเขียนโค้ดจริงทีละส่วน`
