export const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export default function ResponseTable(props) {
  return (
    props.setNewLocations.length > 0 ? (
      <table className='w-1/2 mx-auto my-4'>
      <thead>
          {/* <tr>
              <th className='border border-gray-700'>Location</th>
              <th className='border border-gray-700'>{hours}</th>
              <th className='border border-gray-700'>Totals</th>
          </tr> */}
      </thead>
      <tbody>
          {/* {props.newLocations.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="pl-2 border border-gray-700">{item.location}</td>
                      <td className="pl-2 border border-gray-700">{item.min}</td>
                      <td className="pl-2 border border-gray-700">{item.max}</td>
                      <td className="pl-2 border border-gray-700">{item.avg}</td>
                </tr>
                  );
              })
          } */}
      </tbody>
  </table>
      )  : 
      <h1 className="text-center text-4xl">No Locations Added Yet</h1>
  );
}
