window.onload = function() {
    const description = document.getElementById("description");
    const readMoreBtn = document.getElementById("read-more-btn");
  
    const originalText = description.textContent; // 元のテキストを保持
    const maxLength = 10; // 最大文字数
    let truncatedText = originalText;
  
    // 文字数が10を超えていた場合、切り取って「...」を追加
    if (originalText.length > maxLength) {
      truncatedText = originalText.substring(0, maxLength) + "...";
      description.textContent = truncatedText; // 最初は切り取ったテキストを表示
      readMoreBtn.style.display = "inline-block";
    }else {
        readMoreBtn.style.display = "none"; // 10文字を超えていない場合はボタンを非表示
    }
  
    // モーダル関連
    const modal = document.getElementById("modal");
    const fullText = document.getElementById("full-text");
    const closeBtn = document.getElementById("close-btn");
  
    // 「続きを読む」ボタンがクリックされた時
    readMoreBtn.addEventListener("click", function() {
      if (description.textContent === truncatedText) {
        description.textContent = originalText; // クリック時に全文を表示
        readMoreBtn.style.display = "none";
      } else {
        description.textContent = truncatedText; // 再度、切り取って表示
        readMoreBtn.textContent = "もっと読む"; // ボタンのテキストを変更
      }
      // モーダルに全文を設定して表示
      fullText.textContent = originalText;
      modal.style.display = "block"; // モーダルを表示
    });
  
    // モーダルを閉じる（×ボタン）
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none"; // モーダルを非表示にする
      readMoreBtn.style.display = "inline-block";
    });
  
    // モーダルの外側をクリックした場合にもモーダルを閉じる
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none"; // モーダルを非表示にする
        readMoreBtn.style.display = "inline-block";
      }
    });
  };