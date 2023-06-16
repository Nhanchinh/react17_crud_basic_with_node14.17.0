import React from 'react';
import ChildComponent from '../example/ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    state = {


        job: [
            { id: 'job1', titlejob: 'fresher', salary: '600' },
            { id: 'job2', titlejob: 'intern', salary: '100' },
            { id: 'job3', titlejob: 'junior', salary: '1100' },
        ]
    }

    addNewJob = (j) => {
        console.log('job:>>', j)
        this.setState({
            job: [...this.state.job, j]
        })
    }
    deleteJob = (j) => {
        let subjob = this.state.job;
        subjob = subjob.filter(val => val.id !== j.id)
        this.setState({
            job: subjob
        })

    }

    render() {
        return (
            <div>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    // firstname={this.state.firstname}
                    // lastname={this.state.lastname}

                    job={this.state.job}
                    deleteJob={this.deleteJob}

                />


            </div>




        )
    }

}
export default MyComponent