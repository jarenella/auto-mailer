//Here's how you would call this API on your front-end

const link = `https://Emailer.coffeebeen.repl.co/send/YOUR_API_KEY_HERE`
const data = {
    email: "ttester@mailmail.com",
    message: "Hi there! How are you? This is a test messsage!",
    receiverEmail: "receipient@gmail.com"
}

//in this example, the email is sent on the click of a button vvv
document.getElementById("button").addEventListener("click", () => {
    fetch(link, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response)
    .then((data) => {
        console.log(data)
    })
    .catch()
})