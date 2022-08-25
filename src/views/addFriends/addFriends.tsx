import React, { Component } from 'react'

import useJudgeTerminal from "../../hooks/useJudgeTerminal";

import Window from './window';
import Mobile from './mobile';

export default class AddFriends extends Component {
  render() {
    const isMobile = useJudgeTerminal()
    return (
      isMobile?<Mobile />:<Window />
    )
  }
}
