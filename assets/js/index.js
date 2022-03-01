console.log('This is index.js')


$("#add-user").submit(function(event){
    console.log(123);
    alert("Data inserted sucessfully !");
})
$("#update-user").submit(function(event){
    event.preventDefault();
    var unindexded_array=$(this).serializeArray();
    var data={}
    $.map(unindexded_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data);
    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
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
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
            

        }
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("data deleted successfully");
                location.reload();
            })
        }
})

// if(window.location.pathname == "/"){
//     $ondelete=$(".table tbody td a.delete");
    
//     $ondelete.click(function(){
//         console.log('click');
//         var id=$(this).attr("data-id")
//         var request={
//             "url":`http://localhost:3000/api/users/${id}`,
//             "method":"DELETE"
            

//         }
//         if(confirm("Do you really want to delete this record?")){
//             $.ajax(request).done(function(response){
//                 alert("data deleted successfully");
//                 location.reload();
//             })
//         }
//     })
// }