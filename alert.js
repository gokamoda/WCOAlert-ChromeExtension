window.onload = function(){
  let h5 = document.createElement('h5')
  h5.setAttribute('style','margin-top: 10px;')
  h5.innerHTML = "<strong>WCO Alert </strong>"

  let btnOn = document.createElement("button")
  btnOn.innerText ="Alert On"
  btnOn.setAttribute('class', 'btn btn-success')

  let btnOff = document.createElement("button")
  btnOff.innerText ="Alert Off"
  btnOff.setAttribute('class', 'btn btn-success')

  let volBar = document.createElement("div")
  volBar.innerHTML = "<input type='range' id='vol' min='0.1' max='1' step='0.1' value='0.8'>"
  volBar.setAttribute('style', 'width: 200px; display:inline-block;')
  volBar.setAttribute('class', 'form-range')

  document.getElementById("questions-filter").appendChild(h5)
  document.getElementById("questions-filter").appendChild(btnOn)
  document.getElementById("questions-filter").appendChild(btnOff)
  document.getElementById("questions-filter").appendChild(volBar)
  btnOff.disabled = true
  btnOn.onclick = function btnOnClick(){
    alert = setInterval(alert_danger, 10000);
    btnOn.disabled = true
    btnOff.disabled = false
  }
  btnOff.onclick = function btnOffClick(){
    clearInterval(alert)
    btnOn.disabled = false
    btnOff.disabled = true
  }
}


// thanks to mr.fuke

function alert_danger() {
  function sound(type, sec) {
    const ctx = new AudioContext()
    const gainNode = ctx.createGain()
    let vol = parseFloat(document.getElementById('vol').value)
    gainNode.gain.value = vol;

    let osc = ctx.createOscillator()
    osc.type = type
    osc.frequency = 442
    osc.connect(gainNode).connect(ctx.destination)
    osc.start()
    osc.stop(sec)
  }
  const danger = document.getElementsByClassName("danger")
  const danger_length = danger.length
  if (danger_length > 0) {
    for (let i = 0 ; i < danger_length; i++) {
      const danger_id = danger[i].children[1].outerText
      const element = document.getElementById(danger_id)
      const danger_text = danger[i].children[10].outerText
      if (!element){
        sound("sine", 0.3)
        var textbox_element = document.getElementById('wrapper')
        var new_element = document.createElement('p')
        new_element.id = danger_id
        textbox_element.appendChild(new_element)
      }
    }
  }
}


