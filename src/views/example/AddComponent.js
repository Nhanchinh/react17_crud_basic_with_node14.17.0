import React from "react";
class addComponent extends React.Component {


    handleeChangeFirtName = (event) => {
        this.setState({
            titlejob: event.target.value
        })
    }
    handleeChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.titlejob || !this.state.salary) {
            alert('missing params')
            return;
        }
        console.log("check<<<:", this.state)
        this.props.addNewJob(
            {
                id: Math.floor(Math.random() * 100),
                titlejob: this.state.titlejob,
                salary: this.state.salary
            }
        )

        this.setState({
            titlejob: '',
            salary: ""
        })

    }

    state = {
        titlejob: ' ',
        salary: '',
    }


    render() {
        return (
            <div>
                <form action="/action_page.php">
                    <label htmlFor="fname">Job Name:</label> <br />
                    <input
                        type="text" id="fname"
                        name="fname"
                        value={this.state.titlejob}
                        onChange={(e) => { this.handleeChangeFirtName(e) }}

                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.salary}
                        onChange={(e) => { this.handleeChangesalary(e) }}
                    /><br />





                    <input type="submit"
                        onClick={(e) => { this.handleSubmitForm(e) }}
                    />




                </form>
            </div>
        )
    }


}
export default addComponent