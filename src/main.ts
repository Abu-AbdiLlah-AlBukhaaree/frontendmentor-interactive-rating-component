import './style.css'

const btnContainer = document.getElementById('btn-container') as HTMLDivElement
const btns = [...btnContainer.children]
const submitBtn = document.getElementById('submit') as HTMLButtonElement
const rateValueDOM = document.getElementById('rate-value') as HTMLSpanElement

let rateValue: string;

btns.forEach( element => {
  element.addEventListener('click', ()=>{

    rateValue = element.textContent as string
    rateValueDOM.textContent = rateValue
    
    submitBtn.addEventListener('click', () => {
      const thankYouDOM = rateValueDOM.closest('#thank-you') as HTMLElement
      const rateUsDOM = thankYouDOM.previousElementSibling as HTMLElement
      thankYouDOM.style.display = 'block'
      rateUsDOM.style.display = 'none'
    })

  })
});

