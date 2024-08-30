function showPhone(button) {
    let phoneNumber = button.nextElementSibling;
    phoneNumber.classList.toggle('hidden');
    button.textContent = phoneNumber.classList.contains('hidden') ? 'Ver Telefone' : 'Ocultar Telefone';
}

document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('phone');

    function formatCPF(value) {
        value = value.replace(/\D/g, '');
       
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3}\.\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3}\.\d{3}\.\d{3})(\d{1,2})/, '$1-$2'); 
        return value;
    }

    function formatTelefone(value) {
      
        value = value.replace(/\D/g, '');
        
        value = value.replace(/^(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
        return value;
    }

    function maskInput(event, formatFunction) {
        let value = event.target.value;
        const formattedValue = formatFunction(value);
        event.target.value = formattedValue;
    }

    cpfInput.addEventListener('input', function(event) {
        maskInput(event, formatCPF);
    });

    telefoneInput.addEventListener('input', function(event) {
        maskInput(event, formatTelefone);
    });


    function maskCPF(event, formatFunction) {
        const input = event.target;
        const value = input.value;
        const formattedValue = formatFunction(value);
        const maskedValue = formattedValue.replace(/\d/g, '0'); 
        input.value = maskedValue;
    }
    function maskPhone(event, formatFunction) {
        const input = event.target;
        const value = input.value;
        const formattedValue = formatFunction(value);
        const maskedValue = formattedValue.replace(/\d/g, '9'); 
        input.value = maskedValue;
    }

    cpfInput.addEventListener('input', function(event) {
        maskCPF(event, formatCPF);
    });

    telefoneInput.addEventListener('input', function(event) {
        maskPhone(event, formatTelefone);
    });
});

function enviarMensagem(){
    alert('Mensagem enviada!');
    
    document.getElementById('cpf').value ='';
    document.getElementById('phone').value='';
    document.getElementById('subject').value='';
}

document.addEventListener('DOMContentLoaded', function() {
    const val1Input = document.getElementById('value1');
    const val2Input = document.getElementById('value2');
    const val3Input = document.getElementById('value3');
    const resultBox = document.getElementById('result-box');

    function calculate() {
        let val1 = parseFloat(val1Input.value);
        let val2 = parseFloat(val2Input.value);
        let val3 = parseFloat(val3Input.value);

        if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3) && val1 !== 0) {
            let result = (val3 * val2) / val1;
            resultBox.textContent = result.toFixed(2);
        } else {
            resultBox.textContent = ''; 
        }
    }

    val1Input.addEventListener('input', calculate);
    val2Input.addEventListener('input', calculate);
    val3Input.addEventListener('input', calculate);

    val1Input.addEventListener('input', calculate);
    val2Input.addEventListener('input', calculate);
    val3Input.addEventListener('input', calculate);
});

const modal = document.getElementById('imageModal');
const background = document.querySelector('.background-modal');
const closeButton = document.getElementById('closeModalButton');

function openModal() {
  modal.style.display = 'block';
  background.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  background.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
background.addEventListener('click', closeModal);

function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-responsiveness');
    dropdown.classList.toggle('show');
  }
