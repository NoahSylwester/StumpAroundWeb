import React, { useState, useEffect, useRef } from 'react';
// import CommentsBox from '../components/CommentsBox';
// import CommentModal from '../components/CommentModal';
// import Map from '../components/Map';
export default function Hike(props) {
    // props to be passed in:
    // name
    // photo
    // length
    // summary
    // comments
    // ****eventually location?
    const [hike, setHike] = useState(localStorage.getItem('hike'));
    const [modalVisibleState, setModalVisibleState] = useState(false);
    const [commentState, setCommentState] = useState('');
    const isPastInitialRender = useRef(false);
    const [ProfileKey, setProfileKey] = useState('');
    // this updates favorites programmatically, which you might not need to worry about in the web app
    // useEffect(() => {
    //       console.log('***');
    //       console.log(ProfileKey);
    //       console.log('***');
    //       const setParamsAction = NavigationActions.setParams({
    //         params: { value: Math.random() },
    //         key: ProfileKey,
    //       });
    //       props.navigation.dispatch(setParamsAction);
    // }, [ProfileKey])
    const _retrieveKey = async () => {
      try {
        const key = await localStorage.getItem('ProfileKey');
        if (key !== null) {
          setProfileKey(key);
          return;
        }
        else {
          console.log('No async storage for "ProfileKey"');
        }
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    };
    const addHikeToFavorites = async (hikeId) => {
      const userId = await localStorage.getItem('id');
      window.fetch(`https://stump-around.herokuapp.com/favorite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ hikeId, userId }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
          // setHike(responseJson);
          console.log('res2', responseJson);
          alert('Added to favorites');
          _retrieveKey();
        }
      )
      .catch((error) => {
        console.error(error);
        alert('Add failed');
      });
    }
    useEffect(() => {_updateHike();}, []);
    const commentPOST = async (data) => {
      const userId = await localStorage.getItem('id');
      const newData = { ...data, user: userId };
      // console.log(newData);
      window.fetch(`https://stump-around.herokuapp.com/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(newData),
        })
        .then((response) => response.json())
        .then((responseJson) => console.log('responseJson'))
        .catch((error) => {
          console.error(error);
        });
    };
    const _updateHike = () => {
      isPastInitialRender.current = true;
      // console.log('id', hike._id);
      window.fetch(`https://stump-around.herokuapp.com/hike/${hike._id}`, {
          method: 'GET',
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setHike(responseJson);
            // console.log('res1', responseJson);
          }
        )
        .catch((error) => {
          console.error(error);
        });
    }
    return (
        <div>
          {/* <CommentModal setModalVisibleState={setModalVisibleState} modalVisibleState={modalVisibleState} setCommentState={setCommentState} commentState={commentState} commentPOST={commentPOST} _updateHike={_updateHike} hike={hike} /> */}
            <div>
                {/* eventually source will be props.photo */}
                <img src={ hike.photo } style={{width: '100%', height: 300, objectFit: 'cover'}} />
                <p>
                    {hike.name}
                </p>
                <p>
                    Length: {hike.length}
                </p>
                <button onClick={() => {addHikeToFavorites(hike._id)}} color="blue">
                    Add to favorites    
                </button>
                <p>
                    {hike.summary}
                </p>
                {/* <CommentsBox isPastInitialRender={isPastInitialRender} hike={hike} navigation={props.navigation} setModalVisibleState={setModalVisibleState} />
                <Map name={hike.name} summary={hike.summary} latitude={hike.latitude} longitude={hike.longitude} /> */}
            </div>
        </div>
    );
}