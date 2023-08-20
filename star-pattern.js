let PatternMaker = (patterName, patternShape,Row=5,Col=5)=>{
    let patternString = '';
if(patterName=='star'){
    if(patternShape=='square' || patternShape=='default'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                patternString += '*';
            }
            patternString += '\n';
        }
    }else if(patternShape=='right-pyramid'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=i;j++){
                patternString += '*';
            }
            patternString += '\n';
        }
    }else if(patternShape=='reverse-right-pyramid'){
        for(let i = Row ; i>=1;i--){
            for(let j = i ; j>=1;j--){
                patternString += '*';
            }
            patternString += '\n';
        }
    }else if(patternShape=='left-pyramid'){
        for (let i = 1; i <= Row; i++) {   
            for (let space = 1; space <= Row - i; space++) {
                patternString += ' ';
            }
            
            for (let j = 1; j <= i; j++) {
                patternString += '*';
            }
            patternString += '\n';
        }
    }else if(patternShape =='pyramid'){
        for (let i = 1; i <= Row; i++) {   
            for (let space = 1; space <= Row - i; space++) {
                patternString += ' ';
            }
            for (let j = 1; j <= i; j++) {
                patternString += ' *';
            }
            patternString += '\n';
        }
    }
    else if(patternShape =='octagon-square'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i === 1 || i === Row || j === 1 || j === Col || i==j || i-1==Col-j ||  j%7==0 || i%7==0) {
                    patternString += ` *`;
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    }else if(patternShape =='cross'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i==j || i-1==Col-j ) {
                    patternString += '* ';
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    } 
    else if(patternShape =='plus'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i%7==0 || j%7==0 ) {
                    patternString += '* ';
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    }
    else if(patternShape =='spider'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i%7==0 || j%7==0 || i==j || i-1==Col-j) {
                    patternString += '* ';
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    }
    
    else if(patternShape =='arrow'){
        for (let i = 1; i <= Row; i++) {
            let patternString = '';
           
            for (let j = 1; j <= Col; j++) {
                
                if (i % 7 == 0 || j % 7 == 0 ||i<=7 && j==8-i||i<=7 && j==6+i) {
                    patternString += ' *';
                } else {
                    patternString += '  ';
                }
            }
    
            patternString += '\n';
            console.log(patternString);
        }
    } else if(patternShape =='kite'){
        for (let i = 1; i <= Row; i++) {
            let patternString = '';
           
            for (let j = 1; j <= Col; j++) {
                
                if (i % 7 == 0 || j % 7 == 0 ||i<=7 && j==8-i||i<=7 && j==6+i||  i>7 &&j==i-6 || i>7 && j==20-i ) {
                    patternString += ' *';
                } else {
                    patternString += '  ';
                }
            }
    
            patternString += '\n';
            console.log(patternString);
        }
    }
    else if(patternShape =='empty-square-rhombus'){
        for (let i = 1; i <= Row; i++) {
            let patternString = '';
           
            for (let j = 1; j <= Col; j++) {
                
                if (i==1||j==1||i==Row||j==Col||i<=7 && j==8-i||i<=7 && j==6+i||  i>7 &&j==i-6 || i>7 && j==20-i ) {
                    patternString += ' *';
                } else {
                    patternString += '  ';
                }
            }
    
            patternString += '\n';
            console.log(patternString);
        }
    }else if(patternShape =='empty-rhombus'){
        for (let i = 1; i <= Row; i++) {
            let patternString = '';
           
            for (let j = 1; j <= Col; j++) {
                
                if (i<=7 && j==8-i||i<=7 && j==6+i||  i>7 &&j==i-6 || i>7 && j==20-i ) {
                    patternString += ' *';
                } else {
                    patternString += '  ';
                }
            }
    
            patternString += '\n';
            console.log(patternString);
        }
    }
    else if(patternShape =='rhombus-inside-empty'){
        for (let i = 1; i <= Row; i++) {
            for (let j = 1; j <= Col; j++) {     
                if(j<=7 && i<=7-j || j>7 && i<=j-7 || i>=7 && j<=i-7 ||i>=7 && j>=21-i){
                    patternString += ' *';
                }else{
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    }
    else if(patternShape =='rhombus'){
        for (let i = 1; i <= Row; i++) {
            for (let j = 1; j <= Col; j++) {     
                if(j<=7 && i<=7-j || j>7 && i<=j-7 || i>=7 && j<=i-7 ||i>=7 && j>=21-i){
                    patternString += '  ';
                }else{
                    patternString += ' *';
                }
            }
            patternString += '\n';
        }
    }
    else if(patternShape =='empty-square'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i === 1 || i === Row || j === 1 || j === Col) {
                    patternString += '* ';
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    } else if(patternShape =='cross-empty-square'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i === 1 || i === Row || j === 1 || j === Col || i==j || i-1==Col-j) {
                    patternString += '* ';
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    } else if(patternShape =='tic-tac-toe'){
        for(let i = 1 ; i<=Row;i++){
            for(let j = 1 ; j<=Col;j++){
                if (i === 1 || i === Row || j === 1 || j === Col || j%7==0 || i%7==0) {
                    patternString += '* ';
                } else {
                    patternString += '  ';
                }
            }
            patternString += '\n';
        }
    }
    
    else if(patternShape=='diamond'){
        for(let i= 1;i<=Row;i++){
            for(let j= 1;j<=i;j++){
                patternString +='*';
            
            }
            patternString +='\n';
        }
        for(let i= 1;i<=Row;i++){
            for(let j= Col;j>=i;j--){
                patternString +='*';
            
            }
            patternString +='\n';
        }
    }else if(patternShape=='left-arrow'){
      
            for(let i=1;i<=Row;i++){
                for(let j=Col;j>=i;j--){
                        patternString +='*';
                }
                patternString +='\n';
            }
            for(let i=1;i<=Row;i++){
                for(let j=1;j<=i;j++){
                        patternString +='*';
                }
                patternString +='\n';
            }
    }
    else if(patternShape=='right-arrow'){
        
      
        for(let i=1;i<=Row;i++){
            for (let space = 2; space <= i; space++) {
                patternString += ' ';
            }
            for(let j=Col;j>=i;j--){
                    patternString +='*';
            }
            patternString +='\n';
        }
        for(let i=2;i<=Row;i++){
            for (let space = 1; space <=Row-i; space++) {
                patternString += ' ';
            }
            for(let j=1;j<=i;j++){
                    patternString +='*';
            }
            patternString +='\n';
        }
}
}

return patternString;
}
let output = PatternMaker('star','spider',13,13)
console.log(output)
