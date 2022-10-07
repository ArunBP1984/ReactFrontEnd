import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Apps} from "./appdetails"
import { DisplayBoard } from './DisplayBoard'
import { getAllApps } from './appService'

export function DisplayApp(){
    const [apps, setApps] = useState([])
    const [numberOfApps, setNumberOfApps] = useState(0)

    const fetchAllApps = () => {
        console.log("in fetchAllApps")
        getAllApps()
          .then(apps => {
            console.log(apps)
            setApps(apps);
            setNumberOfApps(apps.length)
          });
      }
    
      useEffect(() => {
        getAllApps()
          .then(apps => {
            console.log(apps)
            setApps(apps);
            setNumberOfApps(apps.length)
          });
      }, [])

      return (
        <div className="App">
            <div className="container mrgnbtm">
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfApps={numberOfApps}
                    getAllApps={fetchAllApps}
                  >
                  </DisplayBoard>
              </div>
            </div>
          <div className="row mrgnbtm">
            <Apps apps={apps}></Apps>
          </div>
        </div>
    );


}