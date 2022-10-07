import React from 'react'

export const Apps = ({apps}) => {

    console.log('apps length:::', apps.length)
    if (apps.length === 0) return null

    const UserRow = (app,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{app.name}</td>
                  <td>{app.sname}</td>
                  <td>{app.description}</td>
                  <td>{app.id}</td>
                  <td>{app.SNOWStatus}</td>
                  <td>{app.ITService}</td>
                  <td>{app.Portfolio}</td>
                  <td>{app.ServiceOwner}</td>
                  <td>{app.TIME}</td>
                  <td>{app.CIARating}</td>
              </tr>
          )
    }

    const appTable = apps.map((app,index) => UserRow(app,index))

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>App ID</th>
                    <th>Application Name</th>
                    <th>Short Name</th>
                    <th>Functionality</th>
                    <th>Snow Package Identifier</th>
                    <th>SNOW Status</th>
                    <th>IT Service</th>
                    <th>IT Portfolio</th>
                    <th>Service Owner</th>
                    <th>TIME Rating</th>
                    <th>CIA Rating</th>
                </tr>
                </thead>
                <tbody>
                    {appTable}
                </tbody>
            </table>
        </div>
    )
}