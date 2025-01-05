function calculateLove(){

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1==="" || name2===""){
        alert("Please enter both names.");
    }else{

        const lovePercentage = Math.floor(Math.random() * 100)

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovePercentage}%`;

        if(lovePercentage <50){
            result.innerHTML += "<br> Yah, kocak. Tetap semangat gusy."
        }else if(lovePercentage >= 50 && lovePercentage < 80){
            result.innerHTML += "<br> You can do it gusyyyyy."
        }else{
            result.innerHTML += "<br> Anjayyyyyy."
        }


    }      

}