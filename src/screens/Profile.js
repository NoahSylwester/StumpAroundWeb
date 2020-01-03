import React, { useState, useEffect, useRef } from 'react';
// import FavoriteHikes from '../components/FavoriteHikes';
// import BioModal from '../components/BioModal';
export default function Profile(props) {
  const [usernameState, setUsernameState] = useState('');
  const [userState, setUserState] = useState({});
  const isPastInitialRender = useRef(false);
  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [editBioState, setEditBioState] = useState(userState.bio);
  const _retrieveId = async () => {
    try {
      const username = await localStorage.getItem('username');
      if (username !== null) {
        setUsernameState(username);
        return;
      }
      else {
        console.log('No async storage for "username"');
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  const _storeData = async (id) => {
    try {
      await localStorage.setItem('id', id);
    //   await localStorage.setItem('ProfileKey', props.navigation.state.key)
    } catch (error) {
      console.log(error);
      // Error saving data
    }
  };
  const _updateUser = async () => {
    window.thenfetch(`https://stump-around.herokuapp.com/user/${usernameState}`, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setUserState({
          ...responseJson,
        });
        _storeData(responseJson._id);
        setEditBioState(responseJson.bio);
        }
      )
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    _retrieveId();
  }, []);
  useEffect(() => {
    if (isPastInitialRender.current === true) {
      _updateUser();
    }
    isPastInitialRender.current = true;
  }, [usernameState]);
  const photoPUT = async (data) => {
    window.fetch(`https://stump-around.herokuapp.com/photo`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson))
      .catch((error) => {
        console.error(error);
      });
  };
  const bioPUT = async (data) => {
    window.fetch(`https://stump-around.herokuapp.com/bio`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson))
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {/* <BioModal modalVisibleState={modalVisibleState} setModalVisibleState={setModalVisibleState} setEditBioState={setEditBioState} editBioState={editBioState} bioPUT={bioPUT} userState={userState} _updateUser={_updateUser} /> */}
      <div>
        <div>
          <img src={userState.photo} />
          <button 
            onClick={() => window.location = "Camera"}
          >
              Change photo
          </button>
          <p>
            {userState.name}
          </p>
          <p>
            User since {userState.date_created}
          </p>
          <p>
            {userState.bio}
          </p>
          <button  
            onClick={() => setModalVisibleState(true)}
          >
              Edit bio
          </button>
          <p>
              Favorite Hikes
          </p>
          {/* <FavoriteHikes userState={userState} navigation={props.navigation} /> */}
          <div>
              <p>
                Comments
              </p>
              <div>
                <div>
                  <p>
                    [comment header]
                  </p>
                </div>
                <div>
                  <p>
                    [comment body]
                  </p>
                </div>
              </div>
              <button 
                onClick={() => alert('pressed')}
              >
                  New comment
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}