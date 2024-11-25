// script.js
let remainingDays = 30; // 初期の日数

// DOM要素を取得
const daysDisplay = document.getElementById("daysDisplay");
const daysInput = document.getElementById("daysInput");
const applyButton = document.getElementById("applyButton");
const decreaseButton = document.getElementById("decreaseButton");

// 設定適用ボタンのクリックイベント
applyButton.addEventListener("click", () => {
  const inputDays = parseInt(daysInput.value, 10); // 入力された値を取得
  if (!isNaN(inputDays) && inputDays > 0) {
    remainingDays = inputDays; // 日数を更新
    daysDisplay.textContent = `${remainingDays} 日`; // 表示を更新
  } else {
    alert("正しい日数を入力してください！");
  }
});

// カウントダウンボタンのクリックイベント
decreaseButton.addEventListener("click", () => {
  if (remainingDays > 0) {
    remainingDays--; // 日数を1減らす
    daysDisplay.textContent = `${remainingDays} 日`; // 表示を更新
  } else {
    alert("カウントダウンが終了しました！");
  }
});
