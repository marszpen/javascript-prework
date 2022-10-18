{
    function playGame(playerInput){
    clearMessages();


    console.log ('Gracz podał + getMoveName');

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
    
        if(argMoveId == 2){
            return 'papier';
        }

        if(argMoveId == 3){
            return 'nożyce';
        }
        printMessage('nie znam ruchu o id' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(computerMove, playerMove){
        printMessage('Mój ruch to' + computerMove + ', Twój ruch to' + playerMove);
    
        if(computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Wygrywasz');
        }
        else if(computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Wygrywasz');
        }
        else if(computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Wygrywasz');
        }
        else if(computerMove == 'kamień' && playerMove == 'nożyce'){
            printMessage('Przegrywasz');
        }
        else if(computerMove == 'nożyce' && playerMove == 'papier'){
            printMessage('Przegrywasz');
        }
        else if(computerMove == 'papier' && playerMove == 'kamień'){
            printMessage('Przegrywasz');
        }
        else if(computerMove == 'kamień' && playerMove == 'kamień'){
            printMessage('Remis');
        }
        else if(computerMove == 'papier' && playerMove == 'papier'){
            printMessage('Remis');
        }
        else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
            printMessage('Remis');
        }
        
    }

   /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    } else if(playerInput == '2'){
        playerMove = 'papier';
    } else if(playerInput == '3'){
        playerMove = 'nożyce';
    }*/


    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    displayResult(computerMove, playerMove);

    /*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}*/

}
/*playGame(3);*/ /*usuwam zgodnie z następnymi krokami*/

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1')});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2')});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3')});

}
