import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [friends, setFriends] = useState(['Awais', 'Kaleem']);
  const [name, setName] = useState('');
  return (
    <React.Fragment>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const oldFriends = [...friends];
            oldFriends.push(name);
            setFriends(oldFriends);
            setName('');
          }}
        >
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
          />
          <button required type="submit">
            Submit
          </button>
        </form>
        <div>
          <span>Friends List</span>
          {friends.map((friendItem) => {
            return <div key={friendItem}>{friendItem}</div>;
          })}

          {/* {friends.map((friendItem) => {
            return <div key={friendItem}> {friendItem} </div>;
          })} */}
        </div>
      </div>
    </React.Fragment>
  );
}
