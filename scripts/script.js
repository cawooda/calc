
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

    console.log(e.target);
    display.key($(e.target).data('key'));

    console.log(display.result);
    $display.text(display.result + $(e.event).data('key'));
    
    
});



const display = {
    result: "0",
    operator: "",
    display: function(number) {
        console.log("number to display method:" + number);
        $display.textContent = number;
    },
    key: function(key){
        
        if (isNaN(parseInt(key))) {
        switch (key) {
            case "-": this.operator = "-";
            case "+": this.operator = "+";
            case "/": this.operator = "/";
            case "*": this.operator = "*";           
            }
        } else {
            this.result = this.result + parseInt(key);
        } 
        
        if (key == "=") {
        switch (this.operator) {    
            case "-": this.result = parseInt(this.result)-number;
            case "+": this.result = parseInt(this.result)+number;
            case "/": this.result = parseInt(this.result)/number;
            case "*": this.result = parseInt(this.result)-number;         
        }  
    }
        console.log(this.result)
        
        this.display(this.result);
        
        
    },
    addNumber: function(number){
        this.result = this.result + number;
        $display.text(this.result);
    },
    subtractNumber: function(number){
        this.result = this.result - number;
        $display.text(this.result);
    },
    multiplyNumber: function(number){
        this.result = this.result * number;
        $display.text(this.result);
    },
    divideNumber: function(number){
        this.result = this.result / number;
        $display.text(this.result);
    }

    
}



