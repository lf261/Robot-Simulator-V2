
document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  let commandsByZara = document.getElementById("moves-container")

  let monster = document.querySelector("#robot")

        document.addEventListener("keydown", function(e){
           const direction  = e.key.slice(5)
           console.log(direction)

            let listElement = document.createElement("li")

            listElement.textContent = direction
            commandsByZara.append(listElement)

        })

    let button = document.getElementById("move-button") 

    button.addEventListener("click", function(e){
      commandsByZara.children

    })




})
