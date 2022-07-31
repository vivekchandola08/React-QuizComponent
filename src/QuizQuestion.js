import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

export class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state={
            incorrectAnswer:false
        }
    }
    handleClick(buttonText){
        if (buttonText === this.props.quiz_question.answer){
            this.setState({
                incorrectAnswer:false
            })
            this.props.showNextQuestionHandler()
        }
        else{
            this.setState({
                incorrectAnswer:true
            })
        }
    }
  render() {
    return (
      <div>
        <main>
        <section>
          {/* <p>// instruction text goes here</p> */}
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {/* //quiz question button logic goes here */}
            {/* <li>{this.props.quiz_question.answer_options[0]}</li> */}
            {this.props.quiz_question.answer_options.map((answer_option, index)=>{
                return <QuizQuestionButton key={index} button_text = {answer_option} clickHandler={this.handleClick.bind(this)} />
            })}
            {/* <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]}/> */}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
      </main>
      </div>
    )
  }
}

export default QuizQuestion