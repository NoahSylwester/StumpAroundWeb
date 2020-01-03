import React, { useState, useEffect } from 'react';
export default function Hikes(props) {
    // props to be passed in:
    // props.hikes, array of objects each with the following:
    // name
    // photo
    // length
    // summary
    // comments
    // ****eventually location?
    const [dataState, setDataState] = useState({
        hikes: [],
      })
    useEffect(() => {
      window.fetch('https://stump-around.herokuapp.com/hikes', {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setDataState({
          hikes: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }, [])
    return (
        <div>
            <div>
                <h1>
                    Hikes
                </h1>
                {dataState.hikes.map((hike, i) => (
                    <div key={i}>
                        <img src={hike.photo} style={{ width: '100%', height: 200 }} />
                        <div>
                            {/* this would be a request maybe */}
                            <div onClick={() => window.location = "/hike"}> 
                            <p>
                                {hike.name}
                            </p>
                            </div>
                            <p>
                                Length: {hike.length}
                            </p>
                            <p>
                                {hike.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}