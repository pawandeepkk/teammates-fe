import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Card from '../generic/Card';
import Assignment from './Assignment';

const BASE_URL = "http://localhost:5000";
const GET_MODULES = '/getmodules'

function Home() {

    let data;

    const fetchModules = async () => {
        try {
            const response = await fetch(`${BASE_URL}${GET_MODULES}`)
            data = await response.json()
        } catch (error) {
            throw new Error('Error fetching modules', error)
        }
        return data;
    }

    useEffect(() => {
        fetchModules()
    }, [])

    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
        return ( 
             <section>
                <h1>My Upcoming Group Assignments</h1>
                  {
                      data.map(dataInfo => {
                    return(
                        <div>
                        <Card
                            title={dataInfo.moduleName + " (" + dataInfo.moduleCode + ")"}>
                            <span>{"Lorem Ipsum"}<br/></span>
                            <span>{"Lorem Ipsum"}</span>
                        </Card>
                        </div>
                    );
                   })
                  }
                
             </section>
         );
    }


export default Home;