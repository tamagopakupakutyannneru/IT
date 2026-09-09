// 「会社について」ボタンを取得
const aboutButton = document.getElementById("aboutButton");
const bgm = document.getElementById("bgm");
const volumeButton = document.getElementById("volumeButton");
const volumeSlider = document.getElementById("volumeSlider");

// 初期音量
bgm.volume = 0.5;


// ページを最初にクリックしたらBGM再生
document.addEventListener("click", function startBGM() {

    bgm.play();

    // 一度再生できたら、このイベントは削除
    document.removeEventListener("click", startBGM);

}, { once: true });


// 音量変更
volumeSlider.addEventListener("input", function() {

    bgm.volume = volumeSlider.value;

    if (bgm.volume == 0) {
        volumeButton.textContent = "🔇";
    } else if (bgm.volume < 0.5) {
        volumeButton.textContent = "🔉";
    } else {
        volumeButton.textContent = "🔊";
    }

});


// ミュートボタン
volumeButton.addEventListener("click", function() {

    if (bgm.muted) {

        bgm.muted = false;

        volumeButton.textContent = "🔊";

    } else {

        bgm.muted = true;

        volumeButton.textContent = "🔇";

    }

});
// ボタンがクリックされたとき
aboutButton.addEventListener("click", function() {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});


// 「詳しく見る」ボタン
const detailButton = document.getElementById("detailButton");

detailButton.addEventListener("click", function() {

    const message = document.getElementById("message");

    message.textContent =
        "ゲームを作ったり、わからないことを教えたり...\nとにかく...! いろいろなことをします";

});


// お問い合わせボタン
const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function() {

    alert("サービス開始までしばらくお待ちください...");

});