const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const h1 = document.querySelector('h1');

let yesFontSize = 18;
let noFontSize = 18;

const noTexts = [
    "ไม่", 
    "แน่ใจเหรอ?", 
    "คิดดีๆ นะ", 
    "ให้โอกาสอีกที", 
    "ใจร้ายจัง...", 
    "จะกด No จริงดิ?"
];
let noIndex = 0;

noBtn.addEventListener('click', () => {
    // 1. เพิ่มขนาดปุ่ม Yes
    yesFontSize += 20;
    yesBtn.style.fontSize = `${yesFontSize}px`;
    yesBtn.style.padding = `${yesFontSize/2}px ${yesFontSize}px`;

    // 2. ลดขนาดปุ่ม No
    noFontSize = Math.max(5, noFontSize - 2);
    noBtn.style.fontSize = `${noFontSize}px`;
    noBtn.style.padding = `${noFontSize/2}px ${noFontSize}px`;

    // 3. เปลี่ยนคำบนปุ่ม No
    noBtn.innerText = noTexts[noIndex % noTexts.length];
    noIndex++;

    // 4. สุ่มตำแหน่งปุ่ม No (Teleport)
    // คำนวณขอบเขตที่ปุ่มสามารถไปได้ (ไม่ให้ล้นออกนอกจอ)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// เมื่อกด Yes
yesBtn.addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
        <img src="https://media.tenor.com/nZsn90X3OpYAAAAM/baby-cat-dancing-png.gif" alt="Happy" class="gif">
        <h1>เย้! รักนะจ๊ะ! 🥰</h1>
    `;
});