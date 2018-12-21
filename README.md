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

# Screenshots

The homepage
![homepage](https://raw.githubusercontent.com/peteryao7/off-by-one/master/homepage.png)

The question page
![question-page](https://raw.githubusercontent.com/peteryao7/off-by-one/master/question-show.png)

# Features
CRUD functions were made to implement functionality in integrating questions and answers to the site. Users may create, retrieve and edit any question and answer on OBO and delete their own questions and answers. A visitor may browse their the full list of questions and view each question and answer, but will be required to log in to perform any other action on the site.

One function that posed to be a challenge was keeping track of the user that made the question or answer when a potentially different user interacted with a question or answer. In the components of my question and answer forms, I was not correctly keeping track of the user's information in my props, so it was only rendering the user to be null. To fix the issue, I passed down the question or answer creator's username by calling an association inside of my API views. From there, I had access to the username of the question/answer creator easily and had no confusion with what user I wanted to manipulate.

Another bug that took some time for me to figure out was the behavior of each element on the screen when I resized the window. Originally, I gave many div elements a position: relative or position: absolute property so I could forcibly place the div where it needed to be, but the element would be completely out of place if I scrolled through the website or resized the browser window slightly. Afterwards, I moved to using Flexbox, replaced every position property in my CSS, and re-aligned every single element I previously had to modify. Another CSS function that proved to be useful was the @media rule with display: none, which made certain elements disappear if I resized the window. This made the website less cluttered and still usable if I minimized the screen to an extreme amount.

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
