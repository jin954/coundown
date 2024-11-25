let days = 0; // 日数の初期値

// 日数を保存して画面に表示
function saveDays() {
    const input = document.getElementById("daysInput");
    days = Math.max(0, parseInt(input.value) || 0); // 負の値を防ぐ
    updateDaysDisplay();
    closeSettings();
}

// 日数を表示する関数
function updateDaysDisplay() {
    const daysDisplay = document.getElementById("daysDisplay");
    daysDisplay.textContent = `${days} 日`;
}

// 次の日数に進む（減少）
function nextDay() {
    if (days > 0) {
        days--;
        updateDaysDisplay();
    }
}

// 前の日数に戻る（増加）
function prevDay() {
    days++;
    updateDaysDisplay();
}

// 設定モーダルを開く
function openSettings() {
    document.getElementById("settingsModal").style.display = "block";
}

// 設定モーダルを閉じる
function closeSettings() {
    document.getElementById("settingsModal").style.display = "none";
}

// 初期化処理
window.onload = function () {
    updateDaysDisplay();
};
