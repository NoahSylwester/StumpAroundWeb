import React, { useState, useEffect, useRef } from 'react';

export default function FavoriteHikes(props) {

            //{props.userState.hikes && props.userState.hikes.length !== 0 ? props.userState.hikes.slice().reverse().map((hike, i) => {

                return (
                    <div>
                    <div key={i}>
                        <img src={{ uri: hike.photo }} alt="hikePhoto" />
                        <div onClick={() => props.navigation.navigate('Hike', { hike: hike })}>
                            <p>
                                {hike.name}
                            </p>
                            <p>
                                Length: {hike.length}
                            </p>
                            <p>
                                {hike.location}
                            </p>
                        </div>
                    </div>
                    </div>
                )
        }