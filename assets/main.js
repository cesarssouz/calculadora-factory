function calculadora () {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector("btn-clear"),


        clearDisplay() {
            this.display.value = ''
        }, 

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        inicia() {
            this.clickBotao()
            this.clearDisplay()
        },

        clickBotao() {
            document.addEventListener('click', function (e) {
                const el = e.target

                if (el.classList.contains('btn-numero')) {
                    this.btnDoDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne()
                }
            }.bind(this))
        },
        
        btnDoDisplay(valor) {
            this.display.value += valor;
        },
    }
}

const calculator = calculadora()
calculator.inicia()
