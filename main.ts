let sonar = 0
cuteBot.motors(30, 30)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 5 && sonar < 10) {
        cuteBot.motors(0, 0)
    } else if (sonar < 5) {
        cuteBot.motors(-30, -30)
    } else {
        cuteBot.motors(30, 30)
    }
})
