// script.js
let remainingDays = 30; // 初期値

// DOM要素取得
const dayCount = document.getElementById("dayCount");
const completeButton = document.getElementById("completeButton");
const settingsButton = document.getElementById("settingsButton");
const popupOverlay = document.getElementById("popupOverlay");
const daysInput = document.getElementById("daysInput");
const applyButton = document.getElementById("applyButton");
const closeButton = document.getElementById("closeButton");

// 初期日数の表示
dayCount.textContent = remainingDays;

// 1日完了ボタンの動作
completeButton.addEventListener("click", () => {
  if (remainingDays > 0) {
    remainingDays--;
    dayCount.textContent = remainingDays;
  } else {
    alert("カウントダウンが終了しました！");
  }
});

// 設定ボタンの動作
settingsButton.addEventListener("click", () => {
  popupOverlay.style.display = "flex"; // ポップアップを表示
});

// 適用ボタンの動作
applyButton.addEventListener("click", () => {
  const inputDays = parseInt(daysInput.value, 10);
  if (!isNaN(inputDays) && inputDays > 0) {
    remainingDays = inputDays; // 日数を更新
    dayCount.textContent = remainingDays;
    popupOverlay.style.display = "none"; // ポップアップを閉じる
  } else {
    alert("正しい日数を入力してください！");
  }
});

// 閉じるボタンの動作
closeButton.addEventListener("click", () => {
  popupOverlay.style.display = "none"; // ポップアップを閉じる
});
