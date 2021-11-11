import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import {
  HeaderTitle,
  HeaderLink,
  Form,
  SearchIconWrap,
  Container,
  FormInput,
  FormButton,
} from '../src/components/StyledElements';
import './App.css';
import * as HiIcons from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';

class App extends React.Component {
  state = {
    name: '',
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/prashishb')
      .then((res) => {
        // console.log(res.data);
        this.setState({ ...this.state, user: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get('https://api.github.com/users/prashishb/followers')
      .then((res) => {
        // console.log(res.data);
        this.setState({ ...this.state, followers: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChange = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.name}`)
      .then((res) => {
        this.setState({ ...this.state, user: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`https://api.github.com/users/${this.state.name}/followers`)
      .then((res) => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ name: '' });
      });
  };

  handleClick = (e) => {
    axios
      .get(`https://api.github.com/users/${e.target.id}`)
      .then((res) => {
        this.setState({ ...this.state, user: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`https://api.github.com/users/${e.target.id}/followers`)
      .then((res) => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Container>
        <IconContext.Provider
          value={{ size: '1.5rem', color: 'rgba(201, 209, 217, 0.35)' }}>
          <HeaderLink href='/'>
            <HeaderTitle>GitHub Info</HeaderTitle>
          </HeaderLink>
          <Form onSubmit={this.handleSubmit}>
            <SearchIconWrap>
              <HiIcons.HiSearch />
            </SearchIconWrap>
            <FormInput
              type='text'
              placeholder='Github Handle'
              value={this.state.name}
              onChange={this.handleChange}></FormInput>
            <FormButton>Search</FormButton>
          </Form>
          <User user={this.state.user} />
          <FollowerList
            followers={this.state.followers}
            handleClick={this.handleClick}
          />
        </IconContext.Provider>
      </Container>
    );
  }
}

export default App;
