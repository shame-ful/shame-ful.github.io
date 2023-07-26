const terminal = document.querySelector('.terminal');
const output = terminal.querySelector('.output');
const inputLine = terminal.querySelector('.input-line');
const commandLine = terminal.querySelector('#command-line');
const shutdownText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will shutdown now!`;

const rebootText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will reboot now!`;

function outputCommand() {
    const input = commandLine.value;
    const outputString = `\n> ${input}\n`;
    output.innerHTML += outputString;
    commandLine.value = '';
    handleCommand(input);
}
// Sowwyz#1337
function handleCommand(command) {
    if (command === 'help') {
        const helpText = `Available commands:\n
        help - displays this help message\n
        clear - clears the screen\n
        nmap - port scan\n
        whoami - displays information about me\n
        projects - displays a list of my projects\n
        contact - displays my contact information\n
        poweroff - turns off the computer\n
        reboot - restarts the computer\n`
        output.innerHTML += helpText;
    } else if (command === 'clear') {
        output.innerHTML = '';
    } else if (command === 'nmap') {
        output.innerHTML += "You thought!"
    } else if (command === 'whoami') {
        output.innerHTML += "always shameless"
    } else if (command === 'projects') {
        output.innerHTML += "OSCP 2023 Student"
    } else if (command === 'contact') {
        output.innerHTML += "iam@shameful.dev \n\n"
    } 
  
    else if (command === 'poweroff') {
        output.innerHTML += ":3"

    } else {
        const errorText = `Command '${command}' not found. Type 'help' for a list of available commands.`;
        output.innerHTML += errorText;
    }
}
commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        outputCommand();
    }
});

commandLine.focus();
