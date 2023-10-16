import "./styles.css";

const app = document.getElementById("app")

app.onmousemove = (e) => {
const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const posX = e.pageX - rect.left;
    const posY = e.pageY - rect.top;
    console.log({posX , posY})
  
    card.style.setProperty("--mouse-x" , `${posX}px`)
    card.style.setProperty("--mouse-y" , `${posY}px`)
  })

}
