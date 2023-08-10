(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-green');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function(e){
        try {
            let answer = eval(screen.value);
            if (answer === undefined || isNaN(answer)) {
                screen.value = "Error";
            } else {
                screen.value = answer;
            }
        } catch (error) {
            screen.value = "Error";
        }
    });

    clear.addEventListener('click', function(e){
        screen.value = "";
    });
    
})();
