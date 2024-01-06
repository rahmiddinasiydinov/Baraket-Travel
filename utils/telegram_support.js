const form = document.querySelector(".telegram-contact");

const date = new Date();
const today = date.getDate() + "." + date.getMonth()+1 + "." + date.getFullYear() 

// Send values
form.addEventListener('submit', e => {
    e.preventDefault()
    const name = document.querySelector('#name-5a14').value;
    const tel = document.querySelector('#email-5a14').value;
    const message = document.querySelector('#message-5a14').value;
    let tg = {
        token: "6983938812:AAEj6F-ouRMrkCjczP9ZGW90cg8ma4oDCoI", // Your bot's token that got from @BotFather
        chat_id: "6348189270" // The user's (that you want to send a message) telegram chat id
      }

      if(name && tel && message){
        const fullMassage = `Sana: ${today}%0AIsmi: ${name},%0ATelefon raqami: ${encodeURIComponent(tel)},%0AXabar: ${message}`
          console.log(name, tel, message)
        sendMessage (fullMassage, tg);
    } else{
        alert("Iltimos, barcha kiritish maydonlarini to'ldiring!");
    }
})


// function for sending message: 
function sendMessage (text, tg) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request

    fetch(url).then(res => res.json()).then(data =>{
        if(!data.ok){
            alert("Uzr, xabar jo'natilmadi.")
            console.log(data)
        }
    });
  }