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

        alert("✅ Number copied: ${cartNumber}");
    });
}


/** call button **/
const callBtn = document.getElementsByClassName("call-btn");

for (const callbtn of callBtn) {
    callbtn.addEventListener("click", function () {
        const cartTitle = callbtn.parentNode.parentNode.querySelector("h1").innerText;
        const cartNumber = callbtn.parentNode.parentNode.querySelector("h2").innerText;

        const coin = getEliment("coin-count").innerText;
        let coinCount = Number(coin) - 20;

        if (coinCount < 0) {
            alert("❌ You don't have enough coins, you need at least 20 coins to make a call");
            return;
        }
        getEliment("coin-count").innerText = coinCount;

        alert(`📞 calling ${cartTitle} : ${cartNumber}`);

        const cartContenar = getEliment("cart-contenar");
        const newCart = document.createElement("div");
        newCart.innerHTML = `
         <div class="flex justify-between items-center bg-[#fafafa] shadow rounded-2xl p-4 mt-5">
            <div>
                <h2 class="font-bold text-1xl">${cartTitle}</h2>
                <p class="text-gray-500 text-[16px]">${cartNumber}</p>
            </div>
            <div>
                <p class="text-gray-500">${new Date().toLocaleTimeString()}</p>
            </div>
         </div>
        `;
        cartContenar.append(newCart);
    });
}

