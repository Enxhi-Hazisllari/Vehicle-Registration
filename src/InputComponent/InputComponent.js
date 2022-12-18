import './InputComponent.css'; 
import { Fragment, useState } from 'react';
import React from 'react';
import InputColor from 'react-input-color';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const InputComponent = () =>{

    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [model,setModel] = useState('');
    const [type,setType] = useState('');
    const [fuel,setFuel] = useState('');
    const [transmission,setTransmission] = useState('');
    const [doors,setDoors] = useState('');
    const [production,setProduction] = useState('');
    const [color, setColor] = useState({});
    const [date,setDate] = useState('');

    const [list,setList] = useState([]);



    const getName = (e) =>{
        setName(e.target.value)
    }
    const getSurname = (e) =>{
        setSurname(e.target.value)
    }
    const getModel = (e) =>{
        setModel(e.target.value)
    }
    const getType = (e) =>{
        setType(e.target.value)
    }
    const getFuel = (e) =>{
        setFuel(e.target.value)
    }
    const getTransmission = (e) =>{
        setTransmission(e.target.value)
    }
    const getDoors = (e) =>{
        setDoors(e.target.value)
    }
    const getProduction = (e) =>{
        setProduction(e.target.value)
    }
    const getColor = (e) =>{
        setColor(e.target.value)
    }
    const getDate = (e) =>{
        setDate(e.target.value)
    }

    const handeInfo = (e) => {
        e.preventDefault();
        let data = {name,surname,model,type,fuel,transmission,doors,production,color,date}

        console.log(data)
        console.log(date)

        setList ((list) =>[...list,data]) 
    }

    const deleteButton = (listId) => {
        const newList = [...list]
        const index = list.findIndex((list) => list.id === listId);
        newList.splice(index, 1);

        setList(newList);
    }


    return(
        <div className="container">

            <div className='header'>

            <h1>Vehicle Registration</h1>

            <img src={"ferrari.png"} alt="Logo" />

            </div>

            <div className='form-container'>

                <form onSubmit={handeInfo}>

                <input type={"text"} placeholder='Name' defaultValue="" onChange={getName} required/>

                <input type={"text"} placeholder='Surname' defaultValue="" onChange={getSurname} required />

                <input type={"text"} placeholder='Model' defaultValue="" onChange={getModel} required />


                <input type={"text"} placeholder='Type'onChange={getType} required/>

                <label> Fuel : 
                        <select name="fuel" onChange={getFuel} required> 

                            <option value = "">Select</option>
                            <option>Diesel</option> 
                            <option>Gasoline</option> 
                            <option>Biodiesel</option> 

                        </select>
                </label>

                <label>Transmission :
                    <select name="transmission" onChange={getTransmission} required> 

                        <option value="">Select</option>
                        <option value="auto">auto</option> 
                        <option value="manual">manual</option> 
                    </select>
                </label>

                <label> Nr Doors :
                    <select name="doors" onChange={getDoors} required> 

                        <option value="">Select</option>
                        <option value="2">2</option> 
                        <option value="4">4</option> 
                    </select>
                </label>

                <label>The year of production:
                <input type={"number"} placeholder='E.g.2000' name="production"  min="2000" max="2022" onChange={getProduction} required/>                
                </label>

                <label >Color :
                     <InputColor 
                            initialValue="#5e72e4"
                            onChange={setColor}
                            placement="center"
                            required
                        />
                </label>

                <label >Registration date:
                <input type="date" name="date" onChange={getDate} required/>
                </label>

                <button>ADD</button>

                </form>
            </div>

            <div className='table-container'> 

                <Table >
                    <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Surname</Th>
                                <Th>Model</Th>
                                <Th>Type</Th>
                                <Th>Fuel</Th>
                                <Th>Transmission</Th>
                                <Th>Doors</Th>
                                <Th>Production</Th>
                                <Th>Color</Th>
                                <Th>Registration date</Th>
                                <Th>Delete button</Th>
                            </Tr>
                    </Thead>

                    <Tbody>        
                    {list.map((a, index)=>{
                        return(
                            <Fragment key={index}>
                                <Tr>
                                    <Td>{a.name}</Td>
                                    <Td>{a.surname}</Td>
                                    <Td>{a.model}</Td>
                                    <Td>{a.type}</Td>
                                    <Td>{a.fuel}</Td>
                                    <Td>{a.transmission}</Td>
                                    <Td>{a.doors}</Td>
                                    <Td>{a.production}</Td>
                                    <Td style={{
                                        width: 30,
                                        height: 30,
                                        marginTop: 20,
                                        backgroundColor: a.color.rgba,
                                        }}
                                        ></Td>
                                    <Td>{a.date}</Td>
                                    <Td><button className='delete-button' onClick={deleteButton}>Delete</button></Td> 

                                </Tr>
                            </Fragment>
                        )
                    })}

                    </Tbody>
                </Table>  

            </div>                                
            
            
        </div>
            )
    }

export default InputComponent;
