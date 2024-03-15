
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

    
    keyboard.keyPressed($(e.target).data('key'));

    
    
    
    
});

const keyboard = {
    operator : "",
    operatorSelected : false,
    selectOperator : function (operator){
        this.operator = operator;
        display.addOperator(operator);
        operatorSelected = true;
    },
    numberSelected: true,
    selectNumber : function (number) {
        if (this.operatorSelected) {
            display.addNumber(number);
        }
    },
    
    keyPressed: function(key){
        //if its not a number then select operator.
        if (isNaN(parseInt(key))) {
            this.selectOperator(key);
            }
        
        //if it is a number then send that number to display.
        if (!isNaN(parseInt(key))) {
            this.numberSelected = true;
            this.selectNumber(key);
        }

        } 


          
    }


const display = {
    show: "0",
    result: 0,
    operator: "",
    display: function() {
        $display.text(this.result);
        console.log("result displayed:" + this.result);
    },
    


    addNumber: function(number){
        this.result = this.result + number;
        $display.text(this.result);
    },
    addOperator: function(operator) {
        
        this.operator = operator;
        this.result = parseInt(this.result);
        this.show = this.show + operator;
    }

    
}



