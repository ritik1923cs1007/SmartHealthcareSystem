console.log('this is appointment.js')

$("#add_appointment").submit(function(event){
    console.log(123);
    alert("Data inserted sucessfully !");
})

let del=document.getElementById('delete');
del.addEventListener('click',()=>{
    console.log("do you want to delte");
    console.log('click');
        var id=del.getAttribute('data-id');
        console.log(id);
        var request={
            "url":`http://localhost:3000/api/appointment/${id}`,
            "method":"DELETE"
            

        }
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("data deleted successfully");
                location.reload();
            })
        }
})
