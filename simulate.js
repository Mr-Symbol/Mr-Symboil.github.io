var line = 0;
var l = "line";
var output = 0;
var o = "O"

var marks1;
var marks2;
var marks3;
var marks4;
var marks5;

var max_marks;

function max(a, b) {
    if (a>b)
        return a;
    return b;
}

function setup() {
    
    var h = max(900, window.innerHeight*.965);
    document.getElementById("out").style.height = h;

    var w = max(1880, window.innerWidth*.98);
    document.getElementById("out").style.width;
}

function refresh() {

    document.getElementById("cen").style.opacity = 0.9;
    document.getElementById("ri").style.opacity = 0.9;
    document.getElementById("le").style.opacity = 1.0;
    
    document.getElementById("myForm").reset();
    document.getElementById("line0").style.color="black";
    document.getElementById("line"+line.toString()).style.color="black";
    line = 0;
    output = 0;

    marks1 = parseFloat(document.getElementById("sub1").value);
    marks2 = parseFloat(document.getElementById("sub2").value);
    marks3 = parseFloat(document.getElementById("sub3").value);
    marks4 = parseFloat(document.getElementById("sub4").value);
    marks5 = parseFloat(document.getElementById("sub5").value);

    for(var i=0; i<16; ++i){
        document.getElementById(o+i.toString()).style.display="none";
    }

    document.getElementById("fun").style.display = "none";
    document.getElementById("lmarks1").style.display="none";
    document.getElementById("lmarks2").style.display="none";
    document.getElementById("lmarks3").style.display="none";
    document.getElementById("lmarks4").style.display="none";
    document.getElementById("lmarks5").style.display="none";
    document.getElementById("lsum").style.display = "none";

    document.getElementById("per").style.display = "none";
    document.getElementById("obt").style.display="none";
    document.getElementById("total").style.display="none";
    document.getElementById("percentage").style.display="none";

    document.getElementById("main").style.display = "none";
    document.getElementById("marks1").style.display="none";
    document.getElementById("marks2").style.display="none";
    document.getElementById("marks3").style.display="none";
    document.getElementById("marks4").style.display="none";
    document.getElementById("marks5").style.display="none";
    document.getElementById("sum").style.display="none";
    document.getElementById("maxMarks").style.display="none";
    document.getElementById("percent").style.display="none";

    document.getElementById("main_max_marks").innerHTML = "";
    document.getElementById("O1").innerHTML = "";
    document.getElementById("main_marks1").innerHTML = "";
    document.getElementById("O3").innerHTML = "";
    document.getElementById("main_marks2").innerHTML = "";
    document.getElementById("O5").innerHTML = "";
    document.getElementById("main_marks3").innerHTML = "";
    document.getElementById("O7").innerHTML = "";
    document.getElementById("main_marks4").innerHTML = "";
    document.getElementById("O9").innerHTML = "";
    document.getElementById("main_marks5").innerHTML = "";
    document.getElementById("O11").innerHTML = "";
    document.getElementById("findSum_lmarks1").innerHTML = "";
    document.getElementById("findSum_lmarks2").innerHTML = "";
    document.getElementById("findSum_lmarks3").innerHTML = "";
    document.getElementById("findSum_lmarks4").innerHTML = "";
    document.getElementById("findSum_lmarks5").innerHTML = "";
    document.getElementById("findSum_sum").innerHTML = "";
    document.getElementById("main_sum").innerHTML = "";
    document.getElementById("per").style.display = "none";
    document.getElementById("findpercentage_marks").innerHTML = "";
    document.getElementById("findpercentage_total").innerHTML = "";
    document.getElementById("findpercentage_percentage").innerHTML = "";
    document.getElementById("main_percent").innerHTML = "";
    document.getElementById("O13").innerHTML = "";
    document.getElementById("O15").innerHTML = "";

    document.getElementById("sub1").disabled = false;
    document.getElementById("sub2").disabled = false;
    document.getElementById("sub3").disabled = false;
    document.getElementById("sub4").disabled = false;
    document.getElementById("sub5").disabled = false;
    document.getElementById("max").disabled = false;

    document.getElementById("simulate_button").disabled = false;
    document.getElementById("simulate_button").className = "btn1";
    
    document.getElementById("back").disabled = true;
    document.getElementById("back").className = "btn2";

    document.getElementById("next").disabled = true;
    document.getElementById("next").className = "btn2";

    document.getElementById("refresh").disabled = true;
    document.getElementById("refresh").className = "btn2";
}

function validate() {
    if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || isNaN(marks4) || isNaN(marks5) || isNaN(max_marks))
        return true;
    
    if (marks1>max_marks || marks2>max_marks || marks3>max_marks || marks4>max_marks || marks5>max_marks)
        return true;

    if (marks1<0 || marks2<0 || marks3<0 || marks4<0 || marks5<0)
        return true;
    
    return false;
}

function load() {
    marks1 = parseInt(document.getElementById("sub1").value);
    marks2 = parseInt(document.getElementById("sub2").value);
    marks3 = parseInt(document.getElementById("sub3").value);
    marks4 = parseInt(document.getElementById("sub4").value);
    marks5 = parseInt(document.getElementById("sub5").value);
    max_marks = parseInt(document.getElementById("max").value);

    var result = validate();
    if (result == true) {
        alert("Something Wrong with Input!!!");
        refresh();
    } else {
        document.getElementById("line0").style.color="red";

        document.getElementById("sub1").disabled = true;
        document.getElementById("sub2").disabled = true;
        document.getElementById("sub3").disabled = true;
        document.getElementById("sub4").disabled = true;
        document.getElementById("sub5").disabled = true;
        document.getElementById("max").disabled = true;

        document.getElementById("simulate_button").disabled = true;
        document.getElementById("simulate_button").className = "btn2";

        document.getElementById("back").disabled = false;
        document.getElementById("back").className = "btn1";

        document.getElementById("next").disabled = false;
        document.getElementById("next").className = "btn1";

        document.getElementById("refresh").disabled = false;
        document.getElementById("refresh").className = "btn1";

        document.getElementById("cen").style.opacity = 1.0;
        document.getElementById("ri").style.opacity = 1.0;
        document.getElementById("le").style.opacity = 0.9;
    }
}
function SUM() {
    return marks1+marks2+marks3+marks4+marks5;
}

function per() {
    return SUM()*100/(5*parseFloat(max_marks));
}

function next() {
    document.getElementById(l + line.toString()).style.color="black";
    if(line == 1) {
        document.getElementById("main").style.display = "block";
    }
    if(line == 2) {
        document.getElementById("marks1").style.display="block";
        document.getElementById("marks2").style.display="block";
        document.getElementById("marks3").style.display="block";
        document.getElementById("marks4").style.display="block";
        document.getElementById("marks5").style.display="block";
    }
    if(line == 3) {
        document.getElementById("sum").style.display="block";
        document.getElementById("maxMarks").style.display="block";
    }
    if(line == 4) {
        document.getElementById("percent").style.display="block";
    }

    if((line >=5 && line <=16) || (line == 27 || line == 28)) {
        document.getElementById(o+output.toString()).style.display="inline";
        output = (output+1)%16;
        if(line == 27 || line == 28) {
            document.getElementById(o+output.toString()).style.display="inline";
            output = (output+1)%16;
        }
    }
    if(line == 29) {
        for(var i=0; i<16; ++i){
            document.getElementById(o+i.toString()).style.display="none";
        } 
    }

    if(line == 6) {
        document.getElementById("main_max_marks").innerHTML = max_marks;
        document.getElementById("O1").innerHTML = max_marks;
    }

    if(line == 8) {
        document.getElementById("main_marks1").innerHTML = marks1;
        document.getElementById("O3").innerHTML = marks1;
    }

    if(line == 10) {
        document.getElementById("main_marks2").innerHTML = marks2;
        document.getElementById("O5").innerHTML = marks2;
    }

    if(line == 12) {
        document.getElementById("main_marks3").innerHTML = marks3;
        document.getElementById("O7").innerHTML = marks3;
    }

    if(line == 14) {
        document.getElementById("main_marks4").innerHTML = marks4;
        document.getElementById("O9").innerHTML = marks4;
    }

    if(line == 16) {
        document.getElementById("main_marks5").innerHTML = marks5;
        document.getElementById("O11").innerHTML = marks5;
    }

    if(line == 17) {
        document.getElementById("fun").style.display = "block";
    }
    if(line == 18) {
        document.getElementById("findSum_lmarks1").innerHTML = marks1;
        document.getElementById("findSum_lmarks2").innerHTML = marks2;
        document.getElementById("findSum_lmarks3").innerHTML = marks3;
        document.getElementById("findSum_lmarks4").innerHTML = marks4;
        document.getElementById("findSum_lmarks5").innerHTML = marks5;

        document.getElementById("lmarks1").style.display="block";
        document.getElementById("lmarks2").style.display="block";
        document.getElementById("lmarks3").style.display="block";
        document.getElementById("lmarks4").style.display="block";
        document.getElementById("lmarks5").style.display="block";
    }
    if(line == 19) {
        document.getElementById("lsum").style.display = "block";
    }

    if(line == 20) {
        document.getElementById("findSum_sum").innerHTML = SUM();
    }

    if(line == 21) {
        document.getElementById("fun").style.display = "none";
        document.getElementById("lmarks1").style.display="none";
        document.getElementById("lmarks2").style.display="none";
        document.getElementById("lmarks3").style.display="none";
        document.getElementById("lmarks4").style.display="none";
        document.getElementById("lmarks5").style.display="none";
        document.getElementById("lsum").style.display = "none";

        document.getElementById("main_sum").innerHTML = SUM();
    }
    if(line == 22) {
        document.getElementById("per").style.display = "block";
    }
    if(line == 23) {
        document.getElementById("findpercentage_marks").innerHTML = SUM();
        document.getElementById("findpercentage_total").innerHTML = max_marks*5;

        document.getElementById("obt").style.display="block";
        document.getElementById("total").style.display="block";
    }
    if(line == 24) {
        document.getElementById("percentage").style.display="block";
    }

    if(line == 25) {
        document.getElementById("findpercentage_percentage").innerHTML = per();
    }

    if(line == 26) {
        document.getElementById("main_percent").innerHTML = per();

        document.getElementById("per").style.display = "none";
        document.getElementById("obt").style.display="none";
        document.getElementById("total").style.display="none";
        document.getElementById("percentage").style.display="none";
    }

    if(line == 27) {
        document.getElementById("O13").innerHTML = SUM();
    }

    if(line == 28) {
        document.getElementById("O15").innerHTML = per().toString()+"%";
    }

    if(line == 29) {
        document.getElementById("main").style.display = "none";
        document.getElementById("marks1").style.display="none";
        document.getElementById("marks2").style.display="none";
        document.getElementById("marks3").style.display="none";
        document.getElementById("marks4").style.display="none";
        document.getElementById("marks5").style.display="none";
        document.getElementById("sum").style.display="none";
        document.getElementById("maxMarks").style.display="none";
        document.getElementById("percent").style.display="none";
        refresh();
        document.getElementById(l + line.toString()).style.color="black";
        return 0;

    }
    line = (line+1)%30;
    document.getElementById(l + line.toString()).style.color="red";
}

function back() {
    document.getElementById(l + line.toString()).style.color="black";
    if(line>0) {
        if (line == 2) {
            document.getElementById("main").style.display = "none";
        }
        if (line == 3) {
            document.getElementById("marks1").style.display="none";
            document.getElementById("marks2").style.display="none";
            document.getElementById("marks3").style.display="none";
            document.getElementById("marks4").style.display="none";
            document.getElementById("marks5").style.display="none";
        }
        if (line == 3) {
            document.getElementById("sum").style.display="none";
            document.getElementById("maxMarks").style.display="none";
        }
        if (line == 5) {
            document.getElementById("percent").style.display="none";
        }

        if((line >=6 && line <=17) || line == 28) {
            output = (output-1)%16;
            document.getElementById(o+output.toString()).style.display="none";
            if(line == 28) {
                output = (output-1)%16;
                document.getElementById(o+output.toString()).style.display="none";
            }
        }

        if(line == 7) {
            document.getElementById("main_max_marks").innerHTML = "";
            document.getElementById("O1").innerHTML = "";
        }

        if(line == 9) {
            document.getElementById("main_marks1").innerHTML = "";
            document.getElementById("O3").innerHTML = "";
        }

        if(line == 11) {
            document.getElementById("main_marks2").innerHTML = "";
            document.getElementById("O5").innerHTML = "";
        }

        if(line == 13) {
            document.getElementById("main_marks3").innerHTML = "";
            document.getElementById("O7").innerHTML = "";
        }

        if(line == 15) {
            document.getElementById("main_marks4").innerHTML = "";
            document.getElementById("O9").innerHTML = "";
        }

        if(line == 17) {
            document.getElementById("main_marks5").innerHTML = "";
            document.getElementById("O11").innerHTML = "";
        }
        if(line == 29) {
            output = 15;
            document.getElementById(o+output.toString()).style.display="none";
            output = (output-1)%16;
            document.getElementById(o+output.toString()).style.display="none";
        }

        if(line == 18) {
            document.getElementById("fun").style.display = "none";
        }
        if(line == 19) {
            document.getElementById("findSum_lmarks1").innerHTML = "";
            document.getElementById("findSum_lmarks2").innerHTML = "";
            document.getElementById("findSum_lmarks3").innerHTML = "";
            document.getElementById("findSum_lmarks4").innerHTML = "";
            document.getElementById("findSum_lmarks5").innerHTML = "";

            document.getElementById("lmarks1").style.display="none";
            document.getElementById("lmarks2").style.display="none";
            document.getElementById("lmarks3").style.display="none";
            document.getElementById("lmarks4").style.display="none";
            document.getElementById("lmarks5").style.display="none";
        }
        if(line == 20) {
            document.getElementById("lsum").style.display = "none";
        }

        if(line == 21) {
            document.getElementById("findSum_sum").innerHTML = "";
        }

        if(line == 22) {
            document.getElementById("fun").style.display = "block";
            document.getElementById("lmarks1").style.display="block";
            document.getElementById("lmarks2").style.display="block";
            document.getElementById("lmarks3").style.display="block";
            document.getElementById("lmarks4").style.display="block";
            document.getElementById("lmarks5").style.display="block";
            document.getElementById("lsum").style.display = "block";

            document.getElementById("main_sum").innerHTML = "";
        }
        if(line == 23) {
            document.getElementById("per").style.display = "none";
        }
        if(line == 24) {
            document.getElementById("findpercentage_marks").innerHTML = "";
        document.getElementById("findpercentage_total").innerHTML = "";

            document.getElementById("obt").style.display="none";
            document.getElementById("total").style.display="none";
        }
        if(line == 25) {
            document.getElementById("percentage").style.display="none";
        }

        if(line == 26) {
            document.getElementById("findpercentage_percentage").innerHTML = "";
        }

        if(line == 27) {
            document.getElementById("main_percent").innerHTML = "";

            document.getElementById("per").style.display = "block";
            document.getElementById("obt").style.display="block";
            document.getElementById("total").style.display="block";
            document.getElementById("percentage").style.display="block";
        }

        if(line == 28) {
            document.getElementById("O13").innerHTML = "";
        }
    
        if(line == 29) {
            document.getElementById("O15").innerHTML = "";
        }

        if(line == 0) {
            document.getElementById("main").style.display = "block";
            document.getElementById("marks1").style.display="block";
            document.getElementById("marks2").style.display="block";
            document.getElementById("marks3").style.display="block";
            document.getElementById("marks4").style.display="block";
            document.getElementById("marks5").style.display="block";
            document.getElementById("sum").style.display="block";
            document.getElementById("maxMarks").style.display="block";
            document.getElementById("percent").style.display="block";
        }

        line = (line-1)%29;
    }
    document.getElementById(l + line.toString()).style.color="red";
}