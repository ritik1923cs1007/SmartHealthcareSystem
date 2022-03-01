console.log('This is patient.js')


$("#add_patient").submit(function(event){
    console.log(123);
    alert("Data inserted sucessfully !");
})

$("#update_patient").submit(function(event){
    event.preventDefault();
    var unindexded_array=$(this).serializeArray();
    var data={}
    $.map(unindexded_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data);
    var request={
        "url":`http://localhost:3000/api/healthcare/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("data updated successfully");
    })

});

let del=document.getElementById('delete');
del.addEventListener('click',()=>{
    console.log("do you want to delte");
    console.log('click');
        var id=del.getAttribute('data-id');
        console.log(id);
        var request={
            "url":`http://localhost:3000/api/healthcare/${id}`,
            "method":"DELETE"
            

        }
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("data deleted successfully");
                location.reload();
            })
        }
})
