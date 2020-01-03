import React, { useState, useEffect, useRef } from 'react';

import FavoriteHikes from '../components/FavoriteHikes';

export default function ClickedProfileScreen(props) {

    const [usernameState, setUsernameState] = useState('');
    const [userState, setUserState] = useState(props.navigation.getParam('user', {}));
    const isPastInitialRender = useRef(false);

    const _updateUser = async () => {
        fetch(`https://stump-around.herokuapp.com/user/${userState.name}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setUserState({
                    ...responseJson,
                });
            }
            )
            .catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        if (isPastInitialRender.current !== true) {
            _updateUser();
        }
        isPastInitialRender.current = true;
    }, [userState]);

    return (
        <div>
            <img src={{ uri: userState.photo }} alt='userPhoto' />
            <p>
                {userState.name}
            </p>
            <p>
                User since {userState.date_created}
            </p>
            <p>
                {userState.bio}
            </p>
            <p>
                Favorite Hikes
          </p>
            <FavoriteHikes userState={userState} navigation={props.navigation} />
            <div>
                <p>
                    Comments
              </p>
                </div>
                    <p>
                        [comment header]
                  </p>
                <p>
                    [comment body]
                  </p>
                  <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            );
}