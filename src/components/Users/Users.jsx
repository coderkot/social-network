import React from 'react';
import style from './Users.module.css';

export const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: '2C2F108A-1005-465B-8590-C3E398E26A91',
        name: 'Yana',
        status: "I'm boss!",
        location: {
          city: 'Cherepovets',
          country: 'Russia',
        },
        followed: true,
        avatar: 'http://www.machinelearning.ru/wiki/images/5/55/Dima.jpg',
      },
      {
        id: '2C2F108A-1005-465B-8590-C3E398E26A92',
        name: 'Dima',
        status: 'Hey there!!!',
        location: {
          city: 'Moscow',
          country: 'Russia',
        },
        followed: true,
        avatar: 'http://www.machinelearning.ru/wiki/images/5/55/Dima.jpg',
      },
      {
        id: '2C2F108A-1005-465B-8590-C3E398E26A93',
        name: 'Ivan',
        status: 'Good day everyone',
        location: {
          city: 'Minsk',
          country: 'Belarus',
        },
        followed: false,
        avatar: 'http://www.machinelearning.ru/wiki/images/5/55/Dima.jpg',
      },
      {
        id: '2C2F108A-1005-465B-8590-C3E398E26A94',
        name: 'Sasha',
        status: 'Salam everybody !!!',
        location: {
          city: 'Stockholm',
          country: 'Sweden',
        },
        followed: true,
        avatar: 'http://www.machinelearning.ru/wiki/images/5/55/Dima.jpg',
      },
      {
        id: '2C2F108A-1005-465B-8590-C3E398E26A95',
        name: 'Alex',
        status: 'Wat?',
        location: {
          city: 'Bishkek',
          country: 'Kyrgyz Republic',
        },
        followed: false,
        avatar: 'http://www.machinelearning.ru/wiki/images/5/55/Dima.jpg',
      },
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avatar} className={style.avatar} alt="avatar" />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
