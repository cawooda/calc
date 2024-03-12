
const $display = $('#display');
const $keyboard = $('#keyboard');
$display.text('0');

const keys = [1,2,3,4,5,6,7,8,9,"+",0,"-",'C','X','/','='];

for (key of keys) {
    $keyEl = $('<div>').text(key);
    $keyEl.addClass('key');
    $keyEl.attr('data-key',key);
    console.log($keyEl.data("key"));
    $keyboard.append($keyEl);
}

$keyboard.on('click','.key',function(e){
    console.log(e);
    console.log(e.target);
    display.key($(e.target).data('key'));
    
    $display.text(number + $(e.event).data('key'));
    
    
});



const display = {
    result: "0",
    display: function(number) {
        $display.textContent(number);
    },
    key: function(key){
        console.log(isNaN(parseInt(key)));
        if (isNaN(parseInt(key))) {
        switch (key) {
            case "-": this.subtractNumber();
            case "+": this.addNumber();
            case "/": this.divideNumber();
            case "*": this.multiplyNumber();           
            }
        } else {
            const number = parseInt(key);
            if (this.result == 0) {
                this.result = number;
                $display.textContent(this.result);
            } else {
                $display.textContent(this.result);
            }

        }
    },
    addNumber: function(number){
        this.result = this.result + number;
        $display.textContent(this.result);
    },
    subtractNumber: function(number){
        this.result = this.result - number;
        $display.textContent(this.result);
    },
    multiplyNumber: function(number){
        this.result = this.result * number;
        $display.textContent(this.result);
    },
    divideNumber: function(number){
        this.result = this.result / number;
        $display.textContent(this.result);
    }

    
}



