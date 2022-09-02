input.onButtonPressed(Button.A, function () {
    numero1 = 0 + 1
    basic.showNumber(numero2)
})
input.onButtonPressed(Button.AB, function () {
    cambio = "lit"
})
input.onButtonPressed(Button.B, function () {
    numero1 = 0 - 1
    basic.showNumber(numero1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Hello!")
})
let cambio = ""
let numero2 = 0
let numero1 = 0
numero1 = randint(0, 10)
numero2 = randint(0, 10)
cambio = ""
basic.forever(function () {
	
})
