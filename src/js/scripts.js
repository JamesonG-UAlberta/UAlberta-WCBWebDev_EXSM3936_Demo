async function main() {
    // This is where the code you're actually experimenting with goes.
    
    printNumber(5);

}
function printNumber(num) 
{
    if (num < 100)
    {
        output(num+1);
        printNumber(num+1);
    }    
}

/*
-Output 5+1.
-Call itself with 6.
-Output 6+1.
-Call itself with 7.
-Output 7+1.
-Call itself with 8.
...
*/