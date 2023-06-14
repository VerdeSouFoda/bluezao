var currentAudio = null;

document.querySelector(".bloqueado").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio =  new Audio("sounds/bloqueado-sound.mp3")
    currentAudio.play();
});

document.querySelector(".porta-fantasma").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio("sounds/porta-fantasma.mp3");
    currentAudio.play();
});

document.querySelector(".gemidao").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio =new Audio("sounds/gemidao.mp3");
    currentAudio.play();
})

document.querySelector(".cu").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio("sounds/eu-quero-dar-o-cu.mp3");
    currentAudio.play();
})

document.querySelector(".picpay").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio("sounds/picpay.mp3");
    currentAudio.play();
})

document.querySelector(".tosse").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio("sounds/tosse.mp3");
    currentAudio.play();
})
