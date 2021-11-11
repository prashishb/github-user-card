import React, { Component } from 'react';
import {
  UserCardContainer,
  UserImg,
  UserDetails,
  UserTitle,
  Link,
  UserBio,
} from './StyledElements';

export default class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <UserCardContainer>
        <UserImg src={user.avatar_url} alt={user.name} />
        <UserDetails>
          <Link href={user.html_url}>
            <UserTitle>{user.name}</UserTitle>
          </Link>
          <UserBio>{user.bio ? `(${user.bio})` : ''}</UserBio>
          <h3>Total Repos: {user.public_repos}</h3>
          <h3>Total Followers: {user.followers}</h3>
        </UserDetails>
      </UserCardContainer>
    );
  }
}
