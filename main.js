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
        document.querySelector("#custom-tip").value = ""
 
        buttomSelected = document.querySelector(`#button-${value}`)
        buttomSelected.classList.add("button-selected")
        
      }
    
      function receiveCustomTipPercentageValue() {
        tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
        
        removeClassButtomSelected()
        }
        
        function removeClassButtomSelected() {
         if (buttonSelected !== null) {
          buttonSelected.classList.remove("button-selected")
          buttonSelected = null
      }
      }