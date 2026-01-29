setInterval(() => {
    let aujourdhui = new Date().getTime()
    let dateButoire = new Date("2026-07-10 00:00:00").getTime()
    let difference = dateButoire - aujourdhui

    let jours = Math.floor(difference / (1000 * 60 * 60 * 24))
    let heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let secondes = Math.floor((difference % (1000 * 60)) / 1000)

    document.getElementById("jours").innerText = jours + " J"
    document.getElementById("heures").innerText = heures + " H"
    document.getElementById("minutes").innerText = minutes + " M"
    document.getElementById("secondes").innerText = secondes + " S"
}, 100)