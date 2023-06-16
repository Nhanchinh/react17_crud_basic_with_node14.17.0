import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showjob: false
    }

    HandleShowHide = () => {
        this.setState(
            {
                showjob: !this.state.showjob
            }
        )
    }
    handleDelete = (e) => {
        console.log("delete:", e)
        this.props.deleteJob(e)
    }



    render() {
        let { showjob } = this.state
        let { name, age, address, job } = this.props;




        return (
            <>
                {showjob === false ? <div><button onClick={() => { this.HandleShowHide() }}>show</button></div>


                    :

                    <>
                        <div>

                            <div>{this.props.name}</div>

                            {job.map((val, index) => {
                                if (val.salary > 500) {
                                    return <div key={val.id}>

                                        {val.titlejob}-{val.salary}<> </><span onClick={() => { this.handleDelete(val) }}>x</span>
                                    </div>
                                }


                            })}



                        </div>

                        {<div><button onClick={() => { this.HandleShowHide() }}>hide</button></div>}
                    </>
                }
            </>


        )
    }

}
export default ChildComponent