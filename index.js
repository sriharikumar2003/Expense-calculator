$(document).ready(function(){
    var total = 0;
    $(".enter").click(() => {
        let exp = $(".name").val();
        let cost = $(".number").val();
        let select = $(".select").val();
        let date = $(".date").val();
        if(exp&&cost&&select&&date){
        $("#first").after(`<tr class="item">
            <td>${exp}</td>
            <td>$${cost}</td>
            <td>${select}</td>
            <td>${date}</td>
            <td><button class="delete">Delete</button></td>
        </tr>`); 
        total += parseFloat(cost);
        $("#val").html(`<h3>Total: $${total}</h3>`);
    }
    else{
        alert("Fill all spaces");
    };
});

        

    $(document).on("click", ".delete", function() {
        let cost = parseFloat($(this).closest(".item").find("td:nth-child(2)").text().substring(1));
        total -= cost;
        $("#val").html(`<h3>Total: $${total}</h3>`);
        $(this).closest(".item").remove();
    });
});
