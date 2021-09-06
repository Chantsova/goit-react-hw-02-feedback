import React, { Component } from 'react';
import './CounterFeedbacks.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class CounterFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelAddFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Section
            title={'Magical unicorns want your opinion!'}
            children={
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handelAddFeedback}
              />
            }
          />

          {this.countTotalFeedback() > 0 ? (
            <Section
              title={'Statistics'}
              children={
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              }
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </>
    );
  }
}

export default CounterFeedback;
