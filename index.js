const myEmojis = ["👨‍💻", "🍜", "📚"]
const emojiContainerEle = document.getElementById("emojiContainer");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");


function renderEmojis() {
    emojiContainerEle.innerHTML = "";
    for(let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainerEle.append(emoji);
    }
}

renderEmojis();

pushBtn.addEventListener('click',function() {
    if(emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
    }
    renderEmojis();
})

unshiftBtn.addEventListener('click',function() {
    if(emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
    }
    renderEmojis();
})

popBtn.addEventListener('click',function() {
    myEmojis.pop();
    renderEmojis();
})

shiftBtn.addEventListener('click',function() {
    myEmojis.shift();
    renderEmojis();
})


// Collections

const collectionBtn = document.getElementById('collection-btn');
const collectionsEle = document.querySelector('.collections');
console.log(collectionsEle)

collectionBtn.addEventListener('click', function() {
    if ( collectionBtn.textContent === "Show my collections" ) {
        collectionBtn.textContent = "Hide my collections";
        collectionsEle.classList.toggle('disappear');
    } else {
        collectionBtn.textContent = "Show my collections";
        collectionsEle.classList.toggle('disappear');
    }
})