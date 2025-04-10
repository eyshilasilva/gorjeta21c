let bill = 0
  let tipPercentage = 0
  let numberOfPeople = 0
  let buttomSelected = null
 
     function reciveBillValue(){
     bill = document.querySelector("#bill").valueAsNumber
     }
     function calculateResults(){}
    
     function receiveOfpeopleValue(){
       numberOfPeople = document.querySelector("#people").valueAsNumber
     }
    
     function calculateResults(){}
    
    function receiveTipPercentageValue(value) {
    
      
        removeClassButtonSelected()
        document.querySelector("#custom-tip").value = ""
 
        buttomSelected = document.querySelector(`#button-${value}`)
        buttomSelected.classList.add("button-selected")
        
      }
      function calculateResults(){}
      function receiveCustomTipPercentageValue() {
        tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
        
        removeClassButtomSelected()
        
        function calculateResults(){}
        function removeClassButtomSelected() {
         if (buttonSelected !== null) {
          buttonSelected.classList.remove("button-selected")
          buttonSelected = null
      }
      }
    }
 
 
    function calculateResults() {
      if (bill !== 0 && tipPercentage !== 0 numberOfPeople !== 0) {
        
        let tipAmountPerson = calculateTipAmountPerson()
        calculateResultsPerson()
        }
    }
  
    function calculateTipAmountPerson() {
      let tipAmountStrong = document.querySelector(".amount strong")
      let tipAmountPerson = bill * tipPercentage / number0fPeople
      tipAmountStrong. textContent = '$${tipAmountPerson.toFixed(2)}'
    return tipAmountPerson
    }
  
    function  calculateResultsPerson(tipAmountPerson) {
      let totalStrong = document.querySelector(".total strong")
      let totalAmountPerson = bill / number0fPeople + tipAmountPerson
      totalStrong. textContent = '$${totalAmountPerson.toFixed(2)}'
     }