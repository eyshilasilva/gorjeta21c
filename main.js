let bill = 0
  let tipPercentage = 0
  let numberOfPeople = 0
  let buttomSelected = null
 
     function reciveBillValue(){
     bill = document.querySelector("#bill").valueAsNumber
     
     }
 
     function receiveOfpeopleValue(){
       numberOfPeople = document.querySelector("#people").valueAsNumber
     }
    
 
    function receiveTipPercentageValue(value) {
    
      
        removeClassButtonSelected()
        buttomSelected = document.querySelector(`#button-${value}`)
        buttomSelected.classList.add("button-selected")
        
      }
    
      function removeClassButtonSelected() {
       if (buttomSelected !== null) {
        buttomSelected.classList.remove("button-selected")
        buttomSelected = null
      }
      }