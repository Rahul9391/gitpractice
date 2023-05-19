import React, { useState } from 'react'
import Display from './Display';
import MyData from './MyData'

function Home() {
    let status = true;
    // const [data, setData] = useState([]);
    const [btName, SetBtName] = useState("ShowData");
    const [searchData, setSearchData] = useState('');
    const [filt,setFilter]=useState([]);
    const [filtval,setFilterVal]=useState('');


   
    function dataHandler() {
        if (status === true) {
            setFilter(MyData);
            SetBtName("HideData");
            status = false;

        }
        else {
            setFilter([]);
            status = true;
            SetBtName("ShowData");

        }
    }
    function filterData(){
        setFilter(MyData);

       
    }
    return (
        <div>
            <h1>Home</h1>
            <h2>List of Students</h2>
            <input type='text' placeholder='SearchName...' onChange={event => { setSearchData(event.target.value)}} />
              <select value={filtval} onChange={event=>{setFilterVal(event.target.value)}} onClick={filterData}>
    
                <option>classes</option>
                {/* <option>--All--</option> */}
                <option>class10</option>
                <option >class9</option>
                <option >class8</option>
                <option >class7</option>
                <option >class6<option></option>
                <option></option></option>
              </select>
              <select value={filtval} onChange={event=>{setFilterVal(event.target.value)}} onClick={filterData}>
                <option>Marks</option>
                <option>Above85</option>
                <option>Above75</option>
                <option>Above60</option>
                <option>Above45</option>
                <option>Below45</option>
              </select>
              <div>
                {
                 
                    filt.filter(Data1=>{
                        // if(filtval==="--All--"){
                        //     return Data1
                        // }
                         if(filtval==="class10")
                        {
                            if(Data1.Std_class===10){
                                return Data1
                            } 
                        } else if(filtval==="class9")
                        {
                            if(Data1.Std_class===9){
                                return Data1
                            } 
                        } else if(filtval==="class8")
                        {
                            if(Data1.Std_class===8){
                                return Data1
                            } 
                        } else if(filtval==="class7")
                        {
                            if(Data1.Std_class===7){
                                return Data1
                            } 
                        }

                        else if(filtval==="class6"){
                            if(Data1.Std_class===6){
                                return Data1
                            }
                        }
                       
                        else{
                            return Data1
                        }
                       
                    }).filter(Data1=>{
                         if(filtval==="Above85"){
                            if(Data1.Std_marks>85){
                                return Data1
                            }
                        }
                        else if(filtval==="Above75"){
                            if(Data1.Std_marks<85 && Data1.Std_marks>75 ){
                                return Data1
                            }
                        }
                        else if(filtval==="Above60"){
                            if(Data1.Std_marks<75 && Data1.Std_marks>60 ){
                                return Data1
                            }
                        }
                        else if(filtval==="Above45"){
                            if(Data1.Std_marks<60 && Data1.Std_marks>45 ){
                                return Data1
                            }
                        }
                        else if(filtval==="Below45"){
                            if(Data1.Std_marks<45 ){
                                return Data1
                            }
                        }
                         
                        else{
                            return Data1
                        }
                    }).filter((Data1)=>{
                        if(Data1.Std_name.toLowerCase().includes(searchData.toLowerCase())){
                            return Data1
                         }
                    })
                      . map(Data1=>{
                    return (<>
                        
                               {
                               <div style={{display:'inline-block',paddingBottom:'20'}}>
                               <Display Std_name={Data1.Std_name} Std_age={Data1.Std_age} Std_class={Data1.Std_class} 
                                     Std_marks={Data1.Std_marks} Std_grd={Data1.Std_grd}></Display>
                               </div>
                                }
                        </>
                        )
                    })
                }
              </div>
             {/* <div>
                {
                    data.filter(Data=>{
                       if(Data.Std_name.toLowerCase().includes(searchData.toLowerCase())){
                            return Data
                        }
                        // else if(Data.Std_age.toLowerCase().includes(searchData)){
                        //     return Data
                        // }
                    })
                    .map((Data, index) => {
                        return (<>
                        
                               {
                               <div style={{display:'inline-block',paddingBottom:'20'}}>
                               <Display Std_name={Data.Std_name} Std_age={Data.Std_age} Std_class={Data.Std_class}></Display>
                               </div>
                                }
                        </>
                        )
                    })
                }
            </div> * */}
            <button onClick={dataHandler}>{btName}</button>



        </div>
    )
}
export default Home;

