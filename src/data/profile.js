// TODO: แก้ไขข้อมูลที่มีเครื่องหมาย [ ] ให้เป็นข้อมูลจริงของคุณ
import profileImg from '../assets/profile.jpg'

export const profile = {
  fullName: 'ศนิสา ใจเหี้ยม',
  nickname: 'ชมพู่',
  role: '[YOUR MAJOR / ROLE เช่น Frontend Developer]',
  university: 'มหาวิทยาลัยราชภัฏเทพสตรี',
  faculty: '[YOUR FACULTY / คณะ]',
  major: '[YOUR MAJOR / สาขาวิชา]',
  photo: profileImg,
  shortIntro:
    '[SHORT INTRODUCTION — เขียนแนะนำตัวสั้น ๆ 1-2 ประโยคเกี่ยวกับตัวคุณและสิ่งที่สนใจ]',
  email: '[YOUR EMAIL]',
  phone: '[YOUR PHONE NUMBER]', // ถ้าไม่ต้องการแสดง ให้ลบ field นี้ออกจาก Contact section
  github: 'https://github.com/[YOUR GITHUB USERNAME]',
  linkedin: 'https://linkedin.com/in/[YOUR LINKEDIN USERNAME]',
  social: [
    // เพิ่ม/ลบช่องทางอื่นได้ตามต้องการ เช่น Instagram, Facebook
    { label: 'Instagram', url: 'https://instagram.com/[YOUR USERNAME]' },
  ],
}

export const professionalProfile = {
  summary:
    '[PROFESSIONAL SUMMARY — สรุปภาพรวมตัวตนในเชิงวิชาชีพ เช่น เป็นนักศึกษาสาขาใด สนใจด้านใด มีประสบการณ์อะไรบ้าง เขียน 2-3 ประโยค]',
  objective:
    '[CAREER OBJECTIVE — เป้าหมายในสายอาชีพที่ต้องการ เช่น ต้องการฝึกงานในตำแหน่งใด หรือสายงานที่สนใจ]',
  interests: [
    '[ความสนใจด้านอาชีพ 1]',
    '[ความสนใจด้านอาชีพ 2]',
    '[ความสนใจด้านอาชีพ 3]',
  ],
  strengths: [
    '[จุดเด่นของตัวเอง 1]',
    '[จุดเด่นของตัวเอง 2]',
    '[จุดเด่นของตัวเอง 3]',
  ],
  goals:
    '[เป้าหมายในการทำงานหรือพัฒนาตนเอง — เขียน 1-2 ประโยค]',
}
