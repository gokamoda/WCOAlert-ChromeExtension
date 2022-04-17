window.onload = function(){
  let h5 = document.createElement('h5')
  h5.setAttribute('style','margin-top: 10px;')
  h5.innerHTML = "<strong>WCO Alert </strong>"
  let btnOn = document.createElement("button")
  let btnOff = document.createElement("button")
  btnOn.innerText ="Alert On"
  btnOff.innerText ="Alert Off"
  btnOn.setAttribute('class', 'btn btn-success')
  btnOff.setAttribute('class', 'btn btn-success')
  document.getElementById("questions-filter").appendChild(h5)
  document.getElementById("questions-filter").appendChild(btnOn)
  document.getElementById("questions-filter").appendChild(btnOff)
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
    const osc = ctx.createOscillator()
    osc.type = type
    osc.connect(ctx.destination)
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
      if ( (danger_text == "基礎知識学習フェーズ" || danger_text == "応用知識学習フェーズ"|| danger_text == "応用課題フェーズ"|| danger_text == "チーム開発フェーズ") &&  !element){
        sound("sine", 0.3)
        var textbox_element = document.getElementById('wrapper');
        var new_element = document.createElement('p');
        new_element.id = danger_id;
        textbox_element.appendChild(new_element);
      }
    }
  }
}
