function getEliment(id) {
    return document.getElementById(id);
}

/** love button **/
const loveBtn = document.getElementsByClassName("heart-btn");
for (const lovebtn of loveBtn) {
    lovebtn.addEventListener("click", function () {
        const loveCount1 = getEliment("love-count");
        let count = parseInt(loveCount1.innerText);
        count = count + 1;
        loveCount1.innerText = count;
    });
}



/** copy button **/
const copyBtn = document.getElementsByClassName("copy-btn");
for (const copybtn of copyBtn) {
    copybtn.addEventListener("click", function () {
        const cartNumber = copybtn.closest(".card").querySelector("h2").innerText;
        navigator.clipboard.writeText(cartNumber);

        /**copy count**/
        const copyCountEl = getEliment("copy-count");
        let copyCount = Number(copyCountEl.innerText);
        copyCount++;
        copyCountEl.innerText = copyCount;

        alert(`✅ Number copied: ${cartNumber}`);
    });
}



