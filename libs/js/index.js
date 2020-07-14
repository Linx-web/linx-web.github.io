window.onload = function () {
    document.querySelector('button').onclick = function () {
        document.body.style.backgroundColor = getColor();
    }
    function getColor() {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        return color;
    }
}