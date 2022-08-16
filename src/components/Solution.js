import React, { Component } from "react";

export class Solution extends Component {
  render() {
    let underScores = [];
    for (let i = 1; i <= 4; i++) {
      underScores.push("_ ");
    }
    return (
      <div>
        {underScores.map((underScore) => (
          <span>{underScore}</span>
        ))}

        <div>
          <em>Your ideal mood when coding.</em>
        </div>
      </div>
    );
  }
}


