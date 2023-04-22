const { Component } = require("react");

class ClassForm extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event){
        this.setState(
            {
                value: event.target.value
            }
            )
    }

    handleEmail(event){
        this.setState(
            {
                value: event.target.value
            }
            )
    }

    handlePassword(event){
        this.setState(
            {
                value: event.target.value
            }
        )
    }

    handleSubmit(event){
        event.preventDefault();
    }

    classData = {
        Name: this.handleName,
        Email: this.handleEmail,
        Password: this.handlePassword
    };

    
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleName}></input>
            </label>
             <label>
                Email:
                <input type="text" value={this.state.value} onChange={this.handleEmail}></input>
            </label>
             <label>
                Password:
                <input type="text" value={this.state.value} onChange={this.handlePassword}></input>
            </label>

            <input type="submit" value="submit"/>
        </form>
        )
    }
}

export default ClassForm;