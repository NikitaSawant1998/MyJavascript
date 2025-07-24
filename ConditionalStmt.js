let a=61;
if(a>18 && a<61)
 {
    console.log("u r eligible for service");
 }
 else if(a<18)
 {
    console.log("u r not eligible for service its child");
 }
 else{
    console.log("u r not eligible for service its retired");
    }
//-----------------------------------------------------------------
    let b=33;
    if(b%2==1)
    {
        console.log("\n"+b+" is odd");
    }

    
//-----------------------------------------------------------------
    let ch=2;
    switch(ch)
    {
        case 1:console.log("ur selecting "+ch);break;
        case 2:console.log("ur selecting "+ch);break;
        case 3:console.log("ur selecting "+ch);break;
        default:console.log("ur selecting wrong choice");
    }

    //----------------------------ternary Operator-----------------------
    let ab=6;
    ab%2==0?console.log("even number "+ab):console.log("odd number "+ab);
    //----------------------------ternary Operator-----------------------
    let marks=60;
    if(marks>50)
    {
     if(marks<70)
     {
        console.log("first class");
     }
     else
     {
        console.log("first class with");
     }
    }