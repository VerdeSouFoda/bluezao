document.querySelector(".bloqueado").addEventListener("click", function () {
    new Audio("sounds/bloqueado-sound.mp3").play();
});

document.querySelector(".porta-fantasma").addEventListener("click", function () {
    var audioPortaFantasma = ("sounds/porta-fantasma.mp3");
    new Audio(audioPortaFantasma).play();
});

document.querySelector(".gemidao").addEventListener("click", function () {
    new Audio("sounds/gemidao.mp3").play();
})

document.querySelector(".cu").addEventListener("click", function () {
    new Audio("sounds/eu-quero-dar-o-cu.mp3").play();
})

document.querySelector(".picpay").addEventListener("click", function () {
    new Audio("sounds/picpay.mp3").play();
})

document.querySelector(".tosse").addEventListener("click", function () {
    new Audio("sounds/tosse.mp3").play();
})