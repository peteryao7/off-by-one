# off-by-one

[Live Site!](https://off-by-one.herokuapp.com/)

Off By One is a full stack Q&amp;A application inspired by Stack Overflow. Users may ask, answer and edit questions and answers pertaining to a range of topics, including computer programming, mathematics, and game development.

# Technologies Used
* React - a JavaScript library used for the front end
* Redux - a state container used in conjunction with React
* HTML - determine structure of a page
* CSS - styles a page
* JavaScript - used to manipulate HTML and CSS
* Ruby on Rails - our web application framework written in Ruby to serve as our back end
* PostgreSQL - our database management system
* Webpack - module bundler for our JavaScript application

# Setup

Welcome to Off by One! Please run these commands to get the application up and running on your own machine.

- `git clone` https://github.com/peteryao7/off-by-one
- `bundle install`
- `npm install`
- `bundle exec rails db:setup`
- `npm run start`

# Screenshots

The homepage
![homepage](https://raw.githubusercontent.com/peteryao7/off-by-one/master/off-by-one/homepage.png)

The question page
![question-page](https://raw.githubusercontent.com/peteryao7/off-by-one/master/off-by-one/question-show.png)

# Features
CRUD functions were made to implement functionality in integrating questions and answers to the site. Users may create, retrieve and edit any question and answer on OBO and delete their own questions and answers. A visitor may browse their the full list of questions and view each question and answer, but will be required to log in to perform any other action on the site.

# Some Cool Code

A function that renders errors as an unordered list if the user wants to create a new question:
```
renderErrors() {
    if (this.props.formType === 'new') {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else return (<div></div>)
  }
```

Submitting the user's inputted information for creating a new question to an AJAX call, then redirecting the user to the question show page:

```
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('question[id]', this.state.id);
    formData.append('question[authorId]', this.state.authorId);
    formData.append('question[title]', this.state.title);
    formData.append('question[body]', this.state.body);
    this.props.questionAction(formData).then(
      res => {
        this.props.history.push(`/questions/${res.question.id}`)
      }
    );
  }
```
