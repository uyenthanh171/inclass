// Lặp từ 1 tới 100
for (let i = 1; i <= 100; i++) {
    console.log ("Giá trị của i là:" + " ", i);
}
// Nếu giá trị vòng lặp chia hết cho 2, in "Số <i> là số chẵn"
for (let i = 1; i <= 100; i++) {
    if (i % 2 ===0) {
        console.log ("Số" + " " + i + " " + "là số chẵn")
    }
};
// Nếu giá trị vòng lặp không chia hết cho 2, in "Số <i> là số lẻ"
for (let i = 1; i <= 100; i++) {
    if (i % 2 !==0) {
        console.log ("Số" + " " + i + " " + "là số lẻ")
    }
};