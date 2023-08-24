const ulList = document.querySelector('ul')
const inputAll = document.querySelectorAll('.container input[type=checkbox]')
const resetBtn = document.querySelector('.reset')
const copyBtn = document.querySelector('.copy')
const procField = document.querySelector('.procField')
const specBtn = document.querySelector('.genBtn')
const firstForm = document.querySelector('.box_window')
const secondForm = document.querySelector('.box_window-two')
const closeBtnFirst = document.querySelector('.close')
const closeBtnTwo = document.querySelector('.close-two')
const nextBtn = document.querySelector('.next')
const generujBtn = document.querySelector('.generujBtn')
const clearOneBtn = document.querySelector('.clear')
const clearTwoBtn = document.querySelector('.clear-two')

const allValueTime = document.querySelectorAll('.time option')
const allValueKonsSpec = document.querySelectorAll('.konsSpec option')
const konsSpec = document.querySelector('#konsSpec')

const checkboxTransp = document.querySelector('#transport')
const checkboxData = document.querySelector('#dataCheck') // Checkbox Dodaj date
const transpViewbox = document.querySelector('.transpViewbox')

const inputTypeTransport = document.querySelector('#typeTransport')
const transpDoctorCheck = document.querySelector('#transpDoctorCheck')
const transpTime = document.querySelector('#transpTime')
const transpDist = document.querySelector('#transpDist')



const nameP = document.querySelector('.name')
const adres = document.querySelector('.adres')
const pesel = document.querySelector('.pesel')
const telefon = document.querySelector('.telefon')

const nameInfo = document.querySelector('.nameInfo')
const adresInfo = document.querySelector('.adresInfo')
const peselInfo = document.querySelector('.peselInfo')
const telefonInfo = document.querySelector('.telefonInfo')

  

const patientName = document.querySelector('#patientName')
const patientPesel = document.querySelector('#patientPesel')
const patientAdres = document.querySelector('#patientAdress')
const patientTel = document.querySelector('#patientTel')
const porada = document.querySelector('#porada')
const time = document.querySelector('#time')

specBox = document.querySelector('.specyfikacja')
//--------------------- MIEJSCA W TABELI -----------
const priceLabTab = document.querySelector('.priceLabTab')
const descLabTab = document.querySelector('.descLabTab')

const priceObrazTab = document.querySelector('.priceObrazTab')
const descObrazTab = document.querySelector('.descObrazTab')

const pricePorTab = document.querySelector('.pricePorTab')
const descPorTab = document.querySelector('.descPorTab')

const priceTimeTab = document.querySelector('.priceTimeTab')
const descTimeTab = document.querySelector('.descTimeTab')

const priceKonsSpecTab = document.querySelector('.priceKonsSpecTab')
const descKonsSpecTab = document.querySelector('.descKonsSpecTab')

const priceTranspTab = document.querySelector('.priceTranspTab')
const descTranspTab = document.querySelector('.descTranspTab')

const priceOtherDiagTab = document.querySelector('.priceOtherDiagTab')
const descOtherDiagTab = document.querySelector('.descOtherDiagTab')

// Data Specyfikacji
const dateSpec = document.querySelector('.dateSpec')



// == Przyciski Specyfikacji
const printButton = document.querySelector('.print-spec')  // Przycisk Drukowanie Specyfikacji
const addProcManually = document.querySelector('.add-proc')  // Przycisk Dodawanie procedury ręcznie

//------ Okno Dodaj procedure ręcznie (Trzecie)
const threeForm = document.querySelector('.box_window-three') // Okno dodaj Procedure
const nameSerciveInput = document.querySelector('#nameService') // Okno dodaj Procedure
const priceServiceInput = document.querySelector('#priceService') // Okno dodaj Procedure
const selectBoxService = document.querySelector('#selectBoxService') // Okno dodaj Procedure
const clearThreeBtn = document.querySelector('.clear-three')
const closeBtnThree = document.querySelector('.close-three')
const addServiceBtn = document.querySelector('.addServiceBtn')

// Deklaracja 
const infoDate = document.querySelector('.infoDate')


const sumTabAll=  document.querySelector('.sumTabAll')


let newProc
let delProc
let aaa
let resProc

let priceLab
let descLab

let priceObraz
let descObraz

// const sumLab = []
// const sumObraz = []
const sumAll = []

// Dzisiejsza Data
const date = new Date;
console.log(date.toLocaleDateString("pl-PL"));

// window.alert("Witaj w nowej aplikacji do dodawania procedur. Nowa werjsa aplikacji posiada funkcje tworzenia oraz drukowania specyfikacji. Aplikacja była sprawdzona pod kątem błędów, jednak nie oznacza to, że może ich nie być. Prosze cię żebyś zwrócił/ła uwagę na ewentualne błędy przy dodawaniu procedur lub dodawaniu i liczeniu specyfukacji. Udanego korzystania !");

const addLi = (e) => {
  if (e.target.checked) {
    newProc = document.createElement('li')
    newProc.setAttribute('id', e.target.getAttribute('id'))
    newProc.textContent = e.target.getAttribute('proc')
    ulList.append(newProc)
    // procField.append(newProc.innerHTML)
  }
}


const copyContent = () => {
 inputAll.forEach(el => {
  if (el.checked == true){
   let a = el.getAttribute('proc')
   procField.append(a)
   console.log(a);
  }      
 });


navigator.clipboard.writeText(procField.innerHTML.slice(0,-1));
console.log('Content copied to clipboard');

procField.textContent = ''
}

const showForm = () => {
firstForm.classList.add('show-window')
clearAllTab()
}

const closeWindowFirst = () => {
  firstForm.classList.remove('show-window')
}

const closeWindowTwo = () => {
  secondForm.classList.remove('show-window')
}


const clearWindowFirst = () => {
  patientName.value = '' 
  patientAdres.value = ''
  patientPesel.value = ''
  patientTel.value = ''
  
  nameP.textContent = 'Imię i nazwisko:' 
   adres.textContent = 'Adres:' 
   pesel.textContent = 'Pesel:' 
   telefon.textContent = 'Telefon:' 
  
   nameInfo.textContent = 'Imię i nazwisko:' 
   adresInfo.textContent = 'Adres:' 
   peselInfo.textContent = 'Pesel:' 
   telefonInfo.textContent = 'Telefon:' 

   
   
  }
  
  const clearWindowTwo = () => {
    time.value = ''
    porada.value = '150'
    konsSpec.value = ''
    checkboxTransp.checked = false
    checkboxData.checked = false
    transpViewbox.classList.add('hideTranspBox')
    inputTypeTransport.value = ''
    transpDoctorCheck.checked = false
    transpTime.value = ''
    transpDist.value = ''
    clearAllTab()
    
  }
  
  const clearAllTab = () => {
    transpTime.value = ''
    transpDist.value = ''
    descTranspTab.textContent=''
    priceTranspTab.textContent=''
    descKonsSpecTab.textContent = ''
    priceKonsSpecTab.textContent = ''
    pricePorTab.textContent = ''
    descPorTab.textContent = ''
    descTimeTab.textContent = ''
priceTimeTab.textContent = ''
sumTabAll.textContent = ''
priceLabTab.textContent = ''
descLabTab.textContent = ''
descObrazTab.textContent = ''
priceObrazTab.textContent = ''
nameP.textContent = 'Imię i nazwisko:' 
adres.textContent = 'Adres:' 
pesel.textContent = 'Pesel:' 
telefon.textContent = 'Telefon:' 

nameInfo.textContent = 'Imię i nazwisko:' 
adresInfo.textContent = 'Adres:' 
peselInfo.textContent = 'Pesel:' 
telefonInfo.textContent = 'Telefon:' 

sumAll.length = 0
}

// const clearWindowTransp = () => {
  
  //     descTranspTab.textContent = ''
  //     priceTranspTab.textContent = ''
  
  // }
  
  
  
  
  const delLi = (e) => {
    if (e.target.checked == false) {
      delProc = document.getElementById(e.target.id)
      delProc.remove()
      
    }
  }
  
  
  const reset = () => {
    for (i = 0; i < inputAll.length; i++)
    inputAll[i].checked = false
  resProc = document.querySelectorAll('li')
  for (i = 0; i < resProc.length; i++) {
    resProc[i].remove()
  }
  closeWindowTwo()
  closeWindowFirst()
  clearWindowFirst()
  clearWindowTwo()
  specBox.classList.add('hideSpec')
  
}

function add(accumulator, a) {
  return accumulator + a;
}

const addPriceLab = () => {
  inputAll.forEach(el => {
    if (el.checked == true && el.hasAttribute('priceLab')){
      priceLab = `${el.getAttribute('priceLab')}zł `
      descLab = `${el.getAttribute('id').charAt(0).toLocaleUpperCase()+ el.getAttribute('id').slice(1)}, `
      
      priceLabTab.append(priceLab)
      descLabTab.append(descLab)
      sumAll.push(Number(el.getAttribute('priceLab')))
      
  }
});
}





const addPriceObraz = () => {
  inputAll.forEach(el => {
    if (el.checked == true && el.hasAttribute('priceObraz')){
      priceObraz = `${el.getAttribute('priceObraz')}zł `
      descObraz = `${el.nextElementSibling.innerHTML}, `
      
      priceObrazTab.append(priceObraz)
      descObrazTab.append(descObraz)
      sumAll.push(Number(el.getAttribute('priceObraz')))
      
    }
  });
}

const addPricePor = () => {
  if (porada.value == 150 ){
    pricePorTab.append(`${Number(150)}zł`)
    descPorTab.textContent = "Porada Ambulatoryjna"
    sumAll.push(Number(150))
  } else if (porada.value == 180){
    pricePorTab.append(`${Number(180)}zł`)
    descPorTab.textContent = "Porada Zabiegowa"
    sumAll.push(Number(180))
  } else  {
    pricePorTab.append(`${Number(330)}zł`)
    descPorTab.textContent = "Porada Ambulatoryjna i Zabiegowa"
    sumAll.push(Number(330))
  } 
}

const addPriceTime = (e) => {
  // if (e.target.value !== 200){
  descTimeTab.append(`Pobyt w SOR ${e.target.innerHTML}`)
  priceTimeTab.append(`${e.target.value}zł`)
  sumAll.push(Number(e.target.value))
  // } else{
    //   descTimeTab.append(`Pobyt w SOR do godziny `)
    //   priceTimeTab.append(`200zł`)
    // }
  }
  
  
  
  const addPriceKons = (e) => {
    descKonsSpecTab.append(`Konsultacja ${e.target.innerHTML}`)
    priceKonsSpecTab.append(`${e.target.value}zł`)
    sumAll.push(Number(e.target.value))
    
    if(e.target.value == '') {
      descKonsSpecTab.textContent = ''
      priceKonsSpecTab.textContent = ''
    }
  }
  
  const transpView = (e) => {
    if (e.target.checked) {
      transpViewbox.classList.remove('hideTranspBox')
      // console.log(e.target);       
      // procField.append(newProc.innerHTML)
    }else{
      transpViewbox.classList.add('hideTranspBox')
    }
  }
  
  const transpCount = () => {
    
    if(checkboxTransp.checked && inputTypeTransport.value !== '' && transpTime.value !== '' && transpDist.value !== '' ){
      
      let typeTransp  = inputTypeTransport.value
      let timeTransp = transpTime.value 
      let distTransp = transpDist.value
let sumTransp

sumTransp = (timeTransp * typeTransp) + (distTransp * 5)




console.log(typeTransp);
console.log(timeTransp);
console.log(distTransp);
console.log(transpDoctorCheck.checked);
console.log(sumTransp);

descTranspTab.append(` Transport `)
if (transpDoctorCheck.checked == true){
  sumTransp += (timeTransp * 150)
  descTranspTab.append(' z lekarzem')
  priceTranspTab.append(` ${timeTransp}H * 150 + `)
  
}
priceTranspTab.append(` ${timeTransp}H * ${typeTransp}zł + ${distTransp}Km * 5zł`)

sumAll.push(Number(sumTransp))  
}    
}

const scrollEl = () => {
  specBox.scrollIntoView();
}

// Dodawanie daty do specyfikacji i oświadczenia ==================
const addDate = () => {
  if(checkboxData.checked){
    infoDate.textContent = (`Ełk, dnia ${date.toLocaleDateString("pl-PL")}`)
    dateSpec.textContent = (`Data: ${date.toLocaleDateString("pl-PL")}`)
  }else{
  dateSpec.textContent = 'Data:............................'
  infoDate.textContent = 'Ełk, dnia.......................'
  }
}

// FUNKCJA DRUKOWANIE SPECYFIKACJI

const printSpec = () => { 
  window.print()
}

// Funkcje Trzeciego Okna (Dodawanie ręczne procedur)
// Otwieranie okna
const showFormThree = () => {
  threeForm.classList.add('show-window-three')
}

// Zamykanie okna 
const closeWindowThree = () => {
  threeForm.classList.remove('show-window-three')
}
// Czyszczenie okna 
const clearWindowThree = () => {

  selectBoxService.value = ''
  priceServiceInput.value = ''
  nameSerciveInput.value = ''
  }

  addServiceBtn.addEventListener('click', e =>{
    e.preventDefault()

    switch (selectBoxService.value) {
     case 'porada':
      if (descPorTab.textContent === ''){
        pricePorTab.append(`${priceServiceInput.value}zł`)
        descPorTab.append(`${nameSerciveInput.value}`)
      }else{
      pricePorTab.append(`, ${priceServiceInput.value}zł`)
      descPorTab.append(`, ${nameSerciveInput.value}`)
    }
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
     case 'spejalistyczna':
      if (descKonsSpecTab.textContent === ''){
        priceKonsSpecTab.append(`${priceServiceInput.value}zł`)
        descKonsSpecTab.append(`${nameSerciveInput.value}`)
      }else{
        priceKonsSpecTab.append(`, ${priceServiceInput.value}zł`)
        descKonsSpecTab.append(`, ${nameSerciveInput.value}`)
    }
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
     case 'labolatoryjna':
        priceLabTab.append(`${priceServiceInput.value}zł`)
        descLabTab.append(`${nameSerciveInput.value},`)
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
     case 'obrazowa':
      if (descObrazTab.textContent === ''){
        priceObrazTab.append(`${priceServiceInput.value}zł`)
        descObrazTab.append(`${nameSerciveInput.value}`)
      }else{
        priceObrazTab.append(`, ${priceServiceInput.value}zł`)
        descObrazTab.append(`, ${nameSerciveInput.value}`)
    }
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
     case 'diagnostyka':
      if (descOtherDiagTab.textContent === ''){
        priceOtherDiagTab.append(`${priceServiceInput.value}zł`)
        descOtherDiagTab.append(`${nameSerciveInput.value}`)
      }else{
        priceOtherDiagTab.append(`, ${priceServiceInput.value}zł`)
        descOtherDiagTab.append(`, ${nameSerciveInput.value}`)
    }
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
     case 'transport':
      if (descTranspTab.textContent === ''){
        priceTranspTab.append(`${priceServiceInput.value}zł`)
        descTranspTab.append(`${nameSerciveInput.value}`)
      }else{
        priceTranspTab.append(`, ${priceServiceInput.value}zł`)
        descTranspTab.append(`, ${nameSerciveInput.value}`)
    }
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
     case 'inne':
      if (descTimeTab.textContent === ''){
        priceTimeTab.append(`${priceServiceInput.value}zł`)
        descTimeTab.append(`${nameSerciveInput.value}`)
      }else{
        priceTimeTab.append(`, ${priceServiceInput.value}zł`)
        descTimeTab.append(`, ${nameSerciveInput.value}`)
    }
      sumAll.push(Number(priceServiceInput.value))
      selectBoxService.value = ''
      priceServiceInput.value = ''
      nameSerciveInput.value = ''
      sumTabAll.textContent = ''
      sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
      break;
    }


    // selectBoxService.value = ''
    threeForm.classList.remove('show-window-three')
  })

  // checkboxData.addEventListener('change',addDate )

addProcManually.addEventListener('click', showFormThree)  // Listener na przycisk dodaj Procedure 

printButton.addEventListener('click', printSpec) // listener na przycisk drukowania specyfikacji

checkboxTransp.addEventListener('change',transpView)
inputAll.forEach(inputItem => inputItem.addEventListener('change', addLi))
inputAll.forEach(inputItem => inputItem.addEventListener('change', delLi))
resetBtn.addEventListener('click', reset)
copyBtn.addEventListener('click',copyContent)
specBtn.addEventListener('click',showForm)



allValueTime.forEach(el => el.addEventListener('click', addPriceTime)) // FORMULARZ 2 POBYT NA SOR

allValueKonsSpec.forEach(el => el.addEventListener('click', addPriceKons)) // FORMULARZ 2 Konsultacja specjalisty

closeBtnFirst.addEventListener('click', e => {
  e.preventDefault()
  closeWindowFirst()
  clearWindowFirst()
})

closeBtnTwo.addEventListener('click', e => {
  e.preventDefault()
  closeWindowTwo()
  closeWindowFirst()
  clearWindowFirst()
  clearWindowTwo()
})

nextBtn.addEventListener('click', e => {
  e.preventDefault()
  closeWindowFirst()
  nameP.append(` ${patientName.value}`) 
  adres.append(` ${patientAdres.value}`) 
  pesel.append(` ${patientPesel.value}`) 
  telefon.append(` ${patientTel.value}`) 
  
  nameInfo.append(` ${patientName.value}`) 
  adresInfo.append(` ${patientAdres.value}`) 
  peselInfo.append(` ${patientPesel.value}`) 
  telefonInfo.append(` ${patientTel.value}`) 
  

  secondForm.classList.add('show-window')
})

generujBtn.addEventListener('click', e =>{
  e.preventDefault()
  addPriceLab()
  addPriceObraz()
  addPricePor()
  addDate() 
  transpCount()
  closeWindowTwo()
  closeWindowFirst()
  specBox.classList.remove('hideSpec')
  console.log(sumAll);
  sumTabAll.append(`${sumAll.reduce(add, 0)} zł`) 
  scrollEl()

} )


clearOneBtn.addEventListener('click', e =>{
  e.preventDefault()
  clearWindowFirst()
} )
clearTwoBtn.addEventListener('click', e =>{
  e.preventDefault()
  clearWindowTwo()
} )

//Czyszczenie okna Trzeciego (DODAWANIA PROCEDUR RĘCZNIE)
clearThreeBtn.addEventListener('click', e =>{
  e.preventDefault()
  clearWindowThree()
} )


// ZAMYKANIE + CZYSZCZENIE OKNA TRZECIEGO (DODAWANIA PROCEDUR RĘCZNIE)
closeBtnThree.addEventListener('click', e => {
  e.preventDefault()
  closeWindowThree()
  clearWindowThree()
})