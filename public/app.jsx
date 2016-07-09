var Greeter = React.createClass({
  render: function(){
    return(
      <div>
          <h1>Olá mundo em React com JSX!</h1>
      </div>    
    );
  }
});

ReactDOM.render(<Greeter />,  document.getElementById('app'));
