import React, { Component } from 'react';
import {
  FollowerCard,
  FollowerImg,
  Link,
  FollowerName,
} from './StyledElements';

export default class Follower extends Component {
  render() {
    const { details, handleClick } = this.props;
    return (
      <FollowerCard>
        <FollowerImg
          src={details.avatar_url}
          id={details.login}
          onClick={handleClick}
        />
        <Link href={details.html_url}>
          <FollowerName>{details.login}</FollowerName>
        </Link>
      </FollowerCard>
    );
  }
}
