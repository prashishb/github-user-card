import React, { Component } from 'react';
import Follower from './Follower';
import { FollowerText, FollowerContainer } from './StyledElements';

export default class FollowerList extends Component {
  componentDidMount() {}

  render() {
    const { followers, handleClick } = this.props;
    return (
      <>
        <FollowerText>Followers:</FollowerText>
        <FollowerContainer>
          {followers.map((follower) => (
            <Follower
              key={follower.id}
              details={follower}
              handleClick={handleClick}
            />
          ))}
        </FollowerContainer>
      </>
    );
  }
}
