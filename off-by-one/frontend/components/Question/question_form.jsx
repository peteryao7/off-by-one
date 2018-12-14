// import React from 'react';
// import {withRouter} from 'react-router-dom';
//
// class QuestionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     let questionId = this.props.question ? this.props.question.id : null;
//     let title = this.props.question ? this.props.question.title : '';
//     let body = this.props.question ? this.props.question.body : '';
//     this.state={
//       id: questionId,
//       userId: this.props.userId,
//       title: title,
//       body: body
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.navigateToShow = this.navigateToShow.bind(this);
//   }
//
//   // show original question's title, body if editing a question
//   // deprecated method, find another method to use?
//   componentWillReceiveProps(nextProps){
//
//     if(this.props.formType === 'Edit' && nextProps.question){
//       this.setState({ ['title']: nextProps.question.title,
//         ['body']:nextProps.question.body,
//         ['id']:nextProps.question.id
//       });
//     }
//   }
//
//
//   navigateToShow() {
//     this.props.history.push(`/questions/${this.state.id}`);
//   }
//
//   update(property){
//     return e => this.setState({
//       [property]: e.target.value
//     });
//   }
//
//   editShow(){
//     if(this.props.formType === 'Edit'){
//       return(
//         <div >
//           <div className="header-section">
//             <h1 className="question-title">{this.state.title}</h1>
//           </div>
//           <div className="question-body">
//             {this.state.body}
//           </div>
//         </div>
//       );
//     } else return (<div></div>);
//   }
//
//   editHeaderMessage(){
//     if(this.props.formType === 'Edit') return (<h1 className="question-title manila">Your edit will not be placed in a queue until it is peer reviewed. We welcome all devisive edits, but please make them infernal. Avoid trivial edits unless cardinally necessary.</h1>);
//     else return (<div></div>);
//   }
//   askAQuestion(component){
//     return (
//       <div className="content">
//         <div className="single-question-show">
//           <div className="header-section">
//             <div className="question-index-header">
//               <h1 className="question-title">{this.props.formType} A Question</h1>
//             </div>
//           </div>
//           {this.editHeaderMessage()}
//           <div className="question-body">{component}</div>
//           {this.editShow()}
//         </div>
//       </div>
//     );
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     if(this.props.formType === 'Edit'){
//       this.props.questionAction(this.state);
//       this.navigateToShow();
//     } else{
//       formData.append('question[userId]', this.state.userId);
//       formData.append('question[title]', this.state.title);
//       formData.append('question[body]', this.state.body);
//       this.props.questionAction(formData);
//     }
//   }
//
//
//   render(){
//     const { title, body } = this.state;
//
//     return(
//       <div className="new-question-container">
//         {this.askAQuestion(
//           <form onSubmit={this.handleSubmit}>
//             <label className="question-field">
//               Title
//               <br />
//               <input
//                 type="text"
//                 value={title}
//                 onChange={this.update('title')}
//                 className="question-input-field"
//                 />
//             </label>
//             <br />
//             <label className="question-field">
//               Body
//               <br />
//               <div className="question-text-input-area">
//                 <textarea
//                   value={body}
//                   onChange={this.update('body')}
//                   className="question-input-field"
//                   />
//               </div>
//             </label>
//             <br />
//             <input type="submit" value={`${this.props.formType} Question`}
//               className="new-question-button" />
//           </form>
//         )}
//       </div>
//     );
//   }
// }
// export default withRouter(QuestionForm);
