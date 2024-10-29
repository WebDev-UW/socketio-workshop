# Challenge 1: Confetti
When the confetti button is clicked, emit an event only to OTHER clients (Google socket.broadcast.emit for details) that calls the `showConfetti` function on their clients

### Steps:
1. Add a handler on the server that handles an event `"confetti"` with zero arguments that calls `socket.broadcast.emit("confetti")` to send the confetti event to clients
2. Add a handler on the client side that calls the `showConfetti` function to display confetti on the client's screen

More about confetti configuration here: https://www.kirilv.com/canvas-confetti/

# Challenge 2: Pumpkin Jumpscare
Do the same as the previous challenge, with the even name `"pumpkin"` and calling `showPumpkin` on the client-side to display the pumpkin jumpscare

# Challenge 3: Color Change
