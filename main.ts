input.onButtonPressed(Button.A, function () {
    if (age == 16 && (written_test && g1)) {
        basic.showString("licence yes sir")
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let written_test = false
let g1 = false
let age = 0
age = 16
g1 = true
written_test = true
basic.forever(function () {
	
})
