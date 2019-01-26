var React = require('react');
class Index extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>FruityShare!</h1>
      </body>
    </html>
    );
  }
}

module.exports = Index;
