import React, { useState, useEffect, useRef } from 'react';

export default function CommentsBox(props) {

    return (
        // {/* {props.isPastInitialRender.current ? props.hike.comments.slice().reverse().map((element, i) => { */}
        <div>
            <p>
                Comments
                  </p>
            <div key={i}>
                <img src={{ uri: element.user.photo }} alt="userPhoto" />
                <div>
                    <div onClick={() => props.navigation.navigate('ClickedProfile', { user: element.user })}>
                        <p>
                            {element.user.name}
                        </p>
                    </div>
                    <p>
                        {element.date_created}
                    </p>
                </div>
                <div>
                    <p>
                        {element.content}
                    </p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}