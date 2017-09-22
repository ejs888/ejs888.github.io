//Start writing JS code
//alert("Welcome to class")

//var student ="Edison";

// Create 5 variables
// vaiables_name should follow this syntax
// student_1
// ..
// student_2

// values should be , you and your peer.

//var welcome_msg =" Hai. Lets be friend.." + student_1 + " , " + student_2
//console.log(welcome_msg)

var student_1 = "Serene"
var student_2 = "Edison"
var welcome_msg ="Hai. Let be friend.." + student_1 + " , " + student_2
console.log(welcome_msg)
alert("Welcome_msg")


function greet(nameOfPerson) {

    var greeting_message = "Welcome , Mr " + nameOfPerson

    console.log( greeting_message)

    nameOfPerson = "Ken"
    greeting_message = "Welcome , Mr " + nameOfPerson

    console.log( greeting_message)

    nameOfPerson = "bala"
    greeting_message = "Welcome , Mr " + nameOfPerson

    console.log( greeting_message)

    nameOfPerson = "Zin Min"
    greeting_message = "Welcome , Mr " + nameOfPerson

    console.log( greeting_message)
}

    /*

1. Create a function which takes two inputs (names)
2. inside that function , concatenate those two inputs  using + operator
3. return the resulted_string

4. Call that function, with u and ur's friends name
5. print the returned result.

---------------------------

6. Advanced optional
It should look like this.
If i pass "bala" and "ken" as inputs to the funtion, it should return 
"Bala Bala | Ken Ken"

  
*/

    function doubleTheGivenName(name) {
        return name + " " + name
    }

    function joinNames( name1, name2) {

        var advanced_string = doubleTheGivenName(name1) + "  " + doubleTheGivenName(name2)
        return advanced_string
    }


    console.log( joinNames("Bala" , "Ken") )


    function processInput() {
        var input1 = document.getElementById("input1").value
        var input2 = document.getElementById("input2").value
    
        var num1 = parseInt(input1)
        var num2 = parseInt(input2)
    
        var result = add(num1, num2)
    
        // UPDATE THE HTML HEADER
        document.getElementById("result_header").innerHTML = result
    }


    

    var i = 0
    while (i < 10){
        console.log(i)
        i++
    }

    //90-70 while loop
    var a = 90;
    while (a > 69) {
        console.log(a)
        a--
    }

    //for (first; condition; step_increment_decrement){
        // block of code
    }//


    for ( var a = 90; a > 69; a--){
        console.log(a)
    }

    // Objects
    var student =      {
                         name: "Ken",
                         age = 20,
                         marks: [80,89,67,90,100]
                        subjects: ["Math", "CS", "EC", "Math2", "Math3"],
                        avg: 0,
                        young: false,
                        welcome_function: function (){
                            console.log("Welcome Bala Bala Bala")

                        }
                        bmi:{

                            height: 200,
                            weight: 70,
                            }
                        }

                        // Access the value of name"property" from student object?
                        console.log(student.name)