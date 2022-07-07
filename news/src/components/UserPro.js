import React, { useState } from 'react';
import axios from 'axios';

function Userpro() {

    const [Title, setTitle] = useState('test-Title');
    const [Type, setType] = useState('test-Type');
    const [City, setCity] = useState('Aqaba');
    const [Phone, setPhone] = useState(0);
    const [Des, setDes] = useState('Des');
    const [img, setimg] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Circle-icons-dolly.svg/1024px-Circle-icons-dolly.svg.png');
    const [Date_Res, setDate_Res] = useState('one day');
   
    const TitleHandel = (e)=>{setTitle(e.target.value)}
    const TypeHandel = (e)=>{setType(e.target.value)}
    const CityHandel = (e)=>{setCity(e.target.value)}
    const PhoneHandel = (e)=>{setPhone(e.target.value)}
    const DesHandel = (e)=>{setDes(e.target.value)}
    const imgHandel = (e)=>{setimg(e.target.value)}
    const Date_ResHandel = (e)=>{setDate_Res(e.target.value)}

    const clickHandel =(event)=>{
        event.preventDefault();
        axios.post('http://localhost/news_react/api-crud/php_crud/insert.php?&Title='+Title+'&Type='+Type+'&City='+City+'&Phone='+Phone+'&Des='+Des+'&img='+img+'&Date_Res='+Date_Res)
        .then((data) => {
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <div >
        <div class="row py-2 px-2 ttop">
            <div class="col-md-6 mx-auto">
                <div class="bg-white shadow rounded overflow-hidden">
                    <div class="px-4 pt-0 pb-4 cover">
                        <h1>Account</h1>
                        <div class="media align-items-end profile-head">
                            <div class="profile mr-3">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg" alt="..." width="130" class="rounded mb-2 img-thumbnail" />
                            </div>
                            <div class="media-body mb-5 text-white">
                                <h4 class="mt-0 mb-0">Mark Williams</h4>
                                <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>New York</p>
                            </div>
                        </div>
                    </div>

                    <div class="px-4 py-3">
                        <h5 class="mb-0">About</h5>
                        <div class="p-4 rounded shadow-sm bg-light"> <p class="font-italic mb-0">Web Developer</p>
                            <p class="font-italic mb-0">Lives in New York</p>
                            <p class="font-italic mb-0">Photographer</p>
                        </div>
                    </div>

                    <div class="py-4 px-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                        </div>
                <h5 class="text-center mb-4">Add Your Ads Here</h5>
                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Title<span class="text-danger"> *</span></label> 
                                <input type="text" id="Title" name="Title" placeholder="Enter your Ads Title" onChange={TitleHandel} /> 
                        </div>

                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Type<span class="text-danger"> *</span></label>
                                 <input type="text" id="Type" name="Type" placeholder="Enter Type For Your Ads" onChange={TypeHandel}/> 
                        </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex">
                             <label class="form-control-label px-3">City<span class="text-danger"> *</span></label> 
                                <input type="text" id="City" name="City" placeholder="Enter Your City"  onChange={CityHandel}/> 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> 
                                <input type="text" id="Phone" name="Phone" onChange={PhoneHandel}/> 
                        </div>
                    </div>
                    <div class="row  text-left ml-1">
                        <div class="form-group flex-row d-flex"> 
                            <label class="form-control-label px-3">Image<span class="text-danger"> *</span></label> 
                                <input type="File" id="img" name="img" onChange={imgHandel}/> 
                        </div>

                        <div class="form-group  flex-row d-flex "> 
                            <label class="form-control-label">Duration<span class="text-danger"> *</span></label> 
                            <select name="Date_Res" id="Date_Res" onChange={Date_ResHandel}>
                                <option value="One Day">One Day</option>
                                <option value="One Month">One Month</option>
                                <option value="6 Month">Six Month</option>
                                <option value="One Year">One Year</option>
                            </select>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> 
                            <label class="form-control-label px-3">Details <span class="text-danger"> *</span></label> 
                                <textarea id="Des" name="Des" rows="4" cols="50" onChange={DesHandel}>
                            </textarea> 
                        </div>
                    </div>
                    <div class="row " >
                        <div class="form-group col-md-12"> <button type="submit" onClick={clickHandel} class="btn btn-primary ">Request a demo</button> </div>
                    </div>
                </form>
</div>
                    </div>
                    </div>
                    </div>
                    </div>
           


    );
}

export default Userpro;