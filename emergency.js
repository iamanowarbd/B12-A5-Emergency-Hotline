function getElement(id) {
    return document.getElementById(id);
}

/** love button **/
const loveBtn = document.getElementsByClassName("heart-btn");
for (const lovebtn of loveBtn) {
    lovebtn.addEventListener("click", function () {
        const loveCount1 = getElement("love-count");
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
        const copyCountEl = getElement("copy-count");
        let copyCount = Number(copyCountEl.innerText);
        copyCount++;
        copyCountEl.innerText = copyCount;

        alert(`✅ Number copied: ${cartNumber}`);
    });
}


/** call button **/
const callBtn = document.getElementsByClassName("call-btn");

for (const callbtn of callBtn) {
    callbtn.addEventListener("click", function () {
        const card = callbtn.closest(".card");
        const cartTitle = card.querySelector("h1").innerText;
        const cartNumber = card.querySelector("h2").innerText;

        const coin = getElement("coin-count").innerText;
        let coinCount = Number(coin) - 20;

        if (coinCount < 0) {
            alert("❌ You don't have enough coins, you need at least 20 coins to make a call");
            return;
        }
        getElement("coin-count").innerText = coinCount;

        alert(`📞 Calling ${cartTitle} : ${cartNumber}`);

        const cartContainer = getElement("call-history-content");
        const newCart = document.createElement("div");
        newCart.innerHTML = `
         <div class="flex justify-between items-center bg-[#fafafa] shadow rounded-2xl p-4 mt-5">
            <div>
                <h2 class="font-bold text-1xl">${cartTitle}</h2>
                <p class="text-gray-500 text-[16px]">${cartNumber}</p>
            </div>
            <div>
                <p class="text-gray-500">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
         </div>
        `;
        cartContainer.append(newCart);
    });
}

/** clear button **/
getElement("clear-btn").addEventListener("click", function () {
    const cartContainer = getElement("call-history-content");
    cartContainer.innerHTML = "";
});