import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
//import {constants} from "perf_hooks";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    pickedFriends: [],
    pickedCount: 0,
    topScore: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    const shuffleArray = arr => (
      arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
    );
    // const picked = friends.find(friend => {if (friend.id === id) return friend });

    //const pickedCount = this.state.pickedCount;
    const pickedFriends = this.state.pickedFriends;
    const friends = shuffleArray(this.state.friends);
    const wasFound = pickedFriends.includes(id);
    
    const  pickedCount = wasFound?0:this.state.pickedCount +1;
    
    const topScore = this.state.topScore<pickedCount?pickedCount:this.state.topScore ;
    

    if (wasFound) {
      pickedFriends.splice(0, pickedFriends.length);
    } else {
      pickedFriends.push(id);
    }

    // console.log("friends:");
    // console.log(friends);
    // console.log("friends:");
    console.log("pickedCnt: " + pickedCount);
    console.log("pickedlist: " );
    console.log( pickedFriends);

    // Set this.state.friends equal to the new friends array
    this.setState({friends});
    this.setState({pickedCount});
    this.setState({pickedFriends});
    this.setState({topScore});
  };


  // clickFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const pickedFriends = this.state.friends.filter(friend => friend.id === id);
  //   console.log("Click friend:");
  //   console.log(pickedFriends);

  //   // Set this.state.friends equal to the new friends array
  //   this.setState({
  //     pickedFriends
  //   });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return ( <Wrapper >
      <Title > Pick each character only once </Title> 
      <Title > Picked {this.state.pickedCount} of {this.state.friends.length} --  Top score: {this.state.topScore}</Title> 
      {
        this.state.friends.map(friend => ( 
          <FriendCard removeFriend = {
            this.removeFriend
          }
          id = {friend.id}
          key = {friend.id}
          name = {friend.name}
          image = {friend.image}
          occupation = {friend.occupation}
          location = {friend.location}
          />
        ))
      } </Wrapper>
    );
  }
}

export default App;