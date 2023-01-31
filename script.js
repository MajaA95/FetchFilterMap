const url ="https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
let button= document.getElementById("btn");

button.addEventListener("click", function(){
    fetch(url)             
    .then(data =>{          
        data.json()         
        .then(parsedData=>{            
            console.log(parsedData);

            let gradeHigherThan3 =parsedData              
            .filter(s=>s.averageGrade > 3);
            console.log(gradeHigherThan3);

            femaleGrade5 = parsedData
            .filter(s  => s.gender == "Female")
            .filter(s => s.averageGrade == 5)
            .map( s=> console.log(`${s.firstName}`));

            malesSkopjeOver18 = parsedData
            .filter(s =>s.gender == "Male")
            .filter(s =>s.city == "Skopje")
            .filter(s =>s.age > 18)
            .map(s => console.log(`${s.firstName} ${s.lastName}`));

            maleBGradeOver2 = parsedData
            .filter(s => "Male")
            .filter(s=> s.averageGrade > 2)
            .filter(s=> s.firstName[0] == "B");
            console.log(maleBGradeOver2)


        })
    }) })

