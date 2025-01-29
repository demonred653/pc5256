enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    radio.setGroup(5256)
})
