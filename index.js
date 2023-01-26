const moveDodgerLeft = () => {
    const num = dodger.style.left.replace("px", "")
    if(num > 0) { dodger.style.left = num - 1 + "px" }
}
const moveDodgerRight = () => {
    const num = parseInt(dodger.style.left.replace("px", ""));
    if (num < 360) { dodger.style.left = num + 1 + "px" }
}
