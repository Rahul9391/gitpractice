var buses=[    
{id:1,  From:"Hyderabad", to:"Goa",       time:"21:00 to 07:20",   busname:"V Kaveri",        seats:40},
{id:2,  From:"Hyderabad", to:"Goa",       time:"20:30 to 05:15",   busname:"TSRTC",           seats:38},
{id:3,  From:"Hyderabad", to:"Goa",       time:"22:30 to 07:00",   busname:"VIKRAM Travels",  seats:40},
{id:4,  From:"Hyderabad", to:"Goa",       time:"21:00 to 07:00",   busname:"ORANGE",          seats:35},
{id:5,  From:"Hyderabad", to:"Goa",       time:"21:30 to 06:30",   busname:"KKaveri",         seats:50},
{id:6,  From:"Chennai",   to:"Hyderabad", time:"19:30 to 06:30",   busname:"IntrCity",        seats:40},
{id:7,  From:"Chennai",   to:"Hyderabad", time:"20:30 to 08:00",   busname:"V Kaveri",        seats:38},
{id:8,  From:"Chennai",   to:"Hyderabad", time:"23:10 to 10:30",   busname:"Orange",          seats:40},
{id:9,  From:"Chennai",   to:"Hyderabad", time:"19:00 to 07:30",   busname:"TSRTC",           seats:35},
{id:10, From:"Chennai",   to:"Hyderabad", time:"20:00 to 09:45",   busname:"Sri Krishna",     seats:35},
{id:11, From:"Chennai",   to:"Banglore",  time:"21:00 to 07:20",   busname:"V Kaveri",        seats:35},
{id:12, From:"Chennai",   to:"Banglore",  time:"20:30 to 05:15",   busname:"ORANGE",          seats:40},
{id:13, From:"Chennai",   to:"Banglore",  time:"21:30 to 06:30",   busname:"Sri Krishna",     seats:35},
{id:14, From:"Chennai",   to:"Banglore",  time:"21:00 to 07:20",   busname:"VIKRAM Travels",  seats:40},
{id:15, From:"Chennai",   to:"Banglore",  time:"20:00 to 09:45",   busname:"TSRTC",           seats:34},
{id:16, From:"Chennai",   to:"Banglore",  time:"21:00 to 07:20",   busname:"VIKRAM Travels",  seats:40},
{id:17, From:"Delhi",     to:"Chennai",   time:"20:30 to 05:15",   busname:"IntrCity",        seats:35},
{id:18, From:"Delhi",     to:"Chennai",   time:"19:30 to 06:30",   busname:"Sri Krishna",     seats:40},
{id:19, From:"Delhi",     to:"Chennai",   time:"21:00 to 07:20",   busname:"ORANGE",          seats:38},
{id:20, From:"Delhi",     to:"Chennai",   time:"20:00 to 09:45",   busname:"V Kaveri",        seats:35},
{id:21, From:"Delhi",     to:"Mumbai",    time:"21:00 to 07:20",   busname:"ORANGE",          seats:40},
{id:22, From:"Banglore",  to:"Mumbai",    time:"20:30 to 05:15",   busname:"Sri Krishna",     seats:35},
{id:23, From:"Banglore",  to:"Mumbai",    time:"21:00 to 07:20",   busname:"VIKRAM Travels",  seats:38},
{id:24, From:"Banglore",  to:"Mumbai",    time:"23:00 to 11:45",   busname:"V Kaveri",        seats:30},
{id:25, From:"Banglore",  to:"Mumbai",    time:"21:00 to 08:20",   busname:"IntrCity",        seats:38},
{id:26, From:"Banglore",  to:"Hyderabad", time:"21:00 to 07:20",   busname:"TSRTC",           seats:35},
{id:27, From:"Banglore",  to:"Hyderabad", time:"20:30 to 05:15",   busname:"Sri Krishna",     seats:38},
{id:28, From:"Banglore",  to:"Hyderabad", time:"21:30 to 06:30",   busname:"V Kaveri",        seats:38},
{id:29, From:"Mumbai",    to:"Hyderabad", time:"21:00 to 9:20",    busname:"VIKRAM Travels",  seats:35},
{id:30, From:"Mumbai",    to:"Hyderabad", time:"21:00 to 07:20",   busname:"IntrCity",        seats:38},
{id:31, From:"Mumbai",    to:"Chennai",   time:"21:00 to 07:20",   busname:"ORANGE",          seats:38},
{id:32, From:"Mumbai",    to:"Chennai",   time:"20:30 to 05:15",   busname:"VIKRAM Travels",  seats:35},
{id:33, From:"Mumbai",    to:"Chennai",   time:"21:30 to 06:30",   busname:"IntrCity",        seats:35},
{id:34, From:"Mumbai",    to:"Chennai",   time:"21:00 to 10:20",   busname:"Sri Krishna",     seats:34},
{id:35, From:"Goa",       to:"Chennai",   time:"21:00 to 07:20",   busname:"V Kaveri",        seats:35},
{id:36, From:"Goa",       to:"Delhi",     time:"21:00 to 07:20",   busname:"VIKRAM Travels",  seats:40},
{id:37, From:"Goa",       to:"Delhi",     time:"20:30 to 05:15",   busname:"IntrCity",        seats:35},
{id:38, From:"Goa",       to:"Delhi",     time:"19:30 to 06:30",   busname:"ORANGE",          seats:35},
{id:39, From:"Goa",       to:"Delhi",     time:"20:00 to 09:45",   busname:"Sri Krishna",     seats:35},        
{id:40, From:"Goa",       to:"Delhi",     time:"21:00 to 07:20",   busname:"V Kaveri",        seats:38},
{id:1,  From:"Goa",       to:"Hyderabad", time:"21:00 to 07:20",   busname:"V Kaveri",        seats:40},
{id:2,  From:"Goa",       to:"Hyderabad", time:"20:30 to 05:15",   busname:"TSRTC",           seats:38},     
    ];

		
		
		
		
	
		
		function dataHandler(){
            let wrg=0;
			var count=1;
			var disp='';
			let showData1=document.getElementById('filter1').value;
			let showData2=document.getElementById('filter2').value;
			let errmsg=document.getElementById('err').style;
			let errmsg1=document.getElementById('err1').style;
			errmsg.visibility="hidden";
			errmsg1.visibility="hidden";
			if(showData1==showData2)
			{
               errmsg.visibility="visible";
               var p=document.getElementById('he').innerHTML=disp;
               exit()
			}
			

			for(var i=0;i<buses.length;i++){

				if(buses[i].From==showData1 && buses[i].to==showData2 )
				{
                         if(count==1)
                         {
                         	document.getElementById('hf').style.visibility="visible";
                         }

					disp=disp+`<table style="display:inline">
                                    <tr bgcolor="lightgrey" width="600" >
                              		<td width="100" style="text-align:center">${count++}</td>
                              		<td width="100">${buses[i].From}</td>
                              		<td width="100" style="text-align:center">${buses[i].to}</td>
                              		<td width="100">${buses[i].time}</td>
                              		<td width="100">${buses[i].busname}</td>
                              		<td width="100">${buses[i].seats}</td>
                              	
                              		<br/>
                              		
                              	</tr>

                              	</table>
                              	<form action="./Seats.html" style="display:inline">
                              	<button type="submit" >Book</button>
                              	<form>
                              	
                              	`
                              
                              	wrg=1;
                              	
                              	
                              	
				}


					
				
			}
			if(wrg==0)
				  {
				  	console.log(wrg)
				  	errmsg1.visibility="visible"
				  }
				var p=document.getElementById('he').innerHTML=disp;
			}
			// if(status==false)
			// {
			// 	for(var i=0;i<buses.length;i++)
			// 	{
			// 	 if(buses[i].to==showData1 && buses[i].From==showData2)

			// 		{
			// 			disp+=`<table style="display:inline">
   //                                  <tr bgcolor="lightgrey" width="600" >
   //                            		<td width="100" style="text-align:center">${count++}</td>
   //                            		<td width="100">${buses[i].to}</td>
   //                            		<td width="100" style="text-align:center">${buses[i].From}</td>
   //                            		<td width="100">${buses[i].time}</td>
   //                            		<td width="100">${buses[i].busname}</td>
   //                            		<td width="100">${buses[i].seats}</td>
                              	
   //                            		<br/>
                              		
   //                            	</tr>

   //                            	</table>
   //                            	<form action="./Seats.html" style="display:inline">
   //                            	<button type="submit" >Book</button>
   //                            	<form>

   //                            	`
   //                            	status=true;
   //                            	wrg=1;
			// 		}
			// }

			
			// emp=1;
			// if(wrg==0)
			// {
			// 	console.log('hi');
			// 	errmsg1.visibility="visible";
			// }

			
			// else{
			// 	emp=0;
			// 	disp='';
			// 	count=1;
			// 	let showData1=document.getElementById('filter1').value;
			// let showData2=document.getElementById('filter2').value;
			// let errmsg=document.getElementById('err').style;
			// let errmsg1=document.getElementById('err1').style
			// if(showData1==showData2)
			// {
   //             errmsg.visibility="visible";
			// }
			// for(var i=0;i<buses.length;i++){
			// 	if(buses[i].From==showData1 && buses[i].to==showData2 )
			// 	{
			// 		disp+=`<table style="display:inline">
   //                                  <tr bgcolor="lightgrey" width="600" >
   //                            		<td width="100" style="text-align:center">${count++}</td>
   //                            		<td width="100">${buses[i].From}</td>
   //                            		<td width="100" style="text-align:center">${buses[i].to}</td>
   //                            		<td width="100">${buses[i].time}</td>
   //                            		<td width="100">${buses[i].busname}</td>
   //                            		<td width="100">${buses[i].seats}</td>
                              	
   //                            		<br/>
                              		
   //                            	</tr>

   //                            	</table>
   //                            	<form action="./Seats.html" style="display:inline">
   //                            	<button type="submit" >Book</button>
   //                            	<form>
                              	
   //                            	`
   //                            	status=true;
   //                            	wrg=1;
                              	
                              	
                              	
			// 	}
			// }
			// if(status==false)
			// {
			// 	for(var i=0;i<buses.length;i++)
			// 	{
			// 	 if(buses[i].to==showData1 && buses[i].From==showData2)

			// 		{
			// 			disp+=`<table style="display:inline">
   //                                  <tr bgcolor="lightgrey" width="600" >
   //                            		<td width="100" style="text-align:center">${count++}</td>
   //                            		<td width="100">${buses[i].to}</td>
   //                            		<td width="100" style="text-align:center">${buses[i].From}</td>
   //                            		<td width="100">${buses[i].time}</td>
   //                            		<td width="100">${buses[i].busname}</td>
   //                            		<td width="100">${buses[i].seats}</td>
                              	
   //                            		<br/>
                              		
   //                            	</tr>

   //                            	</table>
   //                            	<form action="./Seats.html" style="display:inline">
   //                            	<button type="submit" >Book</button>
   //                            	<form>

   //                            	`
   //                            	status=true;
   //                            	wrg=1;
			// 		}
			// }

			// }
			// emp=1;
			// if(wrg==0)
			// {
			// 	console.log('hi');
			// 	errmsg1.visibility="visible";
			// }

			// 	var p=document.getElementById('he').innerHTML=disp;
			// }
			

				
			
			// else
			// {
			// 	var p=document.getElementById('he').innerHTML="";
			// 	status=true;
			// }
			

		
			
			
		
				// <td width="100">${buses[i].price}</td>
				var booky='';
				function booking(){
					console.log('hi');
				}
