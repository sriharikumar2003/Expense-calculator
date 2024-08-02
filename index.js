$(document).ready(function(){
    $(".enter").click(()=>{
        let exp = $(".name").val();
        let cost = $(".number").val();
        let select = $(".select").val();
        let  date = $(".date").val();
        $("#first").after(`
            <td>${exp}</td>
            <td>${cost}</td>
            <td>${select}</td>
            <td>${date}</td>
            <td><button>Delete</button></td>`); 

        let total = total + parseFloat(cost);
        
    });
    
});