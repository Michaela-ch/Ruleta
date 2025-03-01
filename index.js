const number = Number(prompt("Zadejte číslo od 0 do 36"));

if (number===0) {
    document.body.innerHTML += 'číslo je 0, zelená'
} else if (number>36 || number<0) {
        document.body.innerHTML += 'číslo je moc velké nebo záporné'}
    else {
        if (number%2===0) {
            document.body.innerHTML += 'číslo je sudé, '

            if ((number>=1 && number <= 10) || (number >=19 && number <= 28)) {
                document.body.innerHTML += 'černá'
            } else if ((number>=11 && number <= 18) || (number >=29 && number <= 36)){
                    document.body.innerHTML += 'červená'
            }

        } else {
            document.body.innerHTML += 'číslo je liché, '

            if ((number>=1 && number <= 10) || ( number >=19 && number <= 28)) {
                document.body.innerHTML += 'červená'
            } else if ((number>=11 && number <= 18) || (number >=29 && number <= 36)){
                document.body.innerHTML+= 'černá'}}}

