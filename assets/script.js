(function onStart() {

    const myButton = document.getElementById('my-button');
    console.log("started! myButton", myButton)

    if (myButton) {
        console.log('adding event listener to myButton')
        myButton.addEventListener('click', () => {
            alert("hello!");
        });
    }
})()