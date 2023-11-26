const form = document.querySelector("#form");

// Send values
form.addEventListener('submit', e => {
    e.preventDefault()
    const name = document.querySelector('#name-5a14').value;
    const email = document.querySelector('#email-5a14').value;
    const message = document.querySelector('#message-5a14').value;
    let tg = {
        token: "6422302067:AAHGzapSBBQrgvr2OneiA2OKWaG_LwXsCsU", // Your bot's token that got from @BotFather
        chat_id: "6050533918" // The user's (that you want to send a message) telegram chat id
      }
      
      if(name && email && message){
        const fullMassage = `Ismi: ${name}, \n Email: ${email}, \n Xabar: ${message}`
          console.log(name, email, message)
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
            console.log("Xabar jo'natilmadi")
        }
    });
  }