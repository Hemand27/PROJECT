var array=[
    {
        Name:"Ram",
        Age:40,
        Courses:['JAVA','CSS', 'ML']

    },

    {
        Name:"Caul",
        Age:30,
        Courses:['HTML','CSS', 'C++']

    },

    {
        Name:"Paul",
        Age:40,
        Courses:['C','Mongodb', 'SQL']

    }
    

]

var dataElem=document.getElementById("data");
for(var i=0; i<array.length;i++){
    var na=document.createElement('h2');
    var ag=document.createElement('h2');
    var co=document.createElement('h2');
    var na1=document.createElement('h4');
    var ag1=document.createElement('h4');
    na.textContent='Name';
    ag.textContent='Age';
    co.textContent='Course';
    na1.textContent=array[i].Name
    ag1.textContent=array[i].Age
    dataElem.appendChild(na)
    dataElem.appendChild(na1)
    dataElem.appendChild(ag)
    dataElem.appendChild(ag1)
    dataElem.appendChild(co)
    for(var j=0;j<array[i].Courses.length;j++){
        var liElem=document.createElement('li')
        liElem.textContent=array[i].Courses[j]
        dataElem.appendChild(liElem)
    
        
    }
    

}


