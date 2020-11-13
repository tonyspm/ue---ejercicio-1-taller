basic.forever(function () {
    basic.showNumber(0)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(2)
        basic.pause(100)
    } else {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            basic.showNumber(1)
            basic.pause(100)
        }
    }
})
