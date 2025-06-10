# Alien Language Numeral Converter

โปรเจกต์นี้เป็นโปรแกรมสำหรับแปลง "ภาษาเอเลี่ยน" ให้เป็นตัวเลข โดยรองรับรูปแบบคำเฉพาะ เช่น AAA, LBAAA, RCRZCAB เป็นต้น  
เขียนด้วย TypeScript และใช้ [Effect](https://effect.website/) สำหรับการจัดการ asynchronous และ [Vitest](https://vitest.dev/) สำหรับ unit test

## โครงสร้างโปรเจกต์

```
.
├── src/
│   ├── program.ts         // คลาสหลักสำหรับรับ input และแสดงผล
│   ├── pipe/index.ts            // ฟังก์ชันแปลงภาษาเอเลี่ยนเป็นตัวเลข
│   └── program.test.ts    // ชุด unit test
├── package.json
├── tsconfig.json
└── README.md
```

## วิธีใช้งาน

1. ติดตั้ง dependencies  
   ```sh
   npm install
   # หรือ
   bun install
   ```

2. รันโปรแกรม  
   ```sh
   npm start
   # หรือ
   bun run start
   ```

3. ทดสอบโปรแกรม  
   ```sh
   npm test
   # หรือ
   bun run test
   ```
brew install gh

## ข้อกำหนด

- Node.js หรือ Bun
- TypeScript
- Effect
- Vitest

## License

MIT

---

> สามารถแก้ไขหรือขยาย logic การแปลงภาษาเอเลี่ยนได้ในไฟล์ `src/pipe/index.ts`