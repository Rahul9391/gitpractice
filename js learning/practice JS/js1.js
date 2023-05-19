let bus=[{From:"Hyderabad",to:"Chennai",travels:["Zing Travels","SVR Travels","GO Travels","MKR Travels"],
busno:["A24","C12","A30","PG18"],timing:"21:20",price:620},
{From:"Chennai",to:"Hyderabad",travels:["Zing Travels","SVR Travels","GO Travels","MKR Travels"],
busno:["A24","C12","A30","PG18"],timing:"21:20",price:480},
{From:"Mumbai",to:"Chennai",travels:["Zing Travels","SVR Travels","GO Travels","MKR Travels"],
busno:["A24","C12","A30","PG18"],timing:"22:40",price:800},
{From:"Delhi",to:"Chennai",travels:["Zing Travels","SVR Travels","GO Travels","MKR Travels"],
busno:["A24","C12","A30","PG18"],timing:"17:20",price:520},
{From:"Goa",to:"Chennai",
travels:["Zing Travels","SVR Travels","GO Travels","MKR Travels"],
busno:["A24","C12","A30","PG18"],timing:"15:20",price:350},]


		var disp='';
		var disp1='';
		var count=1;
		function dataHandler(){
			var showData1=document.getElementById('filter1').value;
			var showData2=document.getElementById('filter2').value;
			var errmsg=document.getElementById('err').style;
			if(showData1==showData2)
			{
               errmsg.visibility="visible";
			}
			else{
				for(var i=0;i<bus.length;i++){
					for(var j=i+1;j<bus.length;j++){
						if(bus[i].From==showData1 && bus[j].From==showData2)
						{
                            disp+=`<table bgcolor="black" width="700" border="black">
              	<tr bgcolor="grey">
              		          <th width="100">SlNo.</th> 
              		          <th width="100">Travels</th> 
              		          <th width="100">From</th>   
              		          <th width="100">To</th>   
              		          <th width="100">Time</th>   
              		          <th width="100">Price</th>     

              	</tr>
              	</table>`        

                        for(var jj=0;jj<bus.length;jj++){
                        	for (k=0;k<=3;k++)
                        	{
                              disp1+=`<table>
                                    <tr bgcolor="lightgrey">
                              		<td width="100">${count++}</td>
                              		<td width="100">${bus[i].travels[k]}</td>
                              		<td width="100">${bus[i].busno[k]}</td>
                              		<td width="100">${bus[i].From}</td>
                              		<td width="100">${bus[j].From}</td>
                              		<td width="100">${bus[i].timing}</td>
                              		<td width="100">${bus[i].price}</td>
                              		<br/>
                              		
                              	</tr>
                              	</table>`
                        	}
                        }
	                      
                            console.log('hi')
                            var p=document.getElementById('he').innerHTML=disp;
                            var pp=document.getElementById('hf').innerHTML=disp1;
                            
						}
					}
					
				}
				for(var j=0;j<bus.length;j++){
					for(var i=j+1;i<bus.length;i++){
						if(bus[i].From==showData1 && bus[j].From==showData2)
						{
                            disp+=`<h5>Bus from:${bus[i].From} to ${bus[j].From} will be of price ${bus[i].price}</h5>`
                            console.log('hi')
                            var p=document.getElementById('he').innerHTML=disp;
                            
						}
					}
					
				}
			}
		
			// console.log(showData);
      
		
}
// items+=`
// 				// <div style="display:inline-block" class:"container">
// 				// <div class:'col'>

// 				// <div class="card" style="width: 18rem">
//     //                     <div class="card-body">
//     //                    <h5 class="card-title">StudentInfo</h5>
//     //                    <h6 class="card-subtitle mb-2 text-muted">Name:${arr[i].name}<br/>
//     //                    Age:${arr[i].age}</h6>
//     //                      </div>
//     //                       </div>
//     //                       </div>
//     //                       </div>`